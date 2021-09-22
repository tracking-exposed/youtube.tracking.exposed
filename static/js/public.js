/* here the javascript functions used in 'last', 'compare' and 'related',
it is named 'public.js' because implement the usage of public APIs */

function initAuthor() {

    const videoId = 
        window.location.href.split('/#').length > 1 ?
        window.location.href.split('/#').pop() : "";

    if(_.size(videoId) < 6) {
        $("#loading").text("LOADING recent example from server...");
        buildCardsFromLast("#recent", 'author');
        $("#loading").hide(700)
        invalidVideoId(null, "URL should contain a valid-look-alike YouTube VideoId");
    }

    const url = buildApiUrl('author', videoId);

    $("#loading").text("LOADING from server...");
    $.getJSON(url, function (results) {

        if (!results.content || results.error) {
            $("#loading").text("LOADING recent example from server...");
            buildCardsFromLast("#recent", 'author');
            $("#loading").hide(700);
            return invalidVideoId(videoId, "This video didn't provide results");
        }

        $("#authorName").text(results.authorName)
        $("#total").text(results.total);
        if(results.overflow)
            $("#total").text(results.total + '*');
        $("#recctotal").text(results.content.length);

        /* id: "c8f174dba00a94943f345MtvTVEkJKBI19"
           recommendedChannel: "ViVi Music"
           recommendedTitle: "【Nightcore】ADAMAS"
           recommendedVideoId: "MtvTVEkJKBI"
           savingTime: "2020-03-26T18:12:34.134Z"
           watchedTitle: "【Nightcore】千本桜(Senbonzakura)"
           watchedVideoId: "mrxWkpWBoMI" */
        
        const self = _.filter(results.content, { recommendedChannel: results.authorName });
        const selflist =_.reverse(_.sortBy(_.groupBy(self, 'recommendedTitle'), _.size));
        const ht = `${_.map(selflist, _.partial(produceByAuthorHTML, "strip")).join("\n")}`;
        $("#selflist").html(ht);

        const treasure = _.reject(results.content, { recommendedChannel: results.authorName });
        const trealist =_.reverse(_.sortBy(_.groupBy(treasure, 'recommendedTitle'), _.size));
        const stripone = _.reject(trealist, function(o) { return o.length === 1 });
        const recht = `${_.map(stripone, _.partial(produceByAuthorHTML, "ok")).join("\n")}`;
        $("#externallist").html(recht);
        $("#stripped").text(_.size(trealist) - _.size(stripone));

        $("#percentself").text( 
            _.round( (100 / _.size(results.content)) * _.size(_.flatten(selflist)), 1) + "%"
        )
        $("#percentexternal").text( 
            _.round( (100 / _.size(results.content)) * _.size(_.flatten(trealist)), 1) + "%"
        )

        $("#loading").hide(700)
        $("#results").css('display', 'block');
        console.log("Loading complete", selflist, stripone);
        buildCardsFromLast("#recent", 'author');
    });
}

function produceByAuthorHTML(suppress, samerecommendation) {
    // the are all the same recomemndation for every list,
    // just matters the length
    return `
        ${samerecommendation.length} — 
        ${suppress === 'strip' ? "" : samerecommendation[0].recommendedChannel}
        <a href="/related/#${samerecommendation[0].recommendedVideoId}">
            <small>${samerecommendation[0].recommendedTitle}</small>
        </a>
        <br/>
    `;
}

function invalidVideoId(videoId, additionalInfo) {
    const msg = additionalInfo || "This video has not been watched by someone with ytTREX extension";
    const courtesy = videoId ?
        `Check if <a href="https://youtube.com/watch?v=${videoId}">is a valid video</a>.`
        : "";
    const nope = `
        <h3 class="text-center">Error ${msg}</h3>
        <p class="text-center">${courtesy}</p>
    `;

    $("#error").append(nope);
}

