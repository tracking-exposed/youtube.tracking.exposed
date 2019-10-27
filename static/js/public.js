/* here the javascript functions used in 'last', 'compare' and 'related',
it is named 'public.js' because implement the usage of public APIs */

function newVideo(videoID) {
    window.location.assign('#' + videoID);
    console.log("XXX newVideo has been called"); // I'm debugging when this should happen
    location.reload();
}

function initAuthor() {

    const videoId = window.location.href.split('/#').pop();
    if(_.size(videoId) < 6) {
        const nope = `<h3 class="text-center">Error: URL should contain a valid-look-alike YouTube VideoId</h3>`;
        $("#notes").html(nope);
        $("#boring").hide();
        return console.log("error N#1 (validation)");
    }

    const url = buildApiUrl('author', videoId);
    console.log("using", videoId, "connecting to", url);

    $.getJSON(url, function (results) {
        if (_.size(results) === 0) {
            const nope = `
                <h3 class="text-center">Nope, a video with such id has been never found among the evidence collected</h3>
                <p class="text-center">
                   Check if is a valid video, here the YouTube link generated from the videoId you pasted:
                   <a href="https://youtube.com/watch?v=${rId}">https://youtube.com/watch?v=${videoId}</a>
                </p>
            `;
            $("#notes").html(nope);
            return console.log("error N#2 (API)");
        }

        /* if we reach here: good! we've data and now the page will be populated */
        $("#boring").hide();
        $("#title").removeAttr('hidden');
        $(".info").removeAttr('hidden');

        $(".name").text(results.authorName);
        $("#amount").text(results.total);
        $("#treasure-count").text(_.size(results.content.treasure));
        $("#foryou-count").text(_.size(results.content.foryou));
        $("#sameauthor-count").text(_.size(results.content.sameAuthor));

        /* cards creation */
        _.each(results.content.sameAuthor, _.partial(appendCard, "#sameauthor-cards"));
        _.each(results.content.foryou, _.partial(appendCard, "#foryou-cards"));
        _.each(results.content.treasure, _.partial(appendCard, "#treasure-cards"));
    });
}

function appendCard(targetId, video) {

    if(_.size(video) != 1)
        content.log("Condition not properly tested!", video);

    video = _.first(video);
    // console.log(video);

    const entry = $("#master").clone();
    const computedId = `video-${video.id}`;
    entry.attr("id", computedId);
    $(targetId).append(entry);

    $("#" + computedId + " .card-title").text(video.relatedTitle);
    $("#" + computedId + " .card-text").text(video.relatedAuthorName);
    $("#" + computedId + " .text-muted").text(video.savingTime);
    $("#" + computedId).removeAttr('hidden');
}

function initRelated() {
    let relatedId = null;
    if(_.size(window.location.href.split('/#')) == 2) {
        relatedId = window.location.href.split('/#').pop();
        console.log(`Found an ID ${relatedId}`)
        $("#search").val(relatedId);
    } else {
        console.log("Not found any ID (returning without action) rif:", window.location.href);
        $("#search").val("Please write a youtube URL!");
        // maybe highligh an error ?
    }

    const url = buildApiUrl('related', relatedId);
    if(_.isNull(url)) {
        const nope = `
            <h3 class="text-center error">you should select a video or write a video</h3>`;
            //                     ^^^^^  error do not exist
        $("#notes").append(nope);
        return;
    }

    $.getJSON(url, function (results) {
        if (_.size(results) === 0) {
            const nope = `
                <h3 class="text-center">Nope, a video with such id has been never found among the evidence collected</h3>
                <p class="text-center">
                   Check if is a valid video, here the YouTube link generated from the videoId you pasted:
                   <a href="https://youtube.com/watch?v=${rId}">https://youtube.com/watch?v=${rId}</a>
                </p>
            `;
            $("#notes").append(nope);
            return;
        }

        const target = _.find(results[0].related, {videoId: rId});
        const hdr = `
            <div class="text-center protagonist">
                <h3>
                    ${target.title}
                </h3>
                <p class="strong">
                    ${_.size(results)} videos linked to this
                    <a class="notclassiclink" href="/compare/#${rId}">→ compare</a>
                </p>
            </div>

        `;
        $('#related').append(hdr);

        _.each(results, function (watched) {
            const index = _.find(watched.related, {videoId: rId}).index;
            let videoEntry = `
                <tr id="${watched.videoId}" class="step">

                        <td class="video">
                            <b>${watched.title}</b>
                            <a class="primary" href="/compare/#${watched.videoId}">See related</a>
                        </td>
                        <td class="author">
                           ${watched.authorName}
                        </td>
                        <td class="position">
                           ${index}
                        </td>
                        <td>
                            ${watched.timeago} ago
                        </td>

                </tr>
            `;
            $('#related-list').append(videoEntry);
        });


        const thead = `
                <tr>
                    <th>Primary video</th>
                    <th>Primary channel</th>
                    <th>Position</th>
                    <th>Saved on</th>
                </tr>
            `;
        $('#related-list-head').append(thead);
    });
}


