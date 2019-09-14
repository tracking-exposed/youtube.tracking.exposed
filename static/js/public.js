/* here the javascript functions used in 'last', 'compare' and 'related',
it is named 'public.js' because implement the usage of public APIs */

function newVideo(videoID) {
    window.location.assign('#' + videoID);
    location.reload();
}

function initRelated() {
    const rId = window.location.href.split('/#').pop();
    if (rId == 'compare') return;
    $("#search").val(rId);

    const url = buildApiUrl('/related/' + rId');
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
                    <a class="notclassiclink" href="/yttrex/compare/#${rId}">→ compare</a>
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
                            <a class="primary" href="/yttrex/compare/#${watched.videoId}">See related</a>
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
    if (_.size(videoId) < 8 || _.size(videoId) > 11) return;
    window.location.replace('/yttrex/related/#' + videoId);
    location.reload();
}

// recent
function fillRecentSlot(item)
{
    let h = `
            <li>
                <p>
                    <a class="linked" onclick="newVideo('${item.videoId}');" href="/yttrex/compare/#${item.videoId}">${item.title}</a>
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

    var     comparison = $('#comparison'),
            comparisonList = $('#comparison-list'),
            comparisonListHead = $('#comparison-list-head');

    const cId = window.location.href.split('/#').pop();

    if (cId == 'compare') return;
    const url = buildApiUrl('videoId' + cId);
    $.getJSON(url, function (results) {

        if (_.size(results) == 0) {
            const nope = `
                <h3 class="text-center">Nope, this video has never been watched by someone with ytTREX extension</h3>
                <p class="text-center">
                    Check if is a valid video, here is the composed link:
                    <a href="https://youtube.com/watch?v=${cId}">https://youtube.com/watch?v=${cId}</a>
                </p>
            `;
            $("#comparison").append(nope);
            return;
        }

        const allrelated = _.flatten(_.map(results, 'related'));

        const hdr = `
            <header class="p-3 text-center alert badge-secondary">
                <em>Now comparing:</em><br />
                <h3 class="mt-0">
                    ${results[0].title}
                </h3>
                <p class="m-0">
                   <b>${_.size(results)} times</b> has been seen this video, and YouTube gave <b>${_.size(allrelated)} related videos</b>
                    <br />
                   <a href="/yttrex/related/#${results[0].videoId}">See related</a> |
                   <a target=_blank href="https://www.youtube.com/watch?v=${results[0].videoId}">See video</a>
                </p>
            </header>
        `;

        comparison.append(hdr);

        const x = _.reverse(_.orderBy(_.groupBy(allrelated, 'videoId'), _.size));

        let lastH = null;
        _.each(x, function (relatedList) {

            if (_.size(relatedList) != lastH) {
                lastH = _.size(relatedList);
                let printed = lastH > 1 ? lastH + " times" : "once";
                let sightenings = `
                    <h4 class="seen text-center">
                        Videos present among the "related list" ${printed}:
                    </h4>
                `;
                $('#comparison').append(sightenings);
            }

            const positions = _.join(_.map(relatedList, 'index'), ', ');
            const relatedVideo = _.first(relatedList);

            let videoEntry = `
                <tr id="${relatedVideo.videoId}" class="step">
                     <td class="video">
                         <b>${relatedVideo.title}</b><br />
                         <a class="linked" href="/yttrex/related/#${relatedVideo.videoId}">See related</a> |
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
            comparisonList.append(videoEntry);
        });
        const thead = `
                <tr>
                    <th>Video</th>
                    <th>Channel</th>
                    <th>Position</th>
                </tr>
            `;
        comparisonListHead.append(thead);
    });

    const url = buildApiUrl('/last')
    $.getJSON(url, function (recent) {
        _.each(recent.content, fillRecentSlot);

    });
}

function unfoldRelated(memo, e) {
    let add = `
        <small class="related">
            <b>${e.index}</b>:
            <span>${e.title}</span>
            <a href="/yttrex/related/#${e.videoId}">See related</a> |
            <a target=_blank href="https://www.youtube.com/watch?v=${e.videoId}">See video</a>
        </small><br />
    `;
    memo += add;
    return memo;
}

function initLast() {
    const url = buildApiUrl('/last')
    $.getJSON(url, function(recent) {
        _.each(recent.content, function(item) {
            let relates = _.reduce(item.related, unfoldRelated, "");
            let h = `
            <p class="last mt-5">
                <code>${item.timeago}</code>
                <b>${item.title}</b>
                <a class="title" href="/yttrex/compare/#${item.videoId}">See related</a>
            </p>
            ${relates}

        `;
            $('#recent').append(h);
        });

    });
}
