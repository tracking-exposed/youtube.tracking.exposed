
const DATAFETCHSECONDS = 10;
const ANOMALYCHECKSECONDS = 60;
let lastUpdate = null;

function cutSegment(segment) {
    if(_.size(segment) > 14)
        return segment.substr(0, 13) + '…';
    return segment;
}

function prettifyHref(href) {
    const parsable = href.replace(/https?:\/\/www\.youtube\.com/, '');
    let retinfo = []
    if(_.startsWith(parsable, '/watch?')) {
        retinfo.push('▷');
        let parmonly = parsable.substr(_.size('/watch?'));
        let parmsed = new URLSearchParams(parmonly);
        for (let [key, value] of parmsed.entries()) {
            if(key == 'v') retinfo.push(value);
            else retinfo.push(key);
        }
    } else if(_.startsWith(parsable, '/results?')) {
        retinfo.push('🔎');
        let parmonly = parsable.substr(_.size('/results?'));
        let parmsed = new URLSearchParams(parmonly);
        for (let [key, value] of parmsed.entries()) {
            if(key == 'search_query') retinfo.push(value);
            else retinfo.push(key);
        }
    } else if(_.startsWith(parsable, '/channel')) {
        retinfo.push('🗣');
        retinfo.push(cutSegment(parsable.substr(_.size('/channel/'))))
    } else if(_.startsWith(parsable, '/?') || _.size(parsable) < 2) {
        retinfo.push('⌂');
    } else {
        retinfo.push('🖾');
        retinfo.push(cutSegment(parsable));
    }
    return retinfo.join(' ');
}

function monitor() {
    $("#loader").fadeOut(DATAFETCHSECONDS * 1000);
    setTimeout(monitorUpdate, DATAFETCHSECONDS * 1000);
    setInterval(checkUpdates, ANOMALYCHECKSECONDS * 1000)
}

function checkUpdates() {
    if(!lastUpdate)
        console.error("can't check lastUpdate!");
    else {
        let d = (new Date() - lastUpdate) / 1000;
        console.log("checkUpdates", d);
        if(d > 60) {
            const randomId = "X-" + _.random(0, 0xffff);
            let elem = createE({
                template: 'client',
                relative: new Date(),
                id: randomId,
            }, 0);
            appendInfo(elem, {
                message: `excessive delay in refreshing, (${d}), consider manual F5`,
                id: randomId,
            });
        }
    }
}

function existingId(entry) {
    let exist = $("#" + entry.id);
    return !!exist.length;
}

function monitorUpdate() {

    const key = window.location.href.split('#');
    if(key.length === 1) {
        $("div").text("Missing key!");
        return;
    }
    const url = buildApiUrl('monitor', key[1], 2);
    // every execution look for the last 5 minutes, but potentially
    // the API was supporting a DateTime parameters and returning only
    // the most recent pkgs.
    // duplication are stripped here: client-side

    $("#loader").finish();
    $("#loader").addClass('connecting');
    $("#loader").show();

    $.getJSON(url, (data) => {

        lastUpdate = new Date();

        if(!_.size(data.content)) {
            const randomId = "X-" + _.random(0, 0xffff);
            let elem = createE({
                template: 'client',
                relative: new Date(),
                id: randomId,
            }, 0);
            appendInfo(elem, {
                message: "Zero elements observed!",
                id: randomId,
            });
        } else {
            console.log("Received:", _.size(data.content),
                        "Objects:", _.countBy(data.content, 'template'));
        }

        const added = _.map(data.content, function(entry, i) {
            if(existingId(entry))
                return { mean: 'duplicated' };

            let render = _.get(templates, entry.template);
            if(!render) {
                console.warn("Invalid template name!", entry);
                return { mean: 'error' };
            }

            let elem = createE(entry, i);
            render(elem, entry);
            return { mean: entry.template };
        });

        if(_.size(added)) {
            let id = "U-" + _.random(0, 0xfffff);
            let countby = _.countBy(added, 'mean');
            let elem = createE({
                template: 'stat',
                relative: 0,
                id,
            }, 0);
            appendStat(elem, {
                countby,
                id,
                lastUpdate,
                start: data.start,
                end: data.end,
                duration: data.duration,
            });
        }

        $("#loader").removeClass('connecting');
        $("#loader").fadeOut(DATAFETCHSECONDS * 1000);
        setTimeout(monitorUpdate, DATAFETCHSECONDS * 1000);
    });
}

function createE(entry, incrementalNumber) {
    const elem = $("#master--" + entry.template).clone();
    elem.attr("id", entry.id);
    $("#fuffa").prepend(elem);

    if(entry.relative)
        $("#" + entry.id + " .relative").text(entry.relative + ' s.');

    let symbol = $("#" + entry.id + " .number").text();
    $("#" + entry.id + " .number").text(symbol + " " + incrementalNumber);

    elem.removeAttr('hidden');
    return elem;
}