function submit() {
    const submitted = $("#search").val();
    const videoId = submitted.replace(/.*v=/, '');
    if (_.size(videoId) < 8 || _.size(videoId) > 11) {
      console.log(`We are excluding ${videoId} because size doens't fit`);
      return;
    }
    window.location.replace('/related/#' + videoId);
    location.reload();
}

// recent
function fillRecentSlot(item)
{
    let h = `
            <li>
                <p>
                    <a class="linked" onclick="newVideo('${item.videoId}');" href="/compare/#${item.videoId}">${item.title}</a>
                    <br />
                    <small> <code>${item.timeago}</code> <code>Related: <b>${item.relatedN}</b></code> </small>
                </p>
           </li>
    `;
    $('#recent').append(h);
}

// #recent and #comparison
// with 'last' we populate some snippet
// with 'getVideoId' we get the videos, it is display the different comparison
function initCompare() {

    var compareId = null;

    if(_.size(window.location.href.split('/#')) == 2) {
        compareId = window.location.href.split('/#').pop();
    } 

    if(_.isNull(compareId)) {
        console.log("Not found any ID (returning without action) rif:", window.location.href);
        const nope = `
            <div class="error"><h3 class="text-center">You should pick a video to compare</h3></div>
        `;
        $("#error").append(nope);
        return;
    }

    const url = buildApiUrl('videoId', compareId);
    $.getJSON(url, function (results) {

        if (_.size(results) == 0) {
            const nope = `
                <h3 class="text-center">Nope, this video has never been watched by someone with ytTREX extension</h3>
                <p class="text-center">
                  Check if is a 
                  <a href="https://youtube.com/watch?v=${compareId}">valid video</a>.
                </p>
            `;
            $("#error").append(nope);
            return;
        }

        const allrelated = _.flatten(_.map(results, 'related'));

        $("#ifVideoExists").show();
        $("#title").text(results[0].title);
        $("#relatedSize").text(_.size(allrelated));
        $("#resultSize").text(_.size(results));
        $("#relatedLink").attr('href', `/related/#${results[0].videoId}`);
        $("#authorLink").attr('href', `/author/#${results[0].videoId}`);
        $("#author").text(results[0].authorName);
        $("#ytLink").attr('href', `https://www.youtube.com/watch?v=/author/#${results[0].videoId}`);

        const x = _.reverse(_.orderBy(_.groupBy(allrelated, 'videoId'), _.size));

        let lastH = null;
        let tableBodyElement = null;
        let tableElement = null;
        _.each(x, function (relatedList) {

            let currentRepetition = _.size(relatedList);
            if (currentRepetition != lastH) {
                tableElement = $("#master").clone();
                let tableId = "table-" + currentRepetition;
                tableElement.attr('id', tableId);
                $('#comparison').append(tableElement);

                tableBodyElement = $("#" + tableId + '> tbody');
                let tableHeader = $("#" + tableId + '> thead');
                let printed = "Reccomended " + (currentRepetition > 1 ? currentRepetition + " times" : "once");
                tableHeader.html(`<tr>
                    <th><h2>${printed}</h2></th>
                    <th>Channel</th>
                    <th>Position</th>
                </tr>`);

                $("#" + tableId).append(tableHeader);
                $("#" + tableId).show();
            }
            lastH = currentRepetition;

            const positions = _.join(_.map(relatedList, 'index'), ', ');
            const relatedVideo = _.first(relatedList);
            const videoEntry = `
                <tr id="${relatedVideo.videoId}" class="step">
                     <td class="video">
                         ${relatedVideo.title}<br />
                         <a class="linked" href="/related/#${relatedVideo.videoId}">See related</a> |
                         <a target=_blank href="https://www.youtube.com/watch?v=${relatedVideo.videoId}">See video</a>
                    </td>
                    <td class="author">
                        ${relatedVideo.source}
                    </td>
                    <td class="position">
                         ${positions}
                    </td>
               </tr>
            `;
            tableBodyElement.append(videoEntry);
        });
    });

}

function unfoldRelated(memo, e) {
    let add = `
        <small class="related">
            <b>${e.index}</b>:
            <span>${e.title}</span>
            <a href="/related/#${e.videoId}">See related</a> |
            <a target=_blank href="https://www.youtube.com/watch?v=${e.videoId}">See video</a>
        </small><br />
    `;
    memo += add;
    return memo;
}

function initLast() {
    const url = buildApiUrl('last')
    $.getJSON(url, function(recent) {
        _.each(recent.content, function(item) {
            let relates = _.reduce(item.related, unfoldRelated, "");
            let h = `
            <p class="last mt-5">
                <code>${item.timeago}</code>
                <b>${item.title}</b>
                <a class="title" href="/compare/#${item.videoId}">See related</a>
            </p>
            ${relates}

        `;
            $('#recent').append(h);
        });

    });
}
