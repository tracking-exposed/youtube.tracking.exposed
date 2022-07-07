
const c3__graph = [ null, null, null ];
const c3__config = [{
    bindto: '.chart1',
    size: {
        height: 500,
        width: 900
    },
    data: {
        type: 'donut',
        onclick: function (d, element) {
            const authorId = encodeURIComponent(d.id).replace(/\W/g, '');
            _.each( $('.ventry'), function(n) {
                let ismatch = Array.from(n.classList).indexOf(authorId) !== -1;
                if(!ismatch)
                    n.remove();
            })
        }
    },
    donut: {
        expand: true,
        title: "Evidence collected by watched author"
    },
    legend: { show: false }
}, { /* this charts is not actually rendered because youtube 
      * removed silently the 'recommended for you' */
    bindto: '.chart2',
    data: {
        type: 'pie',
        colors: { 'foryou': _.first(palette), 
                  'organic' : _.last(palette)
        },
    },
    legend: { position: 'right'}
}, {
    bindto: '.chart3',
    data: {
        type: 'bar',
        keys: {
            x: 'name',
            value: ['recommended videos']
        },
        labels: { show: true },
        colors: { 'recommended videos': _.first(palette) }
    },
    axis: {
        rotated: true,
        x: {
            type: 'category',
        },
        padding: { left: 330 }
    },
    legend: { show: false },
    size: {
        height: 0, // filled in initializeGraph
    }
}];

function renderC3Graph(graphInfo) {

    throw new Error("Not supported anymore, removed this piece of code from automo:");

    const listOfRelated = _.flatten(_.map(metadata, 'related'));

    /* the pie chars are generated from these reduction and rendered with c3js.org */
    graphs.views = _.countBy(metadata, 'authorName');

    /* a pie chart by counting how many video is recommended for you */
    graphs.reason = _.countBy(listOfRelated, 'foryou');
    graphs.reason = _.reduce(graphs.reason, function(memo, value, key) {
        _.set(memo, (key === 'true') ? 'for you' : 'organic', value);
        return memo;
    }, {});

    graphs.related = _.countBy(listOfRelated, 'recommendedSource')
    graphs.related = _.map(graphs.related, function(amount, name) {
        return { name, 'recommended videos': amount };
    });
    graphs.related = _.reverse(_.orderBy(graphs.related, 'recommended videos'));

    /* ^^^^ it was initially necessary for the piechart */

    /* pie chart first graph */
    c3__config[0].data.json = graphInfo.views;
    let counter = 1;
    c3__config[0].data.colors = _.reduce(graphInfo.views, function(memo, amount, name) {
        _.set(memo, name, _.nth(palette, counter % _.size(palette)));
        counter++;
        return memo;
    }, {});
    try {
        c3__graph[0] = c3.generate(c3__config[0]);
    } catch(error) {
        console.error("In generating graph 0", error.message);
    }
    /* do not render this graph because youtube silenly removed the
       'recommended for you' label 

    c3__config[1].data.json = graphInfo.reason;
    try {
        c3__graph[1] = c3.generate(c3__config[1]);
    } catch(error) {
        console.error("In generating graph 1", error.message);
    } */

    if(_.size(graphInfo.view) <2 ) {
        console.log("Rendering only the piechars! Can't render views with small dataset", graphInfo);
        $("#optionalChart3").hide();
        return;
    }
    console.log("Rendering third C3 graph ", graphInfo.view, graphInfo.reason, graphInfo.related);

    /* in the recommended graph we don't display authors appearing only 
     * once in 10 videos, except if the video is only one */
    c3__config[2].data.json = _.reject(graphInfo.related, { "recommended videos": 1});
    c3__config[2].size.height = _.size(c3__config[2].data.json) * 25;
    const l = _.map(
        _.filter(graphInfo.related, { "recommended videos": 1}),
        'name'
    );
    const h = _.reduce(l, function(memo, name, i) {
        return memo + '<span class="once">' + name + '</span>';
    }, "")
    $(".recommended-once").html(h);
    try {
        c3__graph[2] = c3.generate(c3__config[2]);
    } catch(error) {
        console.error("In generating graph 2", error.message);
    }
}

function reportError(info) {
    $("section").hide();
    $(".container").html('<h4>Fatal error: ' +
        info.message + '</h4>' +
        "<p>If this is your first access, you should perform some activity on Youtube before accessing here; <br/>and be sure extension is enabled from the switch in the popup (click on the icon). </p>"
    );
}

