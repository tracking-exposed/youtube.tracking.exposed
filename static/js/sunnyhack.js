
async function queryServerAboutQuerystrings() {
    const url = buildApiUrl('searches', 'peaceful transition of power', 2);
    const retval = await $.getJSON(url, function (results) {
        return results;
    });
    return retval;
}

async function getRecentSearches() {
    const url = buildApiUrl('search', 'keywords', 2);
    const retval = await $.getJSON(url, function (results) {
        return results;
    });
    /*  { "selist": [
     *    {
     *      "id": "ab12cd34",
     *      "t": "Qanon",
     *      "amount": 60,
     *      "searchId": [
     *        "38708bd5cc61134ea0763f1b079fc94bcff1a615", "21dc51be94b4b64ea6380f96e031d48818112e31", "7def339253ac062721a2f58cadf90aa739d23945"
     *      ],
     *      "searches": 3
     *    }, {...}, {...}
     *  ],
     *  "parameters": {
     *    "hardcodedAmount": 17,
     *    "hardcodedUnit": "days",
     *    "amount": 200,
     *    "skip": 0
     *  }}
     */

    if(!retval || !retval.parameters) 
        return { error: true, message: "failure in communicating with server"};

    if(!retval.selist || _.size(retval.selist) == 0)
        return _.merge(retval.parameters, {
            error: true, message: "we didn't get any search result from the server"});

    if(retval.parameters.overflow)
        console.log("Manage paging, overflow observed in the last",
            retval.parameters.hardcodedAmount, retval.parameters.hardcodedUnit);

    console.log("returning", retval.parameters.amount, "over a maximum of", retval.parameters.max);
    return retval.selist;
}

function appendLinkList(data, copyFrom, dest) {
    /* data is a collection from the API above,
     * copyFrom is CSS selector about a piece of <HTML hidden> acting as a template 
     * dest is a CSS selector where we append the dynamic content */
    console.log("appendLinkList", data, copyFrom, dest, "applying alphabetical sorting");
    const stats = { totalvideso: 0, keywords: 0, searches: 0}
    _.each(_.orderBy(data, 't'), function(entry) {
        const div = $(copyFrom).clone();
        div.removeAttr('hidden');
        div.attr("id", entry.id);
        div.appendTo(dest);
        const idname = "#" + entry.id;
        const csvlink = buildApiUrl('searches', entry.t.replace(/\ /g, '+') + '/CSV', 2);

        $(idname + " > .sunnylink > .searchtimes").text(entry.searches + " times");
        $(idname + " > .sunnylink > .totalvideos").text(entry.amount  + " videos");
        $(idname + " > .sunnylink > .downloadCSV").attr('href', csvlink);
        $(idname + " > .sunnylink > .linkwrapper > .linktoyoutube").attr('href', 'https://www.youtube.com/results?search_query=' + entry.t);
        $(idname + " > .sunnylink > .linkwrapper > .query").text(entry.t);

        stats.totalvideso += entry.amount;
        stats.searches += entry.searches;
        stats.keywords += 1;
    });
    $("#stats").text(`counters: keywords ${stats.keywords}, searches ${stats.searches}, videos ${stats.totalvideso}`);
    $("#stats").css('padding', '5px');
}
