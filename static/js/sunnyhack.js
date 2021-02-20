
async function queryServerAboutQuerystrings() {
    const url = buildApiUrl('searches', 'peaceful transition of power', 2);
    const retval = await $.getJSON(url, function (results) {
        return results;
    });
    return retval;
}

async function getRecentSearches() {
    /* discontinued or soon to be discontinued */
    const url = buildApiUrl('search', 'keywords', 2);
    return await $.getJSON(url, function (results) {
        return validateResults(results);
    });
    /*  { "selist": [
     *    {
     *      "id": "ab12cd34",
     *      "searchTerms": "Qanon",
     *      "contributions": [ 20, 20, 20 ],
     *      "total": 60,
     *    }, {...}, {...}
     *  ],
     *  "contributors": 5,
     *  "parameters": {
     *    "maxAmount": 200,
     *    "retrieved": 199,
     *    "overflow": false,
     *  }}
     */
}

function validateResults(retval) {

    if(!retval || !retval.parameters)
        retval = { error: true, message: "failure in communicating with server"};
    else if(!_.size(retval.selist) )
        retval = _.merge(retval, {
            error: false, message: "we didn't get any search result from the server"});
    else if(retval.parameters.overflow)
        console.log("Manage paging, overflow observed in the last",
            retval.parameters.hardcodedAmount, retval.parameters.hardcodedUnit);

    if(retval.message)
        console.log("validateResults !OK (error ", retval.error, ") message: ", retval.message);
    else
        console.log("validateResults: OK", JSON.stringify(retval.parameters));

    return retval;
}

async function getCampaignQueryStats(campaignName) {
    /* this function is called by the template in themse/trex called ytSearchCampaign/single.html */
    const url = buildApiUrl('queries', campaignName, 2);
    try {
        return await $.getJSON(url, function (results) {
            return validateResults(results);
        });
    } catch(e) {
        console.error("Unable to fetch data", e);
        return { error: true, message: "failure in communicating with server", code: e.status};
    }
}

