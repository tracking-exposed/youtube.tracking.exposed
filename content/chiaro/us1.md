---
title: "Collection on Youtube personalize search results: US election experiment!"
subtitle: test tool for shadow-ban detection, algorithmic filtering, personalization in searches 
date: 2020-09-22T15:01:21+01:00
draft: false
type: ytSearchCampaign
---


{{<halfentry
    title="CHIARO is helpful tool disigned to spotlight and list queries from many groups of people so we can see which content is algorithmicly promoted or shadowly banned"
    type="right"
    picture="/images/youtube-us-election-NBC.jpg"
    credit="NBC"
    description="YouTube 2020: Why politics have exploded on the video platform"
    link="https://www.nbcnews.com/tech/tech-news/youtube-2020-why-politics-have-exploded-video-platform-n1240160"
>}}

# Trump vs. Biden on youtube searches: what's going to return?

{{<colorblock text="Each person gots different results! Collaboratively we can show what happen">}}

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

{{<colorblock text="Three ways you participate: contributor, researcher, and analyst">}}

## 1. CONTRIBUTOR ― The one proving original observation on YT personalization

Without this, the whole campaign is weak. To be a contributor, you should install the browser extension that performs the evidence collection. After installation, you have to enable it, and feel free to disable it or remove it after the searches.

As first, you should:

{{<yt-extension>}}

Then, access all the queries at the end of this page. You can double-check on your personal page if the search query has been recorded.

## 2. RESEARCHER ― Explore search queries and communities

It would help if you imagined which honest question a user poses to youtube and which are more suitable to display the segmentation and the polarization caused by algorithms

If you have suggestions, you can [discuss it with the Tracking Exposed team](/about) or in the [github issue](https://github.com/tracking-exposed/yttrex/issues/44) where researchers can discuss findings. The query list can be updated by opening a pull request in [this config file](https://github.com/tracking-exposed/yttrex/blame/master/backend/config/campaigns.json#L2).

The researcher is also who should outreach communities of people and potentially subject to powerful segmentation from YouTube. More of them become contributors, and higher would be the variety of collected data.

## 3. ANALYST ― Analyze (and think so much: 🤯 )

It is the task for seasoned or wannabe data scientists. Download the CSV and analyze them. In the defined [discussion place](https://github.com/tracking-exposed/yttrex/issues/44), you might find updates on methodologies and findings.


<!-- below here is appended content generated by:

    youtube.tracking.exposed/themes/trex/layouts/ytSearchCampaign/single.html
    Which calls
    youtube.tracking.exposed/statis/js/sunnyhack.js
    It calls onload the js function getCampaignQueryStats('experiment')
    As argument takes the campaign name, the variable comes from the URL 
    and thus, from this filename. 
    Then, behind the scene, an API call to 
    /api/v2/queries/<campaignName>
 -->
