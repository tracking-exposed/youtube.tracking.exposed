/* functions used in 'personal' visualization */

// const SERVER = 'https://youtube.tracking.exposed';
const SERVER = 'http://localhost:9000';

function getPubKey() {
    const t = window.location.href.split('/#').pop();
    if(t.length < 40 ) console.log("Wrong token length in the URL");
    return t;
}

function personal(pages, profile) {

    if(!pages) pages = '10-0';
    else {
        $("#report").empty();
        pages = pages + '-' + (pages - 10);
    }
    const pk = getPubKey();
    const url = buildApiUrl('personal', pk + '/' + pages); // `/personal/${pk}/`);
    $.getJSON(url, (data) => {
        console.log(data.recent);
        _.each(data.recent, addVideoRow);
        addPages(data.total, pages);
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

    if (profile.tag) {
        $("#tag-name").text(profile.tag.name);
        $("#tag-badge").removeAttr('hidden');
    }

    /*     const tag = `<h5>Your contribution is tagged as: <span class="badge badge-info">${tags}</span></h5>`;
        $('#userInfo').append(tag);
        */
    console.log("profile appended: ", profile);
}


function printMessage(element, text, type) {
    if(!type) var type = 'danger';
    element.html('<p class="alert alert-' + type + ' mb-3">' + text + '</p>');
}

function updateTags(e) {
    e.preventDefault();
    const pk = getPubKey();
    const form = $('#tag-form');
    const error = form.find('.error');
    const resultDiv = form.find('.result');
    error.empty();
    resultDiv.empty();
    const tagValue = $('#tag').val();
    const passwordCheck = $('input[name=public-private]').filter(':checked').val();
    const password = $('#password');
    const passwordValue = password.val();
    const url = `${SERVER}/api/v2/profile/${pk}/tag`;
    let data = {};

    if(tagValue == null || tagValue == '') {
        printMessage(error, 'Please, enter a tag name.');
        return;
    }
    data.tag = tagValue;

    if(passwordCheck == 'private') {
        if(passwordValue == null || passwordValue == '') {
            printMessage(error, 'Password is mandatory for private tag.');
            return;
        }
        data.password = passwordValue;
        data.accessibility = 'private';
    } else {
        data.accessibility = 'public';
    }

    //console.log("Content sent in POST: ", url, data);

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
        if(result.error == true) printMessage(resultDiv, result.message);
        else printMessage(resultDiv, 'Tag "<b>' + result.group.name + '</b>" has been created', 'success');
        console.log(result);
        return result;
    });
}

function downloadCSV() {
    const pk = getPubKey();
    const csvurl = `/api/v1/personal/${pk}/csv`;
    console.log("downloadCSV from: ", csvurl);
    window.open(csvurl);
}

function addPages(total, pages) {
    const ul = $('#pagination').find('ul');
    const pageString = pages.split('-').shift();
    const actualPage = pageString.slice(0, -1);

    ul.empty();
    if(total > 10) {
        var page;
        const pagesNumber = total / 10;
        const fixedPageNumber = Math.ceil(pagesNumber);
        const description = `There are <b>${total}</b> evidences. Page <b>${actualPage}</b> of <b>${fixedPageNumber}</b>`;
        $('#total-evidence').html(description);
        for (page = 1; page < fixedPageNumber + 1; page++) {
            let liStyle = '';
            let pageValue =  page + '0';
            if (pageValue == actualPage + '0')  liStyle = ' red';
            ul.append('<li class="page-item"><a class="page-link' + liStyle + '" onclick="personal(' + pageValue + ', true)">'+ page +'</a></li>');
        }
    }
}

function addVideoRow(video) {
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

    $("#" + computedId + " .delete").on('click', removeEvidence);
    $("#" + computedId + " .delete").attr('yttrex-id', `${video.id}`);
    title = $("#" + computedId + " .delete").attr('title')  + "«" + video.title + "»";
    $("#" + computedId + " .delete").attr('title', title);

    $("#" + computedId + " .relative").text(video.relative);
    $("#" + computedId + " .title").text(video.title);

    entry.removeAttr('hidden');
}

function removeEvidence(e) {
    const id = $(this).attr('yttrex-id');
    const pk = getPubKey();
    const deleteURL = `${SERVER}/api/v2/personal/${pk}/selector/id/${id}`;
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
