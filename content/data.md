---
title: Quick tour on ytTREX technology
subtitle: the reference manual for researchers and analysts
date: 2020-02-22T15:01:21+01:00
draft: false
description: methodology, experiments, tools, data format and public datasets
extraCSS: "/css/author.css"

og_title: "How to use ytTREX data"
og_type: "website"
og_image: "http://youtube.tracking.exposed/yttrex-logo.jpg"
og_url: "https://youtube.tracking.exposed/data"
og_description: "youtube.tracking.exposed offert API for researchers and a few methodology tips."
---

{{<colorblock text="Methodologies">}}

The collection methodology is a crucial attribute to judge, use and analyze evidences of algorithm personalization.

Compare blindly and acritically _how YouTube serves different related content_ it is good only for simple exercise, but this approach wouldn't produce any meaningful observation to figure out anything on YouTube.
On the table below, we summarize the different approaches and the _qualities of data collected_. 

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Approach name</th>
      <th scope="col">Notes</th>
      <th scope="col">Experiment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td class="larger">True, <i>Genuine</i>, profiles</td>
      <td>
        <ol>
          <li class="upside" >Actual person using their browser</li>
          <li class="upside">The asset they share, is the uniqueness of their observation</li>
          <li class="downside">There are personal data processed, they should be accessible if data subject do not opt-in</li>
          <li class="downside">The access would be in different time of the day</li>
          <li class="downside">Even using data portability tools would not allow the reseaecher to get a clear picture on how the person been profiled by platform</li>
        </ol>
      </td>
      <td class="larger">
        <a href="#datathon">DSSG-berlin Datathon</a>,<hr>
        <a href="#first">First YouTube class</a>,<hr>
        <a href="#eu19">European Election Campaign</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td class="larger">Fresh profiles under researcher control</td>
      <td>
        <ol>
          <li class="upside" >Control of most of the variables</li>
          <li class="upside">Research can try to isolate a variable and infer insights on personalization algorithm.</li>
          <li class="downside">of reality.</li>
          <li class="downside">Social Media Platforms tend to hunt and limit actions from automatized accounts.</li>
        </ol>
      </td>
      <td class="larger">
        <a href="#profiles-under-control">Argentinian 2017 Analysis</a>,<hr>
        <a href="#profiles-under-control">Italian 2018</a>,<hr>
        <a href="#profiles-under-control">Brasialian 2019</a>, ...</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td class="larger">True profiles acting under direction</td>
      <td>
        <ol>
          <li class="upside">Potential hype, temporary enlarged audience outside the Algoritmic accountability peoples.</li>
          <li class="upside">It is event leading to: outreach, literacy, research and open data.</li>
          <li class="downside">If researcher wants additional demographic data, they should collect and verify it independently.</li>
          <li class="downside">Plan a test might be even harder.</li>
        </ol>
      </td>
      <td class="larger">
        <a href="#collaborative-testing">potest#1, wetest#1</a>,<hr>
        <a href="#workshop">Workshop</a>.</td>
    </tr>
  </tbody>
</table>


{{<colorblock text="Silicon Valley exploitative business model tought to people “more data, the better”. This page intent is also in stating why this blind and acritical data collection do not make any sense for us, for the researches, and for our message.">}} 

---

## A researcher willing in understanding personalization and algorithmic discrimination, should give more importance to the methodology and [data collection](https://alshams.github.io/responsibledata/bias-in-data-viz/), be simple and explainable.

---

{{<colorblock text="Experiments and Experiences on algorithmic testing">}}

## — The first workshop — 3 working days — 10 students & 2 facilitators

{{< entry 
    text="10 different students using their computers, open the same video at the same time. Here we compare the 20 related videos suggested" 
    picture="/images/yt-results/clean-browsers-pattern.svg" 
    type="left" 
    legend-image-url="/images/yt-results/fixed-legend-6,7.svg"
>}}

— The blue circles represent the *related content*, they are all in the center because they are shared among profiles.

— The small groups of individually-selected-videos are represented with Green circles, and profile 4 and 3, have such dedicated content because of their configured computer language (Korean and French, while the test was performed from Amsterdam in English).

— Below, the same test did by the same students, same room and IP address, same computers, but with their browser logged in Google/YouTube:

{{< entry 
    text="It is visually clear how the data points linked to the profiles cause personalized suggestions." 
    picture="/images/yt-results/personalized-browsers-pattern.svg" 
    type="right"
    legend-image-url="/images/yt-results/fixed-legend-6,7.svg"
>}}

#### Regardless of Youtube API

We verified which videos YouTube declares as _related_ by using the official API, and then compared those with what is actually displayed on people interface.

{{< entry 
    text="Red circles represent the videos declared by YT as related. In yellow and green, the videos actually suggested to watchers." 
    picture="/images/yt-results/youtube-API-vs-TREX-observations.svg" 
    type="right"
    legend-image-url="/images/yt-results/fixed-legend-3.svg"
>}}

We knew API they can't be considered a reliable method, I want to list why this misunderstanding is 


— **Achievements**: have a rudimental method to compare among profile with reduced personalization vs profile highly personalizeed.

## — The second workshop

**Work in progress** TODO [trexit](/trexit)

## — Collaborative, Worldwide, time restricted, guided observation (potest and wetest)

<div class="row">
  <div class="col-6">
    <br>
    The collaborative observation is a new experiment in this regards. allow us to guide people in a few steps, we did it on <a href="https://pornhub.tracking.exposed/potest/final-1" target=_blank>PornHub, the name was poTEST</a>, the Youtube collaborative test is a March 2020 experiment.
  </div>
  <div class="col-6">
    <a href="/wetest/1">
      <img class="align-left imgtile" src="/images/wetest-yt2.jpg" />
    </a>
  </div>
</div>


## — Variable comparison 

TODO explain from [first test](/results) the CNN/FOX test.

{{< entry 
    title="A network visualization and analysis tool"
    text=""
    picture="/images/yt-results/after-two-minutes-profiling.svg" 
    type="right" 
>}}

## — Automatized access approach 

linkare methodology e mettere qui alcuni dei risultati (se unici e se possibili solo con accesso automatizzato) 

{{<colorblock text="Tools for analysts">}}

TODO, should be done a list of tools we used, which limits and perks:

* [en.wikipeda/Gephi](https://en.wikipedia.org/wiki/Gephi), 
* [rawgraphs](https://rawgraphs.io), 
* Our dashboard (AudIt)

{{<colorblock text="Data format and API ">}}

<div class="row">
  <div class="cards-group">

  </div>
</div>