function appendInfo(elem, o) {
    // expected: message, subject, id
    $("#" + o.id + " .message").text(o.message);
    $("#" + o.id + " .subject").text(o.subject);
}
function appendHtml(elem, o) {
    // 'id', 'metadataId', savingTime -> 'timevar', 'processed', 'selector', 'href', 'size', 'publicKey'
    let checkbox = o.processed ? "☑" : null;
    if(_.isNull(checkbox))
        checkbox = _.isUndefined(o.processed) ? "☐" : "☒";

    // $("#" + o.id + " .id").text(o.id.substr(0, 6));
    // TODO point to the direct evidence 
    $("#" + o.id + " .timevar").text("↓" + o.printable);
    $("#" + o.id + " .selector").text(o.selector + " " + checkbox);
    $("#" + o.id + " .size").text(o.size);

    $("#" + o.id + " .publicKey").html('<a href="/personal/#' + o.publicKey +
        '" target=_blank>' + o.publicKey.substr(0, 4) + '</a>');

    $("#" + o.id + " .href").html('<a href="' + o.href + '" target=_blank>' +
            prettifyHref(o.href) + '</a>');

    elem.addClass(o.metadataId);
    elem.mouseover(() => {
        $("." + o.metadataId).toggleClass('bluizza');
    });
    elem.mouseout(() => {
        $("." + o.metadataId).toggleClass('bluizza');
    });
}
function appendMetadata(elem, o) {
    // 'id', 'title', 'videoId', 'watcher', 'authorName', 'authorSource', 'viewInfo', savingTime -> timevar
    $("#" + o.id + " .id").text(o.id.substr(0, 6));

    if(_.size(o.videoId))
        $("#" + o.id + " .videoId").html('<a href="/compare/#' + o.videoId +
            '" target=_blank><i>compare</i></a>');

    $("#" + o.id + " .timevar").text(o.printable);
    $("#" + o.id + " .processed").text(o.processed);
    $("#" + o.id + " .selector").text(o.selector);

    if(_.size(o.authorSource))
        $("#" + o.id + " .authorName").text(o.authorName);
    else
        $("#" + o.id + " .authorName").html('<a href="' + 
                'https://www.youtube.com' + o.authorSource +
                '" target=_blank>' + o.authorName + '</a>');

    /* this mirror htmls.metadataId */
    elem.addClass(o.id);
    elem.mouseover(() => {
        $("." + o.id).toggleClass('bluizza');
    })
    elem.mouseout(() => {
        $("." + o.id).toggleClass('bluizza');
    });
}
function appendSupporter(elem, o) {
    // 'publicKey', 'p', 'creationTime' -> timevar, 'version'
    $("#" + o.id + " .p").text(o.p);
    $("#" + o.id + " .publicKey").html('<a href="/personal/#' + o.publicKey +
        '" target=_blank>' + o.publicKey.substr(0, 4) + '</a>'
    );
    $("#" + o.id + " .timevar").text(o.printable);
    $("#" + o.id + " .version").text(o.version);
}
// the two below are not in 'templates' because invoked by this script ONLY
function appendClientInfo(elem, o) {
    // message, subject, id
    $("#" + o.id + " .message").text(o.message);
    $("#" + o.id + " .subject").text(o.subject);
}
function appendStat(elem, o) {
    // countby - object, lastUpdate, lastExecution, subject, id
    $("#" + o.id + " .countby").text(
        JSON.stringify(o.countby).replace(/[}{\"]/g, '')
    );
    $("#" + o.id + " .lastUpdate").text("c:" + o.lastUpdate.toISOString().substr(11,8) );
    $("#" + o.id + " .start").text("s:" + o.start);
    $("#" + o.id + " .end").text("e:" + o.end);
    $("#" + o.id + " .duration").text(o.duration);
}

/* the template names are defined in backend/routes/monitor.js, 
   each of them point to a rendering function */
const templates = {
    'info': appendInfo,
    'htmls': appendHtml,
    'metadata': appendMetadata,
    'supporters': appendSupporter,
};

/* one of the few other admin-only feature */
async function performDelete() {
    const password = $("#password").val();
    const targetId = $("#targetId").val();
    const collection = $("#collection").val();
    const keyname = $("#keyname").val();
    const durl = buildApiUrl("deleter", `${password}/${collection}/${keyname}/${targetId}`, 2);
    const response = await fetch(durl, { method: 'DELETE' });
    const result = await response.json();
    if(result.error)
        $("#results").html("<span style='color:red'>" +
            result.message + "</span>");
    else
        $("#results").html("<p>Result: <code>" +
            result.message + "</code></p>");
}