function loadPersonal() {
    /* this is the primary function invoked by personal page */
    const authToken = getPubKey();

    const url = buildApiUrl('personal', authToken);
    $.getJSON(url, (data) => {

        if(data.error) 
            return reportError(data);

        console.log(data);

        if(!data.videos.length) {
            $("#report").html("<h5>No video collected and therefore no recommendations</h5>");
            $("#video--download").addClass('disabled');
        } else {
            _.each(data.videos, addVideoRow);
        }

        if(!data.searches.length) {
            $("#searchlog").html("<h5>No searches collected</h5>");
            $("#search--download").addClass('disabled');
        } else {
            _.each(data.searches, addSearchRow);
        }

        if(!data.homes.length) {
            $("#homelogs").html("<h5>No homepage accessed</h5>");
            $("#homes--download").addClass('disabled');
        } else {
            _.each(data.homes, addHomeRow);
        }

        if(!data.ads.length) {
            $("#adlogs").html("<h5>No Advertisement collected! (Lucky you!)</h5>");
            $("#ads--download").addClass('disabled');
        } else {
            _.each(data.ads, addAdvRow);
        }

        updateProfileInfo(data.supporter);
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
    $('#hereSince').text(profile.hereSince);

    if (profile.tag && profile.tag.id) {
        $("#tag-name").text(profile.tag.name);
        $("#tag-name").addClass("badge-info");
        $("#tag-name").addClass("badge-primary");
        $("#tag-name").removeClass("italic");
        $("#tag-badge").show();
        $("#tag").attr('value', profile.tag.name); // this because delete read from there
    } else {
        $("#tag-name").text("");
        $("#tag-badge").hide();
    }
    console.log("profile display updated:", JSON.stringify(profile, undefined, 2));
}

function printMessage(element, text, type) {
    $("#joinTagButton").removeClass('disabled');
    if(!type) var type = 'danger';
    element.html('<p class="alert alert-' + type + ' mb-3">' + text + '</p>');
}

function getPubKey() {
  const t = window.location.hash.substr(1);
  if(t.length < 42 || t.length > 46 ) {
    console.log("Wrong token length in the URL", t.length);
    $("h1").text("Wrong authentication token in the page?");
  }
  return t;
}

/* CSV related functions, they are clicked by a button/link from personal page */
function downloadSearchCSV() {
    const queryTerms = $(this).attr('yttrex-search-terms');
    const csvurl = buildApiUrl("searches", queryTerms + "/csv", 2);
    console.log("Search CSV via pattern: ", queryTerms, "is:", csvurl);
    window.open(csvurl);
}
/* Confused ?
 - above is about all the search terms CSV
 - below is about the personal searches */
function downloadSearchesCSV() {
    const pk = getPubKey();
    const csvurl = buildApiUrl('personal', pk + '/search/csv', 2);
    console.log("download personal searches CSV from: ", csvurl);
    window.open(csvurl);
}

function downloadVideoCSV() {
    const pk = getPubKey();
    const csvurl = buildApiUrl('personal', pk + '/video/csv', 2);
    console.log("download personal video CSV from: ", csvurl);
    window.open(csvurl);
}

function downloadHomeCSV() {
    const pk = getPubKey();
    const csvurl = buildApiUrl('personal', pk + '/home/csv', 2);
    console.log("download personal home CSV from: ", csvurl);
    window.open(csvurl);
}

function downloadAdsCSV() {
    const pk = getPubKey();
    const csvurl = buildApiUrl('personal', pk + '/home/ads', 2);
    console.log("download personal Ads CSV from: ", csvurl);
    window.open(csvurl);
}

function downloadCSVByVideoId(e) {
    const videoId = $(this).attr('yttrex-videoId');
    const csvurl = buildApiUrl("videoCSV", videoId);
    console.log("videoCSV from: ", csvurl);
    window.open(csvurl);
}
/* end of the CSV related functions */

function addHomeRow(entry) {
    const spans = _.map(entry.selected, function(title) {
        /* same style as search result amount */
        return `<span class="amount">${title}</span>`;
    });
    $("#homelist").append(`<li>
        ${entry.savingTime} <code>${entry.id}</code><br>
        ${spans.join("\n")}
    </li>`);
}

function addAdvRow(entry) {
    /* href: "https://www.youtube.com/watch?v=xaQJbozY_Is"
       metadataId: "1c80e3c1b33c2dbb6fcbbfe944d4aaf6b"
       savingTime: "2021-11-08T23:30:40.454Z"
       sponsoredName: "Audiolibri"
       sponsoredSite: "www.storytel.com/it/it/c/yt-kobane-calling" */
    $("#adlist").append(`<li>
        ${entry.savingTime} + ${entry.metadataId.substr(0, 4)} 
        <b>${entry.sponsoredName || ""}</b>
        <a href="${entry.sponsoredSite}">
            <code>${entry.sponsoredSite}</code>
        </a>
        <br>
        <small><a href="${entry.href}">${entry.href}</a>.
    </li>`);
}

function addSearchRow(searche, i) {
    // console.log(i, searche); 
    /* clang: "en"
        id: "a217a2259295bedd777681ff4f57c9a33a48e338"
        publicKey: "FxMy3C17AijcLhc3pD6gSwLbM16ZFcC9sdLgUJ"
        results: 40
        savingTime: "2020-09-30T17:34:40.125Z"
        query: "trump biden face to face" */
    const entry = $("#searchmaster").clone();
    const computedId = `search-${searche.id}`;
    entry.attr("id", computedId);
    $("#searchlog").append(entry);

    $("#" + computedId + " .title").text(searche.query);
    $("#" + computedId + " .amount").text(searche.results);
    /* below the most horrific datetime manipulation example */
    $("#" + computedId + " .when").text(searche.savingTime.substr(11, 5));

    const ytlink = "https://www.youtube.com/results?search_query=" + encodeURIComponent(searche.query);
    $("#" + computedId + " .repeat").attr('href', ytlink);
    $("#" + computedId + " .repeat").text('repeat search');

    $("#" + computedId + " .csv").on('click', downloadSearchCSV);
    $("#" + computedId + " .csv").attr('yttrex-search-terms', `${searche.query}`);
    title = $("#" + computedId + " .csv").attr('title')  + "«" + searche.query + "»";
    $("#" + computedId + " .csv").attr('title', title);

    $("#" + computedId + " .delete").on('click', removeEvidence);
    $("#" + computedId + " .delete").attr('yttrex-search-id', `${searche.id}`);
    title = $("#" + computedId + " .delete").attr('title')  + "«" + searche.query + "»";
    $("#" + computedId + " .delete").attr('title', title);

    entry.removeAttr('hidden');
}

function addVideoRow(video, i) {

    const entry = $("#master").clone();
    const computedId = `video-${video.id}`;
    const authorId = encodeURIComponent(video.authorName).replace(/\W/g, '');
    entry.attr("id", computedId);
    $("#report").append(entry);

    if(video.relatedN > 0) {
        $("#" + computedId + " .compare").attr('href', `/compare/#${video.videoId}`);
        let title = $("#" + computedId + " .compare").attr('title') + "«" + video.title + "»";
        $("#" + computedId + " .compare").attr('title', title);
    } else {
        disableClick("#" + computedId + " .compare", "This evidence has not related video");
    }

    $("#" + computedId + " .related").attr('href', `/related/#${video.videoId}`);
    title = $("#" + computedId + " .related").attr('title')  + "«" + video.title + "»";
    $("#" + computedId + " .related").attr('title', title);

    $("#" + computedId + " .author").attr('href', `/author/#${video.videoId}`);
    title = $("#" + computedId + " .author").attr('title')  + "«" + video.authorName+ "»";
    $("#" + computedId + " .author").attr('title', title);
    $("#" + computedId + " .author").text(video.authorName);

    if(video.relatedN > 0) {
        $("#" + computedId + " .csv").on('click', downloadCSVByVideoId);
        $("#" + computedId + " .csv").attr('yttrex-videoId', `${video.videoId}`);
        title = $("#" + computedId + " .csv").attr('title')  + "«" + video.title + "»";
        $("#" + computedId + " .csv").attr('title', title);

        $("#" + computedId + " .relatedN").text(video.relatedN);

        $("#" + computedId + " .expandrelated").attr('yttrex-id', `${video.id}`);
        $("#" + computedId + " .expandrelated").on('click', renderRelatedTimeseries);
    } else {
        disableClick("#" + computedId + " .csv", "This evidence has not related video");
    }

    $("#" + computedId + " .delete").on('click', removeEvidence);
    $("#" + computedId + " .delete").attr('yttrex-id', `${video.id}`);
    title = $("#" + computedId + " .delete").attr('title')  + "«" + video.title + "»";
    $("#" + computedId + " .delete").attr('title', title);

    $("#" + computedId + " .relative").text(video.relative);

    if(video.login == true) {
        $("#" + computedId + " .logged").removeAttr('hidden');
    }

    $("#" + computedId + " .title").text(video.title);
    $("#" + computedId + " .repeat").attr('href', `https://www.youtube.com/watch?v=${video.videoId}`);

    entry.addClass(authorId);
    entry.removeAttr('hidden');
}

async function renderRelatedTimeseries(e) {
    const id = $(this).attr('yttrex-id');
    const pk = getPubKey();
    const specificEvidenceURL = buildApiUrl(`personal/${pk}/selector/id/${id}`, null, 2);
    const x = await fetch(specificEvidenceURL, {
        method: 'GET'
    });
    const content = await x.json()
    const evi = _.first(content);
    const fmt = _.map(evi.related, 'recommendedTitle');
    $(this).parent().parent().parent().html('<pre>' + JSON.stringify(fmt, null, 2) + '</pre>');
}

function removeEvidence(e) {
    const id = $(this).attr('yttrex-id');
    const pk = getPubKey();
    const deleteURL = buildApiUrl(`personal/${pk}/selector/id/${id}`, null, 2);
    return fetch(deleteURL, {
        method: 'DELETE',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer' // no-referrer, *client
    }).then(function(response) {
        console.log("Delete API return", response);
        return response.json();
    }).then(function(result) {
        const selectorId = `#video-${id}`;
        $(selectorId).fadeOut(300);
        console.log("Delete operation completed", result);
    });
}

function disableClick(targetId, reason) {
    $(targetId).addClass("interaction-disabled");
    $(targetId).attr('title', reason);
}

function showPassword(status) {
    if( status == 'private') $('#group-password-wrapper').show();
    else $('#group-password-wrapper').hide();
}

const ptiserie_config = {
    bindto: '#series',
    data: {
        mimeType: 'json',
        xFormat: '%Y-%m-%d',
        keys: { value : [ 'videos', 'homepages', 'authors' ], x: 'dayStr' },
        type: 'bar',
        labels: { show: true },
        // groups: [ [ 'videos', 'authors'] ],
        colors: { 'videos': palette[0], 'authors': palette[4], 'homepages': palette[6] }
    },
    regions: [
        { axis: 'x', start: null, end: null, class: 'last-week'}, // filled with API returned data
    ],
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%d-%m',
                culling: {
                    max: 5,
                }
            }
        },
        padding: { left: 330 },
    },
    bar: {
        width: {
            ratio: 0.1
        }
    },
    legend: { show: true },
    tooltip: {
        grouped: false,
    },
    size: {
        height: 600,
    },
    grid: {
        x: {
            show: true,
            lines: [
                { value: null, text: 'Last week', position: 'end', class: 'last-week' }, // filled same 
            ]
        },
    }
};

