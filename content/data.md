---
title: Quick tour on ytTREX technology
subtitle: the reference manual for researchers and analysts
date: 2020-02-22T15:01:21+01:00
draft: false
description: methodology, experiments, tools, data format and public datasets
extraCSS: "/css/author.css"

og_title: "ytTREX - how to use our data"
og_type: "website"
og_image: "http://youtube.tracking.exposed/yttrex-logo.jpg"
og_url: "https://youtube.tracking.exposed/data"
og_description: "youtube.tracking.exposed provides API for researchers, here you can see what and how you can use them"
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
        <a href="#datathon">DSSG-berlin Datathon</a>, <a href="#first">First YouTube class</a>, <a href="#eu19">European Election Campaign</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td class="larger">Fresh profiles under researcher control</td>
      <td>
        <ol>
          <li class="upside" >Control of most of the variables</li>
          <li class="upside">Research can try to isolate a variable and infer insights on personalization algorithm.</li>
          <li class="downside">No representative of anything.</li>
          <li class="downside">Social Media Platforms tend to hunt and limit actions from automatized accounts.</li>
        </ol>
      </td>
      <td class="larger"><a href="#profiles-under-control">Argentinian 2017 Analysis</a>, <a href="#profiles-under-control">Italian 2018</a>, <a href="#profiles-under-control">Brasialian 2019</a>, ...</td>
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
      <td class="larger"><a href="#collaborative-testing">potest#1, wetest#1</a>, <a href="#workshop">Workshop</a>.</td>
    </tr>
  </tbody>
</table>


{{<colorblock text="Silicon Valley exploitative business model tought to people “more data, the better”. This page intent is also in stating why this blind and acritical data collection do not make any sense for us, for the researches, and for our message.">}} 

---

## A researcher willing in understanding personalization and algorithmic discrimination, should give more importance to the methodology and [data collection](https://alshams.github.io/responsibledata/bias-in-data-viz/), be simple and explainable.

---

{{<colorblock text="Experiments and Experiences on algorithmic testing">}}

## The first workshop

piccola descrizione + link a /results

## The second workshop

piccola descrizione + link a /trexit 

## youTEST

riferimenti a potest + fare le pagine di youtest

## Automatized access approach 

linkare methodology e mettere qui alcuni dei risultati (se unici e se possibili solo con accesso automatizzato) 

{{<colorblock text="Tools for analysts">}}

The juicest trap: Gephi

{{< entry 
    title="A network visualization and analysis tool"
    text=""
    picture="/images/yt-results/after-two-minutes-profiling.svg" 
    type="right" 
>}}

[en.wikipeda/Gephi](https://en.wikipedia.org/wiki/Gephi), 

## H2 sei in markdown

del testo qui è possibile 

{{<colorblock text="Data format and API ">}}

link a documentazione
link a dashboard e possibile uso con yt
immagini che spiegano il data processing?

<!--
{{<colorblock text="Public data samples">}}
-->

## Profiles under control

dd

## Collaborative testing

dd

## First

dd 

## Workshop