async function doDotDump(termId, hashedidname, e) {
    e.preventDefault();
    listofid = [];
    const idname = hashedidname.replace(/#/,'');
    let cinfo = null;
    const url = buildApiUrl('searches', encodeURIComponent(termId), 2);
    try {
        cinfo = await $.getJSON(url);
        if(cinfo.overflow) 
            $(hashedidname).append('<small><b>overflow<b></small>');
    } catch(e) {
        console.error("Unable to fetch data", e);
        $(hashedidname).append('<p><h1><code>Error' + e.message + '</code></h1></p>');
        return;
    }

    const bym = _.groupBy(cinfo.data, 'metadataId');
    const codeList = _.map(bym, function(videos, metadataId) {
        const availv = _.size(videos);
        const when = moment.duration( moment() - moment(_.first(videos).savingTime) ).humanize();
        return '<code class="searchmid" id="'+metadataId+'">' + _.first(videos).pseudo +
            '<small>' + when + '—' + availv + '</small></code>';
    }).join('');
    $(hashedidname).append('<p><input type="text" class="urlo urlo-'+ idname +'"></p><p>'+ codeList +'</p>');
    $(".searchmid").click(function(e) {
        // this contain metadataId from <code>
        updateHref(e.target.id, idname);
    })
}

// keep a copy of selected metadataId to compose URL
let listofid = [];
function updateHref(newId, inputFormId) {
    if(listofid.indexOf(newId) === -1)
        listofid.push(newId);
    const url = window.location.origin + buildApiUrl('searches', listofid.join(',') + '/dot', 2);
    $("input.urlo-" + inputFormId).attr('value', url);
    console.log("href updated", url);
}

function appendLinkList(retrieved, copyFrom, dest) {
    const data = _.orderBy(retrieved.selist, 'searchTerms');
    const campaign = retrieved.campaign;
    console.log(retrieved, campaign);
    if(retrieved.error) return manageError(retrieved, dest);
    /* data is a collection from the API above,
     * copyFrom is CSS selector about a piece of <HTML hidden> acting as a template 
     * dest is a CSS selector where we append the dynamic content */
    console.log("appendLinkList", data, copyFrom, dest, "applying alphabetical sorting");
    const stats = { contributions: retrieved.contributions, totalvideos: 0, keywords: 0, searches: 0 };
    _.each(campaign.queries, function(searchTerms) {

        /* this creation happen in any condition, if entry exists or not */
        const div = $(copyFrom).clone();
        div.removeAttr('hidden');
        div.appendTo(dest);

        const entry = _.find(data, { searchTerms });
        /* entry have different display and logic if AT least one been searched or not */
        if(entry) {
            div.attr("id", entry.id);
            const idname = "#" + entry.id;
            const csvlink = buildApiUrl('searches', encodeURIComponent(entry.searchTerms) + '/CSV', 2);

            $(idname + " > .sunnylink > .searchtimes").text(_.size(entry.searches) + " times");
            $(idname + " > .sunnylink > .totalvideos").text(entry.total + " videos");
            $(idname + " > .sunnylink > .downloadCSV").attr('href', csvlink);
            $(idname + " > .sunnylink > .linkwrapper > .linktoyoutube")
                .attr('href', 'https://www.youtube.com/results?search_query=' + encodeURIComponent(entry.searchTerms));
            $(idname + " > .sunnylink > .linkwrapper > .query").text(entry.searchTerms);
            $(idname + " > .sunnylink > .comparebutton")
                .attr('href', '/chiaro/v/#' + encodeURIComponent(entry.searchTerms));
            $(idname + " > .sunnylink > .dumplist").attr('href', '#');
            $(idname + " > .sunnylink > .dumplist").click(_.partial(doDotDump, searchTerms, idname));

            stats.totalvideos += entry.total;
            stats.searches += _.size(entry.searches);
            stats.keywords += 1;
        } else {
            let idname = _.random(0, 0xffff) + "-ne";
            div.attr("id", idname);
            idname = "#" + idname;

            $(idname + " > .sunnylink > .linkwrapper > .linktoyoutube")
                .attr('href', 'https://www.youtube.com/results?search_query=' + encodeURIComponent(searchTerms));
            $(idname + " > .sunnylink > .linkwrapper > .linktoyoutube").text("do first search⏵");
            $(idname + " > .sunnylink > .linkwrapper > .query").text(searchTerms);
            $(idname + " > .sunnylink > .linkwrapper").css('width', '100%');
            $(idname + " > .sunnylink > .comparebutton").remove();
            $(idname + " > .sunnylink > .searchtimes").remove();
            $(idname + " > .sunnylink > .totalvideos").remove();
            $(idname + " > .sunnylink > .downloadCSV").remove();
            $(idname + " > .sunnylink > .dumplist").remove();
        }
    });
    $("#stats").text(
        `counters: keywords ${stats.keywords}, from ${retrieved.contributors}, searches ${stats.searches}, videos ${stats.totalvideos}, overflow? ${retrieved.parameters.overflow}`
    );
    $("#stats").css('padding', '5px');
}

function manageError(data, dest) {
    $(dest).html('<h4>Error: ' + data.message +'</h4')
}

function appendSearchResult(sourceId, destColumn, data) {
    // sourceId is very often (always?) '#master'
    // destColumn is the CSS selector to append the cloned source feed with 'data'
    _.map(data, function(sr) {
        const newe = $(sourceId).clone();
        const idname = '#' + sr.id;

        newe.removeAttr('hidden');
        newe.attr('id', sr.id);
        newe.appendTo(destColumn);

        /* to modify this keep open ytbox.html */
        $(idname + " > div > div > h5 > span").text(sr.title);
        $(idname + " > div > div > h5 > a").attr('href', `https://www.youtube.com/watch?v=${sr.videoId}`);
        $(idname + " > div > div > img").attr('src', `https://i.ytimg.com/vi/${sr.videoId}/hq720.jpg`);
        $(idname + " > div > div > p > .producer").text(sr.selectedAuthor);
        $(idname + " > div > div > p > .duration").text(sr.displayLength);
        $(idname + " > div > small").text(
            `UX in [${sr.clang.toUpperCase()}], picked when: ${sr.ttl} old, views ${sr.currentViews}, position ${sr.priorityOrder +1}`
        );
    });
}

async function reproduceSearchesOutput(terms, source, destList) {
    console.log(terms, source, destList); // potentially manage paging 
    const url = buildApiUrl('searches', encodeURIComponent(terms), 2);
    try {
        const data = await $.getJSON(url);
        if(data.overflow)
            console.log("Warning: data overflow, manage paging server side too", data.maxAmount);

        const gd = _.groupBy(data.data, 'metadataId');
        const selected = _.map(destList, function(column, i) {
            const dbcount = _.size(_.nth(_.values(gd), i));
            console.log("List", column, "should have", dbcount, "search results");
            return _.nth(_.values(gd), i);
        });

        if(_.size(destList) < _.size(_.keys(gd)))
            console.log("Size of returned amount had more search-results than we have list in the HTML",
                _.size(_.keys(gd)));

        $("#listOf").removeAttr('hidden');
        _.map(selected, function(listOfResults, i) {
            const target = _.nth(destList, i);
            appendSearchResult(source, target, listOfResults);
        });

        _.map($("input"), function(node, i) {
            let text = node.getAttribute('placeholder');
            text = terms + text;
            node.setAttribute('placeholder', text);
            node.setAttribute('metadataId', _.nth(selected, i)[0].metadataId);

            let textnode = _.nth( $(".details"), i);
            textnode.textContent = _.nth(selected, i)[0].savingTime;
        });

    } catch(e) {
        console.error("Unable to fetch data", e);
    }
}