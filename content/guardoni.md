---
title: Guardoni documentation
subtitle: The youtube algorithm analysis toolkit
date: 2021-10-01T15:01:21+01:00
draft: false
layout: page

og_title: "Guardoni, the youtube algorithm analysis tool"
og_type: "website"
og_image: "http://youtube.tracking.exposed/yttrex-logo.jpg"
og_url: "https://youtube.tracking.exposed/guardoni"
og_description: "How to repeat experiments of algorithmic discrimination, personal data exploitation, and shadowbanning."
---

<div class="row" style="padding-top: 3rem; padding-bottom:3rem">
  <div class="col-sm-6" style="font-size: 2rem">
  <ul style="font-size: 1.5rem">
    <li>
    for <a href="#">Windows</a>, <code>guardoni-win.exe</code>
    </li>
    <li>
    for <a href="#">MacOSX</a>, <code>guardoni-macos</code>
    </li>
    <li>
    and for <a href="#">Linux</a>, <code>guardoni-linux</code>
    </li>
  </ul>
  <h4>As we release free software, you can also <a href="#">run it or build it from the nodejs source</a>.</h4>
  </div>
  <div class="col-sm-6">
  <h1 class="text-right">
    key aspect of algorithm analysis is repeatable methodologies: <b>guardoni</b> do that for Youtube
  </h1>
  </div>
</div>


<br >
## 💻 How does it work?

The tool you can download is a browser that moves on its own. It navigates, at the moment this version only on youtube, following a list of paths decided by the person who is organising the analysis of the algorithm.

This automation makes it possible to repeat searches like this one ([filtertube](/filtertube)) carried out in January 2021; the analysis was described with a flowchart like this:

<div class="row col-sm-12 mb-3 text-center">
  <img width="100%" style="zoom:2.5;" src="/images/ws21/method.png" />
</div>

What you can do with Guardoni, is to be able to create a new profile and train it (or rather, train the youtube algorithm) so that then differences will emerge on how the final searches are answered.

### The effect of youtube's personalization algorithm has an impact on homepages, recommended videos, and search results.


<br >
## 💻 How to practically use it

If you consider the flowchart above, to repeat the experiment you need to create two files (one would be used to train what you can consider a _conservative_ profile, and the other a _progressive_.)

<div class="container-fluid">
  <table id="productSizes" class="table">
    <thead>
      <tr class="d-flex">
        <th class="col-1">Step</th>
        <th class="col-4">Progressive</th>
        <th class="col-4">Conservative</th>
        <th class="col-3">Reason</th>
      </tr>
    </thead>
    <tbody>
      <tr class="d-flex">
        <td class="col-1">1</td>
        <td class="col-4">Watch a video you consider progressive</td>
        <td class="col-4">Watch a video you consider conservative</td>
        <td class="col-3">This is to "train" youtube into believing the profile like that content.</td>
      </tr>
      <tr class="d-flex">
        <td class="col-1">2</td>
        <td class="col-4">Watch a 2nd progressive video</td>
        <td class="col-4">Watch a 2nd conservative video</td>
        <td class="col-3">... same.</td>
      </tr>
      <tr class="d-flex">
        <td class="col-1">3</td>
        <td class="col-4">Watch a 3rd progressive video</td>
        <td class="col-4">Watch a 3rd conservative video</td>
        <td class="col-3">... same.</td>
      </tr>
      <tr class="d-flex">
        <td class="col-1">4</td>
        <td class="col-4">Search for "<b>happy</b>"</td>
        <td class="col-4">Search for "<b>happy</b>"</td>
        <td class="col-3">Or any more meaningful term</td>
      </tr>
    </tbody>
  </table>
</div>


<br >
## 💻 Where is the algorithm analysis?

Thanks to this collection system, searches for the keyword at position 4 will be saved, and you will be able to see how profiles that have been trained in one way rather than the other know how to receive personalised answers.

The analysis takes place when, after navigation is completed, you download a CSV file containing all the different observations. Each profile you run contributes to the observations.

We have organised a simple test that talks about climate change and climate alarmism. For this we have created two CSV files which are necessary to define how the profiles should behave.

<br >
## 💻 How to run your first actual experiment

We did two CSV files to represent different "orientations", in this case, on the climate debate. In this case, we focus on a few video about _Greta Thunberg_ and a the same number featuring _Naomi Seibt_.

