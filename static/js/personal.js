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
        console.log(data);
        console.log("personal API, retrieved recent videos:", _.size(data.recent));

        /* usare il valore "total" per comporre o modificare la paginazione */

        let lastTimed = "";
        _.each(data.recent, function(video) {
            addVideoRow(video);
        });
        updateProfileInfo(data.supporter);
    });
}

function updateProfileInfo(profile) {
    /* da qui devono essere estratti i gruppi ed eventualmente altri metadati,
     per dire all'utente:
     1) ti riconsociamo
     2) ecco il tuo profilo
     AGGIUNGEREI -- 3 ) cancella il tuo tag (Se c'è), aggiungi un nuovo tag
     così si mescola un riquadro informativo alle uniche 2 attività consentite
     */
    console.log(profile);
};

function downloadCSV() {
    const pk = getPubKey();
    const csvurl = `/api/v1/personal/${pk}/csv`;
    console.log("downloadCSV from: ", csvurl);
    window.open(csvurl);
}

function addVideoRow(video) {
    var id = `${video.id}`;
    let tbody = "<tbody id="+id+" style='display: none;'>";

    // IL MIO USO di alt="" dentro agli <a> è scorretto. vorrei che quell'informazione
    // uscisse questa non dovrebbe essere una tabella, ma delle <div class="row"

    const h = `
    <div class="row">
      <div class="col-2 align-middle" scope="col">
        <small> ${video.relative} </small>
      </div>
      <div class="col-5 align-middle" scope="col">
        <small>
          <a class="icon-small" href="/compare/#${video.videoId}">${video.title}</a>
        </small>
      </div>
      <div class="col-1 align-middle" scope="col">
        <small class="mb-0">
          <a
            class="compare icon-small"
            alt="Compare all the evidences on ${video.title}"
            href="/author/#${video.videoId}">
              [ICONA]
          </a>
        </small>
      </div>
      <div class="col-1 align-middle" scope="col">
        <small class="mb-0">
          <a
            class="compareLink"
            alt="Compare all the evidences from ${video.authorName}"
            href="/author/#${video.videoId}">
              [ICONA]
            </a>
        </small>
      </div>
      <div class="col-1 align-middle" scope="col">
        <small class="mb-0">
          <a
            class="compareLink"
            alt="Compare all the videos suggesting ${video.title}"
            href="/related/#${video.videoId}">
              [ICONA]
          </a>
        </small>
      </div>
      <div class="col-1 align-middle" scope="col">
          <small>
            <a
              class="delete btn btn-sm icon-small delete"
              onclick="removeEvidence('${video.videoId}')">
            </a>
          </small>
      </div>
    `;

    $("#report").append(h);
};

/*
    <p class="mb-0">
       <span class="toggle-related btn btn-sm icon-small arrow-down" onclick="toggleRelated('${video.id}', $(this));"> <b>${video.relatedN}</b> Related</span>
    </p>
*/

function toggleRelated(id, $this) {
  // non capisco a cosa serve
   $('#'+id).toggle('fast','linear', function(){
       if($this.hasClass('arrow-up')) $this.removeClass('arrow-up');
       else  $this.addClass('arrow-up');
   });
}

function addTimeHeader(timestring) {
    const h =`<h5 class="timeheader light-font mb-3 mt-5">${timestring}</h5>`;
    $("#report").append(h);
}

function removeEvidence(id) {
  console.log("todo removeEvidence", id);
}