// THIS IS invoked from the HTML page. produce the timeserises 
function personalTimeseries() {
    const pk = getPubKey();
    const url = buildApiUrl('personal', pk + '/timeline');

    $.getJSON(url, (data) => {
        /* when three day or more is available a new graph appears on top */
        if(_.size(data.aggregated) >= 3) {
            $(".timesavail").removeAttr('hidden');
            console.log(data);
            ptiserie_config.grid.x.lines[0].value = new Date(data.oneWeekAgoDateString);
            ptiserie_config.regions[0].start = data.oneWeekAgoDateString;
            ptiserie_config.regions[0].end = new Date()
                                                .toISOString()
                                                .replace(/T.*/, '');   // remove hours and everything except YYYY-MM-DD

            ptiserie_config.data.json = _.map(data.aggregated, function(dayentry) {
                return {
                    dayStr: dayentry.dayStr,
                    authors: _.size(_.keys(dayentry.authorName)), // authors is simply equal to 'videos'
                    videos: ( dayentry.type && dayentry.type.video ) ? dayentry.type.video : 0,
                    homepages: ( dayentry.type && dayentry.type.home ) ? dayentry.type.home: 0,
                    homevideos: dayentry.totalsuggested,
                }
            });
            c3.generate(ptiserie_config);
        }
    });
}