<div class="row">
  <div class="col-md-9">
    <pre>
    urltag,     watchFor,   url
    greta1,         end,    https://www.youtube.com/watch?v=v33ro5lGHQg
    greta2,         end,    https://www.youtube.com/watch?v=GlfW7aYouYQ
    greta3,         end,    https://www.youtube.com/watch?v=2fycgrYgXpA
    greta4,         21s,    https://www.youtube.com/watch?v=DQWMDWWYVz4
    climate change,  6s,    https://www.youtube.com/results?search_query=climate+change
    climate alarmism,6s,    https://www.youtube.com/results?search_query=climate+alarmism
    </pre>
  </div>
  <div class="col-md-3" style="font-size: 2rem">
    <br>
    <a href="https://github.com/tracking-exposed/yttrex/blob/master/methodology/examples/climateChange/greta-v2.csv" target=_blank>Greta's CSV</a>.
  </div>
</div>

_please note: the political positions confronted here are not equivalent. They are not equally comparable opinions, because decades of research confirm the climate emegency we are living on_.
Simply we can't assume YouTube cares, or that YouTube algorithm might judge with their automated tools (and of course the underpay human labor).

<div class="row">
  <div class="col-md-3" style="font-size: 2rem">
    <br>
    <a href="https://github.com/tracking-exposed/yttrex/blob/master/methodology/examples/climateChange/naomi-v2.csv" target=_blank>Naomi's CSV</a>.
  </div>
  <div class="col-md-9">
    <pre>
    urltag,     watchFor,   url
    naomi1,         end,    https://www.youtube.com/watch?v=8LnZbAsws20
    naomi2,         end,    https://www.youtube.com/watch?v=HxX-1cWSvVc
    naomi3,         end,    https://www.youtube.com/watch?v=v8dXpe1Pp6Q
    naomi4,         21s,    https://www.youtube.com/watch?v=NlIzY12D2Z0
    climate change,  6s,    https://www.youtube.com/results?search_query=climate+change
    climate alarmism,6s,    https://www.youtube.com/results?search_query=climate+alarmism
    </pre>
  </div>
</div>

<br >
## 💻 Register a CSV (this is a step you might skip)

<pre>
Claudio@bluelizard MINGW64 ~/VMShared/yttrex/methodology (master)
$ ./dist/guardoni-win.exe --csv examples/climateChange/greta-v2.csv
CSV mode: mandatory --comparison or --shadowban; Guardoni exit after upload

Error in uploading the --csv. You must specify if:
        it is a shadowban test with --shadowban
        it is an experiment by comparison, with --comparison
</pre>

In our case, we're configuring an experiment that wants to compare how different profiles get served, therfore is a **comparison** kind of experiment. For the shadowban, a dedicated page would be written.

<pre>
Claudio@bluelizard MINGW64 ~/VMShared/yttrex/methodology (master)
$ ./dist/guardoni-win.exe --csv examples/climateChange/greta-v2.csv --comparison
CSV mode: mandatory --comparison or --shadowban; Guardoni exit after upload
  guardoni:yt-cli Getting ready for directive type [comparison] +0ms
  guardoni:yt-cli Registering CSV examples/climateChange/greta-v2.csv as comparison +2ms
  guardoni:yt-cli Read input from file examples/climateChange/greta-v2.csv (407 bytes) 6 records +2ms
  guardoni:yt-cli CSV validated in [comparison] format specifications +2ms
Directive from CSV created: experimentId d75f9eaf465d2cd555de65eaf61a770c82d59451

Claudio@bluelizard MINGW64 ~/VMShared/yttrex/methodology (master)
</pre>

**Long story short**: the CSV must be registered in the server, so by getting that experimentId, anyone can repeat the same steps.

If the same CSV is uploaded twice, the ID returned is the same, and no effect happens.

Now we've two experimentId, one configured with Greta's video and the other with Naomi's:

* Greta d75f9eaf465d2cd555de65eaf61a770c82d59451
* Naomi 37384a9b7dff26184cdea226ad5666ca8cbbf456

<br >
## 💻 Once the experiment is registered, anyone can participate by typing:

 ./guardoni-win.exe --experiment d75f9eaf465d2cd555de65eaf61a770c82d59451

and then let the browser operate autonomously.


<br >
## 💻 TODO: how to download results, and the experiment page.

<br >
## 💻 TODO: advanced options.

<br >
## 💻 ...a name like this should have a backstory!

**Guardoni** /_ˈɡwardoni_

French: _Les voyeurs_.
English: _Peeping Toms_, Voyeurs.
Spanish: _Mirones_.
Brasilian: _Toms de espreitar_.

TL;DR: while we were working on an investigation on [the adult mainstream portal](https://pornhub.tracking.exposed) then become clear we need to program something that would watch that content for us; you know **mental health matter**. The tool later on become handy to repeat profiling methodologies, and thus have been generalized for youtube, tiktok, and other platform we support.
Before this tool, most of our researches that include controlled profiling, were done by piloting the profiles manually.