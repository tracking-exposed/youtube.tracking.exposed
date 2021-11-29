
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

function getPubKey() {
    const t = window.location.href.split('/#').pop();
    if(t.length != 44 ) console.log("Wrong token length in the URL", t.length);
    return t;
}

/* -- EXECUTION STARTS HERE */
function loadPersonal() {

    const pk = getPubKey();
    const url = buildApiUrl('personal', pk);
    $.getJSON(url, (data) => {

        if(data.error) 
            return reportError(data);

        $("#stats").html(JSON.stringify(data.stats));
        // removed invoke of renderC3Graph, removed data.graphs
        _.each(data.videos, addVideoRow);
        _.each(data.searches, addSearchRow);
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

function removeTag() { return manageTag('remove'); }
function joinTag() { return manageTag('join'); }
function manageTag(action) {
    /* initially I desgined create and join as different operations.
     * because it was less usability friendly, now there is also join and delete.
     * the js sanity checks, requirements and the HTML form are commented but 
     * preserved in case we need to expand this functionality, it should happen
     * by supporting a link that automatically subscrive a watcher under a tag */
    const pk = getPubKey();
    const error = $('#error');
    const resultDiv = $('#result');
    error.empty();
    resultDiv.empty();

    console.log("manageTag", action);
    /* this class is removed in printMessage because is the exit flow */
    $("#joinTagButton").addClass('disabled');

    const tag = $('#tag').val();
    // const password = $("#password").val();
    // const description = $("#description").val();
    // const private = $("#private").is(':checked');

    /* in data we add the tag info to be sent */
    let data = {
        tag,
        password : '',
        description: '',
        accessibility: 'public' // private ? 'private': 'public'
    };

    /* validation */
    if(_.size(tag) == 0) {
        printMessage(error, 'Please, enter a tag name.');
        return;
    }

    /*
    if( _.size(password) > 0 && data.accessibility == 'private')
        $("#group-password-wrapper").show();
    if( _.size(description) >  0 && action == 'create' )
        $("#description-block").show();

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
    } */

    /* XHR section towards tagging! */
    let url = null, APIcall = null;
    if(action == 'join') {
        url = buildApiUrl(`profile/${pk}/tag`, null, 2);
        console.log("Ready to ", action, tag, "via", url);
        APIcall = fetch(url, {
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
        });
    }
    else /* action == 'remove' */ {
        $('#tag').attr('value', '');
        $('#removeButton').text("Communicating...")
        url = buildApiUrl(`profile/${pk}/tag/${tag}`, null, 2);
        console.log("Ready to ", action, tag, "via", url);
        APIcall = fetch(url, {
            method: 'DELETE', 
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
        });
    }

    return APIcall.then(function(response) {
        $('#removeButton').text("Remove tag")
        return response.json();
    }).then(function(result) {
        if(result.error == true) {
            console.log("Server side error:", result);
            printMessage(resultDiv, result.message);
        }
        else {
            updateProfileInfo(result.profile);
            console.log(result);
            printMessage(resultDiv, 'Operation completed.', 'success');
        } 
        return result;
    })
    .catch(function(e) {
        printMessage(error, "fail to communicate with the server");
        console.log(e.message);
    });
}

/* CSV related functions, the first two of them are for 'personal', last is on specific 'videoId' */
function downloadSearchCSV() {
    const queryTerms = $(this).attr('yttrex-search-terms');
    const csvurl = buildApiUrl("searches", queryTerms + "/csv", 2);
    console.log("Search CSV in opening is: ", csvurl);
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

function downloadCSVByVideoId(e) {
    const videoId = $(this).attr('yttrex-videoId');
    const csvurl = buildApiUrl("videoCSV", videoId);
    console.log("videoCSV from: ", csvurl);
    window.open(csvurl);
}

/* ------------- */
function between(x, min, max) {
    return x >= min && x <= max;
}

function addSearchRow(searche, i) {
    // console.log(searche); 
    /* clang: "en"
        id: "a217a2259295bedd777681ff4f57c9a33a48e338"
        publicKey: "FxMy3C17AijcLhc3pD6gSwLbM16ZFcC9sdLgUJrQbUHJ"
        results: 40
        savingTime: "2020-09-30T17:34:40.125Z"
        query: "trump biden face to face" */
    const entry = $("#searchmaster").clone();
    const computedId = `search-${searche.id}`;
    entry.attr("id", computedId);
    $("#searchlog").append(entry);

    $("#" + computedId + " .title").text(searche.query + " (" + searche.results + ")");
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
    if(!video.videoId) {
        console.log(i, "Nope!!", video);
        return;
    }

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
