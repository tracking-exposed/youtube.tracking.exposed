/* functions used in 'personal' visualization */

function getPubKey() {
    const t = window.location.href.split('/#').pop();
    if(t.length < 40 ) console.log("Wrong token length in the URL");
    return t;
}

function personal() {
    const pk = getPubKey();
    const url = buildApiUrl('personal', pk); // `/personal/${pk}/`);

    $.getJSON(url, (data) => {
        console.log("personal API, retrieved recent videos:", _.size(data.recent));

        let lastTimed = "";
        _.each(data.recent, function(video) {
            if(lastTimed != video.relative) {
                addTimeHeader(video.relative);
                lastTimed = video.relative;
            }
            //console.log(video);
            buildTable(video);
        });
        updateProfileInfo(data.profile);
    });
}

function updateProfileInfo(profile) {
    /* da qui devono essere estratti i gruppi ed eventualmente altri metadati,
     per dire all'utente:
     1) ti riconsociamo
     2) ecco il tuo profilo */
    console.log(profile);
};

function downloadCSV() {
    const pk = getPubKey();
    const csvurl = `/api/v1/personal/${pk}/csv`;
    console.log("downloadCSV from: ", csvurl);
    window.open(csvurl);
}

function buildTable(video) {
    var id = `${video.id}`;
    let tbody = "<tbody id="+id+" style='display: none;'>";

    _.each(video.related, function(r) {
        console.log(r);
        tbody += `
                <tr>
                    <td scope="col" colspan="2">
                        <p class="mb-0">
                            <b class="mr-2">${r.index}</b>
                            ${r.title}<br />
                         </p>
                    </td>
                    <td>
                        <small><a class="compare icon-small" href="/compare/#${r.videoId}">compare</a></small>
                   </td>
                </tr>
        `;
    });
    const h = `
    <table class="table">
        <thead class="thead-light">
            <tr>
                <th class="col-6 align-middle" scope="col">
                    <h5 class="mb-0">${video.title}</h5>
                    <p class="mb-0">
                        <small>by: <a class="compareLink" href="/author/#${video.videoId}">${video.authorName}</a></small> |
                        <small class="mr-3">${video.viewInfo.viewStr}</small>
                        <small><a class="compare icon-small" href="/compare/#${video.videoId}">compare this</a></small>
                    </p>
                </th>
                <th class="col-3 align-middle" scope="col">
                    <p class="mb-0">
                       <span class="toggle-related btn btn-sm icon-small arrow-down" onclick="toggleRelated('${video.id}', $(this));"> <b>${video.relatedN}</b> Related</span>
                    </p>
                </th>
                <th class="col-3 align-middle" scope="col">
                    <!--todo: need a working url for deleting-->
                    <small><a class="delete btn btn-sm icon-small delete" href="api/delete/#${video.videoId}">delete</a></small>
                </th>
        </thead>
        ${tbody}
    </table>
    `;

    $("#report").append(h);
};

function toggleRelated(id, $this) {
   $('#'+id).toggle('fast','linear', function(){
       if($this.hasClass('arrow-up')) $this.removeClass('arrow-up');
       else  $this.addClass('arrow-up');
   });
}

function addTimeHeader(timestring) {
    const h =`<h4 class="timeheader light-font mb-3 mt-5">${timestring}</h4>`;
    $("#report").append(h);
}
