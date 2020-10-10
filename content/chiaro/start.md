---
title: "CHIARO ― a tool to measure shadowban"
subtitle: By merging our individual observation we can understand how our personalized and partial is our perception
description: CHIARO of tracking.exposed works by collecting personalized search results from YouTube; check out the campaigns
date: 2020-10-01T15:01:21+01:00
draft: false
type: app
extraCSS: "/css/sunnyhack.css"
---

{{<halfentry
    title="CHIARO is helpful tool disigned to spotlight and list queries from many groups of people so we can see which content is algorithmicly promoted or shadowly banned"
    type="right"
>}}

{{<colorblock text="Let's see Youtube search service with more eyes than your individual broweser...">}}

<div class="row">
    <div class="col-6" id="leftQuery">
        <div class="search_example">
            <h5>A profile in New York do a search query:</h5>
            <input class="search_fake_input" type="text" placeholder="Election updates 🔍 " disabled>
        </div>
        {{<ytbox thumbnail="https://i.ytimg.com/vi/Q5ckTlBGXyM/hq720.jpg" description="UX in [EN], picked when: 5 hours old, views 1220, position 1" duration="7:56:04" title="Super Tuesday: California, Texas Election Results | (Live Stream Recording)" producer="NBC News Streamed" href="https://www.youtube.com/watch?v=Q5ckTlBGXyM" >}}
        {{<ytbox thumbnail="https://i.ytimg.com/vi/2pNNmyO_yPo/hq720.jpg" description="UX in [EN], picked when: an hour old, views 2730, position 2" duration="3:15" title="Election results are in for the 2020 Texas primary runoffs" producer="WFAA" href="https://www.youtube.com/watch?v=2pNNmyO_yPo" >}}
        {{<ytbox thumbnail="https://i.ytimg.com/vi/VUFJOZV69wo/hq720.jpg" description="UX in [EN], picked when: an hour old, views 9305, position 3" duration="1:52" title="Michigan Primary Election: Race results" producer="WXYZ-TV Detroit | Channel" href="https://www.youtube.com/watch?v=VUFJOZV69wo" >}}
    </div>
    <div class="col-6" id="rightQuery">
        <div class="search_example">
            <h5>The same morning, a profile in Canada do exactly the same:</h5>
            <input class="search_fake_input" type="text" placeholder="Election updates 🔍 " disabled>
        </div>
        {{<ytbox thumbnail="https://i.ytimg.com/vi/zZh1P1UUwH4/hq720.jpg" description="UX in [EN], picked when: a few seconds old, views 2493, position 1" duration="3:50" title="Kyrgyzstan annuls parliamentary election results after protests | DW News" producer="DW News" href="https://www.youtube.com/watch?v=zZh1P1UUwH4" >}}
        {{<ytbox thumbnail="https://i.ytimg.com/vi/mKOIKX5HS3E/hq720.jpg" description="UX in [EN], picked when: a few seconds old, views 568, position 2" duration="5:23" title="Kyrgyzstan annuls parliamentary election results after overnight protests" producer="Al Jazeera English" href="https://www.youtube.com/watch?v=mKOIKX5HS3E" >}}
        {{<ytbox thumbnail="https://i.ytimg.com/vi/mIVvGN7N0j4/hq720.jpg" description="UX in [EN], picked when: a minute old, views 84309, position 3" duration="1:14" title="Kyrgyzstan: Clashes erupt during Bishkek protest over election results" producer="Ruptly" href="https://www.youtube.com/watch?v=mIVvGN7N0j4" >}}
    </div>
</div>

{{<colorblock
    text="YouTube claims this happen because of regional specialization"
    cranky="but with CHIARO you can do independent analysis and spot two other phenomenas:">}}

