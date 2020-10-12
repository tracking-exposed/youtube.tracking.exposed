---
title: "what YouTube just did before US election? Less transparency!"
subtitle: "Google decided to do not be explict anymore on which video are 'recommended for you' despite we didn't record any major change in the algorithm."
type: c3app
date: 2020-10-10
description: By passively scraping the recommendation for reseaerch pourposes, we can release an original analysis.
og_title: "Youtube recommendation become even more sneaky"
og_type: "website"
og_image: "http://youtube.tracking.exposed/yttrex-logo.jpg"
og_url: "https://youtube.tracking.exposed/"
og_description: "impact analysis, active users, collected content. Open-data as long as is privacy preserving"
draft: false
---

{{<colorblock text="Intro">}}

# [Some people](/impact) install [our browser extension](/preview), and this scrape for them a few portions of their youtube pages for. We designed the technology to monitor and understand YouTube and NOT profile the volunteers participating in data donations.
---
We document [the data minimization](/privacy), the code is [free software](https://github.com/tracking-exposed/yttrex/), and we care to explain the ([open](/data) and [replicable](/wetest/1)) research methodology! We believe anyone might want to audit the Youtube algorithm. After all, if Google experiments with you, why you shouldn't experiment with them?

{{<colorblock text="Intended side effect">}}

# Then with out analysis we extract informations on how YouTube personalize recommendations, homepages, and search results. A step in this process is to filter what content-related from what is profile-related.

{{<colorblock text="recommended for you ― the slow disappearance">}}

<div class="row">
  <div class="col-sm-6" style="font-weight: 100 !important;font-size: 1.4em;align-self: center;">
    <div style="padding: 1em">
      You are watching something on Youtube. You discover something new, and might be interested in exploring other sources and points of view; this is why the “related videos” exists. 
    </div>
    <div style="padding: 1em">
      A percentage of recommendations weren’t depending on the content watched, but instead on your personal data processing, on your past activities. Even that small bit of transparency, the “<b>Recommended for you</b>”, is disappearing now. 
    </div>
    <div style="padding: 1em">
      Despite the constant PR stunts from Google (owner of YouTube) claiming their goal in increasing transparency, YouTube has multiple algorithms designed to keep you attached to the platform, but today they choose to go even darker.
    </div>
  </div>
  <div class="col-sm-6">
    <figure>
      <img width="100%" src="/images/whenrecommendationswerehyped.jpeg">
    </figure>
  </div>
</div>

This graph display the percentage, between all the recommended video collected and how many of them were explicitly _recommended for you_:

<div id="october-2020-percentage-graph" class="c3graph"></div>


_Recommended for you_ was a small information that display, somehow, the interest of Google in being explicit on what was algorithmically selected for you compared to what is (algorithmically, again) selected because content related. Well: not anymore, it's gone!

This might not be a surprise if you were using the browser extension, because the stats display gradually changed from left to right:

<div class="row">
  <div class="col-sm-6">
    <h4>September '20</h4>
    <figure>
      <img width="100%" src="/images/past-recommendations.jpeg">
    </figure>
  </div>
  <div class="col-sm-6">
    <h4>October '20</h4>
    <figure>
      <img width="100%" src="/images/current-recommendations.jpeg">
    </figure>
  </div>
</div>

{{<colorblock text="Detailed report: stats on kind of related video since Sept'20 ― till 11th October 2020">}}

<!-- the graphs are appended in the 'div'. the ID #october-2020-graph is referenced in hugo-theme-trex/layouts/c3app/single.html -->
<div id="october-2020-graph" class="c3graph"></div>

(The details also report the amount of live video present in the recommendation. This is not relevant for this blogpost.)

{{<colorblock text="References and ongoing discussion ― this section would be updated">}}

<div class="container col-12 justify-content-center" id="contacts">
  <h2 style="text-align: center;">ABOUT us ― 
    <a href="https://twitter.com/trackingexposed" target=_blank>
      project Twitter</a>,
    <a href="https://facebook.com/personalizationalgorithm" target=_blank>Facebook page</a>,
    <a href="https://chat.securitywithoutborders.org/community/channels/trackingexposed">Mattermost chat</a>.
  </h2>

  <div class="row enlarged" style="padding-top: 50px;">
    <div class="col-xs-12 col-md-6">
        <p>Please consider this project, despite unique in its model of data collection, sharing, and potential reuse by you like anybody else, is currently unfunded and maintain with not small difficulties.</p>
    </div>
    <div class="col-xs-12 col-md-6">
        <p>
        A thread from Reddit, September 2020: <a href="https://www.reddit.com/r/NoStupidQuestions/comments/izusw4/is_it_me_or_has_youtubes_recommended_system/">Is it me or has youtube recommended system  gotten way less "explorative"?</a>. </p>
    </div>
  </div> 

</div> <!-- container -->