function buildCardsFromLast(containerId, targetAPI) {
    const route = targetAPI ? targetAPI : 'compare';
    const url = buildApiUrl('last');
    console.log("buildCardsFromLast", url);
    $.getJSON(url, function (results) {
        // these are not really 'cards'
        _.each(results.content, function(video) {
            const appended =`
                    <a class="linked" href="/${route}/#${video.videoId}">${video.title}</a>
                    — ${video.occurrencies} evidences (from: ${video.authorName}) — last update ${video.timeago} ago <br/>`;
            $(containerId).append(appended);
        });
        $(".linked").click(function(e) {
            let x = $(this).attr('href');
            window.location.href = x;
            window.location.reload();
        });
    });
}

function initRelated() {
    let relatedId = null;

    if(_.size(window.location.href.split('/#')) == 2)
        relatedId = window.location.href.split('/#').pop();

    if(!relatedId) {
        invalidVideoId(null, "The URL hasn't a videoId; It is necessary, please take a recent one below."),
        buildCardsFromLast("#recent");
        $("#ifRandomVideos").show();
        return;
    }

    const url = buildApiUrl('related', relatedId);
    $.getJSON(url, function (results) {
        if (_.size(results) === 0) {
            const nope = `
                <h3 class="text-center">
                    No! this video never been recommended in any observation.
                </h3>
                <p class="text-center">
                    Eventually, check if <a href="https://youtube.com/watch?v=${relatedId}">is a valid video</a>.
                </p>
            `;
            $("#error").append(nope);
            // this is not an error so I didn't want the same look and feel of an error
            return;
        }

        const target = _.find(results[0].related, {videoId: relatedId});
        if(!target)
            return invalidVideoId(relatedId, "Invalid data found in the database, please alert developers.");

        console.log(target);

        const hdr = `
            <div class="text-center protagonist">
                <h3>
                    ${target.recommendedTitle}
                </h3>
                <p class="strong">
                    ${_.size(results)} videos recommended this (
                    <a class="notclassiclink" href="/compare/#${relatedId}">Compare</a>
                    )
                </p>
            </div>
        `;
        $('#related').append(hdr);

        $(".notclassiclink").click(function(e) {
            let x = $(this).attr('href');
            window.location.href = x;
            window.location.reload();
        });
        _.each(results, function (watched) {
            const match = _.find(watched.related, {videoId: relatedId});
            let videoEntry = `
                <tr id="${watched.videoId}">
                        <td class="video">
                            <b>${watched.title}</b>
                            <a class="primary" href="/compare/#${watched.videoId}">(compare)</a>
                        </td>
                        <td class="author">
                           ${watched.authorName}
                        </td>
                        <td class="foryou">
                           ${match.foryou}
                        </td>
                        <td class="position">
                           ${match.index}
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
                    <th>Video watched</th>
                    <th>Channel</th>
                    <th><i>for you</i></th>
                    <th>Position</th>
                    <th>Happened</th>
                </tr>
            `;
        $('#related-list-head').append(thead);
    });
}

function produceCompareGraph(grouped, recommendationAverage) {
    const rebuilt = _.map(grouped, function(videos) {
        const r = _.first(videos);
        r.occurrencies = _.size(videos);
        return r;
    })
    console.log(rebuilt);
    const c3cfg =  {
        bindto: '#barGraphCompare',
        data: {
            type: 'bar',
            labels: { show: true },
            colors: { 'occurrencies': palette[0] },
            columns: [
                _.concat(['occurrencies'], _.map(rebuilt, 'occurrencies')),
            ]
        },
        axis: {
            x: {
                show: false,
                type: 'category',
                categories: _.map(rebuilt, 'videoId')
            },
        },
        legend: { show: false },
        tooltip: { 
            contents: function (d) {
                let v = rebuilt[d[0].x];
                return `<div style="background-color:white"><small>
                    ${ (v.occurrencies == 1) ?
                        "Seen once" : "Seen " + v.occurrencies + " times" }
                    <br/><small/>
                    <h5>${v.recommendedTitle}</h5><p>
                    ${v.recommendedDisplayL} ${v.recommendedSource}</p></div>
                `;
            }
        },
        grid: {
            y: {
                lines: [ {
                        value: recommendationAverage,
                        text: 'Personalization Factor ' + recommendationAverage,
                    }
                ]
            }
        }
    };
    c3.generate(c3cfg);
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
        invalidVideoId(null, "— You should select a video —");
        buildCardsFromLast("#recent");
        $("#ifRandomVideos").show();
        return;
    }

    const url = buildApiUrl('videoId', compareId);
    $.getJSON(url, function (results) {
        if (_.size(results) == 0)
            return invalidVideoId(compareId);

        const allrelated = _.flatten(_.map(results, 'related'));
        const csvVideoURL = buildApiUrl("videoCSV", results[0].videoId);
        const x = _.reverse(_.orderBy(_.groupBy(allrelated, 'videoId'), _.size));

        /* total recommandation / unique recommendation  = Personalization Factor */
        const recommendationAverage = _.round(_.size(allrelated) / _.size(x), 1);
        console.log(recommendationAverage, _.size(allrelated),  _.size(x) );

        $("#ifVideoExists").show();
        $("#title").text(results[0].title);
        $("#relatedSize").text(_.size(allrelated));
        $("#resultSize").text(_.size(results));
        $("#relatedLink").attr('href', `/related/#${results[0].videoId}`);
        $("#authorLink").attr('href', `/author/#${results[0].videoId}`);
        $("#author").text(results[0].authorName);
        $("#ytLink").attr('href', `https://www.youtube.com/watch?v=${results[0].videoId}`);
        $("#csvLink").attr('href', csvVideoURL);
        $("#perfac").text(recommendationAverage);

        let lastH = null;
        let tableBodyElement = null;
        let tableElement = null;
        _.each(x, function (relatedList) {

            let currentRepetition = _.size(relatedList);
            // something was seen three times now is seen twice ..
            if (currentRepetition != lastH) {
                // when this happen, create a new table
                tableElement = $("#table-master").clone();
                let tableId = "table-" + currentRepetition;
                tableElement.attr('id', tableId);
                $('#comparison').append(tableElement);
                // this bodyElement would be updated by <tr> below
                tableBodyElement = $("#" + tableId + '> tbody');
                // the tableHeader is on top. we might filter if the table become
                // too long.
                let tableHeader = $("#" + tableId + '> thead');
                // The text printed on top
                let printed = "Recommended " + (currentRepetition > 1 ? currentRepetition + " times" : "once");
                tableHeader.html(`<tr>
                    <th class="col-md-3">${printed}</th>
                    <th class="col-md-2">Channel</th>
                    <th class="col-md-7">Position</th>
                </tr>`);

                $("#" + tableId).append(tableHeader);
                // the table is display:none CSS until we don't display it
                $("#" + tableId).show();
            }
            // copy to spot if change in the next iterations
            lastH = currentRepetition;

            // this might or might not be useful: 1,2,11,5,15 what does it gives??
            const positions = _.join(_.orderBy(_.map(relatedList, 'index')), ', ');
            const relatedVideo = _.first(relatedList);
            const videoEntry = `
                <tr id="${relatedVideo.videoId}">
                     <td class="video">
                        ${relatedVideo.recommendedTitle} <br/>
                        <span class="displayLength">&lt;${relatedVideo.recommendedDisplayL ? relatedVideo.recommendedDisplayL : "live"}&gt;</span>
                        <a class="linked" href="/related/#${relatedVideo.videoId}">related</a><span> — </span>
                        <a class="linked" href="/compare/#${relatedVideo.videoId}">compare</a><span> — </span>
                        <a target=_blank href="https://www.youtube.com/watch?v=${relatedVideo.videoId}">watch it</a>
                    </td>
                    <td class="author">
                        ${relatedVideo.recommendedSource}
                    </td>
                    <td class="position">
                         ${positions}
                    </td>
               </tr>
            `;
            tableBodyElement.append(videoEntry);
        });

        produceCompareGraph(x, recommendationAverage);

        $(".linked").click(function(e) {
            let x = $(this).attr('href');
            window.location.href = x;
            window.location.reload();
        });
    });

}

function unfoldRelated(memo, e) {
    // this function is not called?
    let add = `
        <small class="related">
            <b>${e.index}</b>:
            <span>${e.title}</span>
            <a class="linked" href="/related/#${e.videoId}">See related</a> |
            <a target=_blank href="https://www.youtube.com/watch?v=${e.videoId}">See video</a>
        </small><br />
    `;
    memo += add;
    return memo;
}