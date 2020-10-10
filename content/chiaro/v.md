---
title: "CHIARO ― watch collected differences"
subtitle: Here you can consult the data collected on specific search query
description: CHIARO of tracking.exposed works by collecting personalized search results from YouTube
date: 2020-10-09T15:01:21+01:00
draft: false
type: app
extraCSS: "/css/sunnyhack.css"
---

<span><a href="/chiaro/start">CHIARO</a>.</span>

<div id="error--lack--of" hidden>
    {{<halfentry
        title="CHIARO is helpful tool disigned to spotlight and list queries from many groups of people so we can see which content is algorithmicly promoted or shadowly banned"
        type="right"
    >}}
    <br />
    <h2>This page works with some search term in the URL, for example:
        <a href="/chiaro/L#monkey">Monkey</a>.
    </h2>
</div>

{{<ytbox id="master">}}

<div class="row" id="listOf" hidden>
    <div class="col-6" id="leftList" class="search_example">
        <input class="search_fake_input" type="text" placeholder="🔍" disabled>
        <div class="text-muted details"></div>
    </div>
    <div class="col-6" id="rightList" class="search_example">
        <input class="search_fake_input" type="text" placeholder="🔍" disabled>
        <div class="text-muted details"></div>
    </div>
</div>

<br />
### (Paging is not supported at the moment! you can only see the last two searches)

<script src="/js/global.js"></script>
<script src="/js/sunnyhack.js"></script>
<script type="text/javascript">
    const urlterms = decodeURIComponent(window.location.hash.substr(1));
    if(!_.size(urlterms)) {
        $('#error--lack--of').removeAttr('hidden');
    } else {
        console.log("populating visualization with", urlterms);
        /* TODO eventually handle paging */
        reproduceSearchesOutput(urlterms, '#master', [
            '#leftList',
            '#rightList'
        ]);
    }
    /* this function generate a number of list equal to the number of target IDs */
</script>