function getPubKey() {
    const t = window.location.href.split('/#').pop();
    if(t.length != 44 ) console.log("Wrong token length in the URL", t.length);
    return t;
}

function personal(pages, profile) {

    if(!pages) pagestr = '10-0';
    else {
        $("#report").empty();
        var pagesDecimal = pages + '0';
        var pagesNumber = Number(pagesDecimal);
        var pagestr = '10' + '-' + ( pagesNumber - 10 );
    }
    const pk = getPubKey();
    const url = buildApiUrl('personal', pk + '/' + pagestr);
    $.getJSON(url, (data) => {
        _.each(data.recent, addVideoRow);
        addPages(data.total, pagestr);
        if(!profile) updateProfileInfo(data.supporter);
    });
}

function updateProfileInfo(profile) {
    const publicKey = `${profile.publicKey}`;
    const userName = `${profile.p}`;
    const createdAt = new Date(`${profile.creationTime}`);
    const lastActivity = new Date(`${profile.lastActivity}`);
    const createdAtFormatted = createdAt.toUTCString();
    const lastActivityFormatted = lastActivity.toUTCString();

    $('#createdAtFormatted').text(createdAtFormatted);
    $('#accessToken').text(publicKey);
    $('#lastActivityFormatted').text(lastActivityFormatted);
    $('#user-name').text(userName);

    if (profile.tag && profile.tag.name) {
        $("#tag-name").text(profile.tag.name);
        $("#tag-badge").show();
    }
    console.log("profile display", JSON.stringify(profile, undefined, 2));
}

function printMessage(element, text, type) {
    if(!type) var type = 'danger';
    element.html('<p class="alert alert-' + type + ' mb-3">' + text + '</p>');
}

function createTag() { return manageTag('create'); }
function joinTag() { return manageTag('join'); }
function manageTag(action) {
    const pk = getPubKey();
    const error = $('#error');
    const resultDiv = $('#result');
    error.empty();
    resultDiv.empty();

    console.log("manageTag", action);

    const tag = $('#tag').val();
    const password = $("#password").val();
    const description = $("#description").val();
    const private = $("#private").is(':checked');

    /* in data we add the tag info to be sent */
    let data = {
        tag,
        password,
        description,
        accessibility: private ? 'private': 'public'
    };

    /* this was happening in development, maybe never happen in production */
    if( _.size(password) > 0 && data.accessibility == 'private')
        $("#group-password-wrapper").show();
    if( _.size(description) >  0 && action == 'create' )
        $("#description-block").show();

    /* validation */
    if(_.size(tag) == 0) {
        printMessage(error, 'Please, enter a tag name.');
        return;
    }

    if(action == 'create') {
        $("#description-block").show();
        if(_.size(description) == 0) {
            printMessage(error, 'Please add a description to the new tag');
            return;
        }
    } else {
        $("#description-block").hide();
        _.unset(data, 'description');
    }

    if(private) {
        $("#group-password-wrapper").show();
        if(_.size(password) < 8) {
            printMessage(error, 'Private tag require a password longer than 8 keys.');
            return;
        }
    } else {
        data.password = "";
        $("#group-password-wrapper").hide();
    }

    /* XHR section */
    let url = null;
    if(action == 'create')
        url = buildApiUrl(`profile/${pk}/tag`, null, 2);
    else /* action == 'update' */
        url = buildApiUrl(`profile/${pk}`, null, 2);

    console.log("Ready to ", action, tag, "via", url);

    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(function(response) {
        return response.json();
    }).then(function(result) {
        if(result.error == true) {
            console.log("Server side error:", result);
            printMessage(resultDiv, result.message);
        }
        else {
            updateProfileInfo(result.profile);
            printMessage(resultDiv, 'Tag "<b>' + result.group.name + '</b>" has been created', 'success');
        } 
        return result;
    })
    .catch(function(e) {
        printMessage(error, "fail to communicate with the server");
        console.log(e.message);
    });
}

function downloadCSV() {
    const pk = getPubKey();
    const csvurl = `/api/v1/personal/${pk}/csv`;
    console.log("downloadCSV from: ", csvurl);
    window.open(csvurl);
}

function between(x, min, max) {
    return x >= min && x <= max;
}

function addPages(total, pages) {
    const ul = $('#pagination').find('ul');
    const pageString = pages.split('-').pop();
    const actualPage = Number(pageString.slice(0, -1)) + 1 ;
    ul.empty();
    if(total > 10) {
        var page;
        const pagesNumber = _.round(total / 10);
        const description = `There are <i>${total}</i> evidences. Page <b>${actualPage}</b> of <b>${pagesNumber}</b>`;
        $('#total-evidence').html(description);

        for (page = 1; page < pagesNumber + 1; page++) {
            let pageValue = page;
            let liStyle = '';
            if (pageValue == actualPage) liStyle = ' red';
            if (between(page, actualPage-3, actualPage+3)) ul.append('<li class="page-item"><a class="page-link' + liStyle + '" onclick="personal(' + pageValue + ', true)">'+ page +'</a></li>');
        }
    }
}


function addVideoRow(video, i) {
    if(!video.videoId) {
        console.log(i, "Nope!!", video);
        return;
    }

    const entry = $("#master").clone();
    const computedId = `video-${video.id}`;
    entry.attr("id", computedId);
    $("#report").append(entry);

    $("#" + computedId + " .compare").attr('href', `/compare/#${video.videoId}`);
    let title = $("#" + computedId + " .compare").attr('title') + "«" + video.title + "»";
    $("#" + computedId + " .compare").attr('title', title);

    $("#" + computedId + " .related").attr('href', `/related/#${video.videoId}`);
    title = $("#" + computedId + " .related").attr('title')  + "«" + video.title + "»";
    $("#" + computedId + " .related").attr('title', title);

    $("#" + computedId + " .author").attr('href', `/author/#${video.videoId}`);
    title = $("#" + computedId + " .author").attr('title')  + "«" + video.authorName+ "»";
    $("#" + computedId + " .author").attr('title', title);

    $("#" + computedId + " .delete").on('click', removeEvidence);
    $("#" + computedId + " .delete").attr('yttrex-id', `${video.id}`);
    title = $("#" + computedId + " .delete").attr('title')  + "«" + video.title + "»";
    $("#" + computedId + " .delete").attr('title', title);

    $("#" + computedId + " .producer").text(video.authorName);
    $("#" + computedId + " .relative").text(video.relative);
    $("#" + computedId + " .title").text(video.title);

    entry.removeAttr('hidden');
}

function removeEvidence(e) {
    const id = $(this).attr('yttrex-id');
    const pk = getPubKey();
    const deleteURL = buildApiUrl(`personal/${pk}/selector/id/${id}`, null, 2);
    console.log(deleteURL);
    return fetch(deleteURL, {
        method: 'DELETE',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer' // no-referrer, *client
    }).then(function(response) {
        console.log(response);
        return response.json();
    }).then(function(result) {
        const selectorId = `#video-${id}`;
        $(selectorId).fadeOut(300);
        console.log(result);
    });
}

function showPassword(status) {
    if( status == 'private') $('#group-password-wrapper').show();
    else $('#group-password-wrapper').hide();
}