<div class="row">
    <div class="col-6" id="leftQuery">
        <div class="search_example">
            <h5>A <i>blue collar</i> worker from the rust belt do this search query:</h5>
            <input class="search_fake_input" type="text" placeholder="Presidential debate 2020 🔍 " disabled>
        </div>
        {{<ytbox thumbnail="https://i.ytimg.com/vi/Irsk6Qhd7Pk/hq720.jpg" description="UX in [EN], picked when: 2 minutes old, views 129139, position 1" duration="4:12" title="Trump, Biden face off in debate filled with interruptions, insults and chaos" producer="CBS This Morning" href="https://www.youtube.com/watch?v=Irsk6Qhd7Pk" >}}
        {{<ytbox thumbnail="https://i.ytimg.com/vi/Ft62ShND99Q/hq720.jpg" description="UX in [EN], picked when: 3 hours old, views 50972, position 2" duration="2:20" title="Trump mocks Biden for wearing a face mask" producer="CBS Evening News" href="https://www.youtube.com/watch?v=Ft62ShND99Q" >}}
        {{<ytbox thumbnail="https://i.ytimg.com/vi/LA6nM_hQ4EU/hq720.jpg" description="UX in [EN], picked when: 3 minutes old, views 75896, position 3" duration="3:19" title="Trump, former Vice President Biden to face off for the first time in Tuesday debate" producer="CBS This Morning" href="https://www.youtube.com/watch?v=LA6nM_hQ4EU" >}}
    </div>
    <div class="col-6" id="rightQuery">
        <div class="search_example">
            <h5>An so does a <i>white collar</i> worker (in the same state and moment):</h5>
            <input class="search_fake_input" type="text" placeholder="Presidential debate 2020 🔍 " disabled>
        </div>
        {{<ytbox thumbnail="https://i.ytimg.com/vi/uyBuDcS23z8/hq720.jpg" description="UX in [EN], picked when: 4 hours old, views 237699, position 1" duration="7:09" title="Joe Biden: President Trump ‘Does Not Want To Face Me Because I Will Beat Him’ | TODAY" producer="TODAY" href="https://www.youtube.com/watch?v=uyBuDcS23z8" >}}
        {{<ytbox thumbnail="https://i.ytimg.com/vi/FiO4ZXgno0M/hq720.jpg" description="UX in [EN], picked when: 3 minutes old, views 446554, position 2" duration="7:13" title="Trump and Biden face off on protests and Black Lives Matter" producer="ABC News" href="https://www.youtube.com/watch?v=FiO4ZXgno0M" >}}
        {{<ytbox thumbnail="https://i.ytimg.com/vi/Irsk6Qhd7Pk/hq720.jpg" description="UX in [EN], picked when: 2 minutes old, views 129139, position 3" duration="4:12" title="Trump, Biden face off in debate filled with interruptions, insults and chaos" producer="CBS This Morning" href="https://www.youtube.com/watch?v=Irsk6Qhd7Pk" >}}
    </div>
</div>

{{<colorblock
    text="Profiling enable advanced form of content filtering, and distinguish from censorship it's complex" 
    cranky="especially if it is an acceptable justification the ''personalized results for Users' interest'':" >}}

<div class="row">
    <div class="col-6" id="leftQuery">
        <div class="search_example">
            <h5>This is my computer:</h5>
            <input class="search_fake_input" type="text" placeholder="Monkey 🔍 " disabled>
        </div>
    </div>
    <div class="col-6" id="rightQuery">
        <div class="search_example">
            <h5>This is the computer used to show cartoons to my 5 yo nephew:</h5>
            <input class="search_fake_input" type="text" placeholder="Monkey 🔍 " disabled>
        </div>
    </div>
</div>

*Monkey* and a few other animals are [part of the example experiment](/chiaro/example) you can reach below and partecipate with your browser(s). Of course, with CHIARO, you can compare your own research results and develop your criticism.

# Because nor we or anyone else can't say what is the best algorithm for you. We are here to remind you that *your agency* is *not the one of Google*.

{{<colorblock
    text="In the same way a content is preferred for a specific profile, then something else get hidden"
    cranky="in the name of that digital prejudice that a profile is">}}

CHIARO is about all of this: We though your list of queries might cover aspects we couldn’t figure out as significant. For us, **algorithmic transparency is pointless if we do not enable individuals** and digitally organized research groups. We don’t pursue a victory in having platforms accountable only by teams of experts. These companies affect us all; we urge to reach a broader understanding of this phenomenon.

## List of active CHIAROs

* [US election](/chiaro/us1), please note the search terms are picked by non-expert in the subject, you might have more insightful terms to test.
* [**How To Create** your own CHIARO](/chiaro/example): open a tutorial with a large room for improvement.



<script src="/js/sunnyhack.js"></script>
<script type="text/javascript">
// this function was helpful to produce the queries pasted above
/*  async function m() {
        const url = "http://localhost:9000/api/v2/searchid/d2,0ba";
        const response = await fetch(url);
        const d = await response.json();
        const computed = _.flatten(_.map(d.structured, function(searches, metadataId) {
            const info = d.info[metadataId];
            return _.compact(_.map(searches, function(s) {
                console.log(s);
                if(!s.currentViews || !s.relativeSeconds || !s.publicationTime)
                    return null;
                return {
                    thumbnail: `https://i.ytimg.com/vi/${s.videoId}/hq720.jpg`,
                    videoId: s.videoId,
                    title: s.title,
                    selectedAuthor: s.selectedAuthor,
                    displayLength: s.displayLength,
                    priorityOrder: s.priorityOrder + 1,
                    description: `UX in [${info.clang.toUpperCase()}], picked when: ${s.ttl} old, views ${s.currentViews}, position ${s.priorityOrder}`
                };
            }));
        }));
        _.each(computed, function(o) {
            console.log(`
                {{ < ytbox thumbnail="${o.thumbnail}" description="${o.description}" duration="${o.displayLength}" title="${o.title}" producer="${o.selectedAuthor}" href="https://www.youtube.com/watch?v=${o.videoId}" >}}
            `);
        });
    }
    m(); */
</script>