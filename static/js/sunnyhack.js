
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
            $(idname + " > .sunnylink > .searchtimes").remove();
            $(idname + " > .sunnylink > .totalvideos").remove();
            $(idname + " > .sunnylink > .downloadCSV").remove();
        }
    });
    $("#stats").text(
        `counters: keywords ${stats.keywords}, from ${retrieved.contributors}, searches ${stats.searches}, videos ${stats.totalvideos}`
    );
    $("#stats").css('padding', '5px');
}

function manageError(data, dest) {
    $(dest).html('<h4>Error: ' + data.message +'</h4')
}