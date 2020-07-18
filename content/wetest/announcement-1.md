---
title: "1st coordinated observation of the Youtube algorithm ― Updates"
subtitle: "March 25th 2020 we call for a collaborative observation of Youtube. Hundred of volunteers recorded Youtube's recommendations about five COVID related video. Here's an experiment of open science and algorithm accountability." 
draft: false
date: 2020-03-21T10:26:08Z

og_title: "Coordinated observation of YouTube — test n.1 updates"
og_type: "website"
og_image: "http://youtube.tracking.exposed/images/compare.jpeg"
og_url: "https://youtube.tracking.exposed/wetest/announcement-1"
og_description: "The first collaborative experiment investigating biases in YoutTube's personalization algorithm! Open dataset, discussion on findings: we explore COVID-19 related recommendations in 5 languages."

extraCSS: "/css/wetest.css"
---

## 18 July 2020 - First qualitative analysis embedded into dataset (English only)

Now the field <code>qualitative</code> might assume three value: 'relevant', 'linked', 'off-topic'; we pass trought all the videos suggested by YouTube on the right column, only concerning the BBC English video of our experiment. 

#### Qualitative analysis attribution criteria:
* **relevant**: the video talk actually about covid-19, coronavirus, lockdown, etc..
* **linked**: the video has another subject, but it is linked because talks about health, past pandemincs.
* **off-topic**: anything else.

You can get the files named 'qualitative' [from the dedicated repository](https://github.com/tracking-exposed/experiments-data/tree/master/wetest1), and this [public tableau simple visualization](https://public.tableau.com/profile/claudio.of.tracking.exposed#!/vizhome/weTest1-Qualitativefirstreview/Sheet1?publish=yes) might help third party revision. Below, a complete cell from file _qualitative-ωτ1-v7.json_.

<pre>
 {
    "evidence": 0,
    "login": true,
    "id": "c8eecebbdcd9badcafdc",
    "savingTime": "2020-03-26T21:33:58.071Z",
    "clientTime": "2020-03-27T02:45:01.000Z",
    "uxLang": "es",
    "recommendedId": "2f577cef26c0e61ec54ac3ad725dafb5104fc6cf",
    "recommendedVideoId": "BtN-goy9VOY",
    "recommendedAuthor": "Kurzgesagt – In a Nutshell",
    "recommendedTitle": "El Coronavirus Explicado & Qué Deberías Hacer",
    "recommendedLength": 30900,
    "recommendedDisplayL": "8:35",
    "recommendedLengthText": "8 minutos y 35 segundos",
    "recommendedPubTime": "2020-03-20T02:45:01.000Z",
    "recommendedRelativeS": 604800,
    "recommendedViews": 17854,
    "recommendedForYou": true,
    "recommendedVerified": true,
    "recommendationOrder": 1,
    "recommendedKind": "video",
    "watchedVideoId": "A2kiXc5XEdU",
    "watchedTitle": "How do I know if I have coronavirus? - BBC News",
    "watchedAuthor": "BBC News",
    "watchedChannel": "/user/bbcnews",
    "watchedPubTime": "2020-03-21T00:00:00.000Z",
    "watchedViews": 682214,
    "watchedLike": 6331,
    "watchedDislike": 223,
    "hoursOffset": 47,
    "experiment": "wetest1",
    "pseudonym": "nachos-taco-manicotti",
    "step": "English",
    "top20": true,
    "isAPItoo": true,
    "thumbnail": "https://i.ytimg.com/vi/BtN-goy9VOY/mqdefault.jpg",
    "qualitative": "relevant"
  },
</pre>

## 2 July 2020 - Released dataset v7, and youtube official API historical data.

<div class="row">
  <div class="col-4 ">
    <a href="https://github.com/tracking-exposed/experiments-data/tree/master/wetest1" target=_blank>
      <br>
      <br>
      {{<colorblock color="secondary" text="Download dataset v.7">}}
    </a>
  </div>
  <div class="col-8 ">
    <ul>
      <li>Added <code>thumbnail</code> URL.</li>
      <li>Added <code>isAPItoo</code> (true|false) by comparing <b>if the recommended videoId</b> is also among the related videoId returned by the official youtube API. We retrieve the data on the 25th of March, the day of the experiment.</li>
      <li>Added <code>sessionId</code> to link and filter only complete session.</li>
      <li>Added <code>hoursOffset</code> a number of hours starting from 0 till 47, it represents time as offset. 0 is the beginning of the experiment (midnight, 25th of March). The software culculate from <code>savingTime</code>. Note, we didn't use <code>clientTime</code> because that's bound to the timezone, our server is in GMT-0.</li>
      <li>Added <code>top20</code>: a boolean field that tells if the evidence has a <code>recommendationOrder</code> lesser than 20. 20 it is the default amount of recommended display to every watcher, and *optionally*, if a watcher scroll down, youtube send more recommendations.</li>
      <li>Consider <code>recommendedId</code> and <code>id</code> are both equivalents as a unique identifiers.</li>
    </ul>
  </div>
</div>

##### The new released data

* **Session file**: only 66 unique profile complete a session, we are not considering additional session per tester, at the moment. This amount is quite small considering the effort we put on this \[*swearing*\].
* **Youtube official API**: in the 25th of March we fetch the youtube API to see what the company was declared as 'related'. Our goal was to reproduce this (2019) venn diagram equivalence, 

##### On fact-checking + crowdsourcing

To judge youtube quality selection, we need people understanding Chinese, Arabic, and all the languages of the experiment and manually review the recommended videos. This crowdsourced qualitative assessment should give an indicator on how Youtube claims and methodology are accurate.

At the moment we can't organize such review, but if any partner display such interest youtube-team at tracking dot exposed.

By reading analysis such as [Saudi Arabia sstate media and covid-19](https://cyber.fsi.stanford.edu/io/news/saudi-arabia-state-media-and-covid-19), or [Pandemics and chinese-attributed propagand](https://misinforeview.hks.harvard.edu/article/pandemics-propaganda-how-chinese-state-media-creates-and-propagates-ccp-coronavirus-narratives/), it is clear Youtube **can't** do qualitative analysis with their machines. Artificial Intelligence isn't suitable to addess this problem. Until we do not prove it, any company would keep claiming they address content curation with "better algorithm" altought should be clear this is not technically, and logically, possible.

---
## 17 June 2020 - Relased dataset v6

Uh? Three months of silence and <b>six</b> version jump? What does it mean? A difficult task and experiment were about transforming human-readable strings into ISOData format. Now we have got a unique shiny piece of technology to further integrate into the browser extension. It has been an intense stream of work in between other tasks, such as fundraising. Now there is a bunch of new shiny metadata, notably:

<b>The distance in seconds </b>between the user-watching-moment and the publication date of the related video. A researcher now might sort by newest-oldest recommendation. The <b>publication time</b> in ISODate format. <b>Number of views</b> of recommended video <b>in integer</b>. Likes and Dislikes of the watched video in integer, and please check the big link below to see more.

<div class="row">
  <div class="col-4 ">
    <a href="https://github.com/tracking-exposed/experiments-data/tree/master/wetest1" target=_blank>
      {{<colorblock color="secondary" text="Get the CSV/JSON">}}
    </a>
    <p style="text-align:right">
      <a href="https://github.com/tracking-exposed/yttrex/blob/master/backend/scripts/wetest1-basic.js" target=_blank>
      The extraction tool for selection and anonymization (javascript).</a>
    </p>
  </div>
  <div class="col-8 ">
    <a href="https://github.com/tracking-exposed/youtube.tracking.exposed/issues/43" target=_blank>
      {{<colorblock color="red" text="See the ongoing analysis to get details on the dataset, thoughts on personalization, code, and visualizations.">}}
      This GitHub issue is used by team members and by anyone who wants to discuss and share findings. 
    </a>
  </div>
</div>

---
## 27 March 2020 - 🎆 Test completed! 🎆

🎆 **Thanks to everybody contributing and spreading the experiment** 🎆

Since then, we have released the data, extended the dataset as much as we feel it helpful, and improved how it is openly accessed.
We’ll keep updating this page.

### Anonymization and data release

The purpose of this dataset is a research on personalization algorithms. 
*The dataset has not and do not aim to have personal data.*
What follows is a brief description on how do we work to avoid to keep volunteer's personal data.

We should consider that among the ‘related content,’ YouTube may likely recommend something related to previous individual activities. 
Is it very possible that Youtube already creates a curated selection so personal, that may link to an individual uniquely. Could that de-anonymize a subject or an interest of a data subject? The answer is, “maybe if supported by an out-of-band leak.”

But, even in the worst-case scenario, we estimate this can’t lead to a leakage of personal data,

The purpose of this dataset is the research on personalization algorithm. The dataset has not personal data, despite the fact that the personalization of YouTube depends on personal data (thus, legally acknowledged as data subject). 

de-anonymization attacks such as relinking by searching for known patterns is not considered feasable because: Attacker should know how patterns appears on Youtube personalization algorithm and this is not known. Youtube himself, a property of Alphabet inc., is likely to be the only entity who might be interested in de-anonymize volunteers, but we estimated they might already have such knowledge if they really want to have it.

*We believe that People supporting the experiment would not be exposed to a risk for participating, as it is, at the moment, aimed to a still explorative scientific research.*

_note_ checkout [public stats](/impact) if curious un how we doing, or in the [github repository](https://github.com/tracking-exposed/yttrex).

---
## 27 March 2020 - Release of video data (first day partial)

    λ node scripts\wetest1-basic.js --type video
      wetest-1-basic — [video] is the target: starting wetest basic extractor… +0ms
      lib:mongo3 Initializing mongoUri with mongodb://localhost:27017/yttrex +4ms
      wetest-1-basic — Completed DB access to fetch: {"savingTime":{"$gte":"2020-03-24T23:00:00.000Z","$lte":"2020-03-26T23:00:00.000Z"},"type":"video","videoId":{"$in":["Lo_m_rKReyg","Zh_SVHJGVHw","A2kiXc5XEdU","WEMpIQ30srI","BNdW_6TgxH0"]}}: 402 objects retrived +2s
      wetest-1-basic — Unnested the 'sections' return 11563 evidences. Saving JSON file +438ms
      wetest-1-basic — Produced 5218168 bytes for text/csv, saving file +820ms


Get the [files](https://github.com/tracking-exposed/experiments-data/tree/master/wetest1/day1-partials). Soon we'll release day 1+2 and document the format.

---
## 26 March 2020 — First day, a few statistics and a partial data release

At the end of day 1, we see a smaller contribution compared to [pornhub collaborative test](https://pornhub.tracking.exposed/potest/announcement-1/#update-n-2-20-january-2020). Considering our 13 days before the weTEST day, we had an average of 79.3 daily adopters. Yesterday 168 people active, 72 new installations, likely each of them start to do the test. 

<div class="container row">
  <span class="col-xs-12 col-md-6"><img width="100%" src="/images/wt1/day1wetest1newadop.png"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" src="/images/wt1/day1wetest1lastactive.png"></span>
</div>

#### Data analysis and Data format


Assume a person starts the test: open homepage, open five links, what if forget the 2nd links? 
Since 26th early morning, we di not had visual feedback to remind you which links you already clicked. And we notice, for example, the Chinese-language-Codiv video has five access more than the Arabic. Does it means someone start the test and abandoned? Or our system has a small percentage of failures? Or that video wasn't loaded from youtube? We don't know. But does this precision matter? should we clean the dataset of the incomplete session? A complete session being with accessing the homepage, in the right sequence, access the five videos, and it concludes with the homepage again.

We distinguish between **Session-centered dataset** it considers only **complete sessions** composed of seven observations each. **Page-centered dataset** do not consider the session. It keep in account video and homepage evidence, good as they are, indiviudual decontextualized observed evidence. **Basic researches on diversity and content analysis** can start with this. 

<div class="row">
  <div class="col-6 ">
    {{<colorblock text="Session-centered dataset">}}
    To extract the session we are working on a dedicated nodejs script <a href="https://github.com/tracking-exposed/yttrex/blob/master/backend/scripts/wetest1.js" target=_blank>wetest1.js</a>; we'll complete it in the next days.
  </div>
  <div class="col-6 ">
    {{<colorblock text="Page-centered dataset">}}
    A more basic script is develop to pick, anonymized, unroll and save in JSON/CSV format. 
    <a href="https://github.com/tracking-exposed/yttrex/blob/master/backend/scripts/wetest1-basic.js" target=_blank>wetest1-basic.js</a>, <b>
      <a href="https://github.com/tracking-exposed/experiments-data/tree/master/wetest1/day1-partials" target=_blank>pick the open data</a>
    </b>, and see below the format description.
    <pre>
wetest-1-basic — Completed DB access to fetch: {"savingTime":{"$gte":"2020-03-24T23:00:00.000Z","$lte":"2020-03-26T23:00:00.000Z"},"type":"home"}: 507 objects retrived +2s
wetest-1-basic — Unnested the 'sections' return 18759 evidences. Saving JSON file +292ms
wetest-1-basic — Produced 4879099 bytes for text/csv, saving file +1s
    </pre>
  </div>
</div>

#### YT-Home data format

On the right, you see the evidence we collected: it represent a sample of what a supporter with browser extention installed is sending to us. The censored field, publicKey and id, as treated confidentially because they are visibile only to the data subject owning this evidence.

<div class="row">
  <span class="col-xs-12 col-md-6">
    <img width="100%" src="/images/wt1/home-robomongo.png" />
    <br /> <br />
    By expanding 'sections' you see the metadata we collects from each video entry appearing in homepage. 
    <br /> <br />
    <img width="100%" src="/images/wt1/home-expanded-robomongo.png" />
    <br /> <br />
    With the functions <a href="https://github.com/tracking-exposed/yttrex/blob/master/backend/scripts/wetest1-basic.js#L52)" target=_blank>produceHomeCSV and unwindSections</a>, we produce the anonymized dataset you can see on the right.
  </span>
  <span class="col-xs-12 col-md-6">
    <img width="100%" src="/images/wt1/home-json-format-example.png" />
    <br /><br />
    Here you can download the <a href="https://github.com/tracking-exposed/experiments-data/tree/master/wetest1/day1-partials" target=_blank>JSON and CSV</a>, and the format might change in the next hours. For technical inquiry, <a href="#contacts">reach out to us</a> on github.
  </span>
</div>

---
## 25 March 2020 — Coverage

**Italian**: [Come funziona la censura di YouTube sul coronavirus?](https://www.wired.it/internet/web/2020/03/25/coronavirus-youtube-censura/).
_Un esperimento del team di Facebook Tracking Exposed vuole misurare i contenuti promossi o nascosti da YouTube sulla pandemia. Ecco come diventare volontari._

**Spanish**: [¿Cómo funciona el sistema de moderación de contenidos algorítmico en Youtube? Ayuda a ytTREX a averiguarlo](https://derechosdigitales.tumblr.com/post/613590101901131776/c%C3%B3mo-funciona-el-sistema-de-moderaci%C3%B3n-de), from **Derechos Digitales**.
_¡Hey! Necesitamos tu ayuda. El proyecto Youtube.Tracking.Exposed (o ytTREX) está aprovechando este horrible escenario de pandemia desatada por el COVID-19 para poder comprender un poco mejor cómo funciona el sistema moderación automática de contenido en hecha por algoritmos en Youtube._

## 25 March 2020 — Is it worked what you did?

If you want to double check your collection, click on the browser extension icon. then click on the logo in the popup. It will open the ytTREX personal page. below the pie charts and the bar chars, you should see the five video in reverse order:

{{<bord-img href="/images/wt1/ux-post-wetest1.png">}}

---
## 25 March 2020 — Collection is open, and extended

The test starts close to the right time, and we decided to consider collections for 48 hours instead of 24 hours. **25th March 00:00** till **26th 23:59 GMT**.

The public outreach is a machine slow to warm-up.
If anyone in from Germany, France, Italy, all the Scandinavian, Magreb, and Balkan regional languages want to organize a similar test, [get in touch](#contacts).

---
## 24 March 2020 — Square tiles, for the social network, with contribution protocol

🖼️ [SVG and PNG](https://github.com/tracking-exposed/youtube.tracking.exposed/tree/master/static/images/social).

<div class="container row">
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/social/1.svg"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/social/2.svg"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/social/3.svg"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/social/4.svg"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/social/5.svg"></span>
</div>

---
## 24 March 2020 — Protocol as a picture

<div class="text-center">
  <img width="80%" class="imgtile" src="/images/wetestprotocol.svg">
</div>

---
## 23 March 2020 — Portuguese translation [of the call for participation](/wetest/1-pt)!

<br />

# 🎉🎉 Thanks to [Narrira](https://twitter.com/narriral/status/1242121677749788677) we got [Brazilian Portuguese translation](/wetest/1-pt). 🎉🎉 She did it by [forking this website](https://github.com/tracking-exposed/youtube.tracking.exposed) from the github repository 🎉🎉

<br />

---
## 23 March 2020 — weTEST stickers pack!
<div class="container row">
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/wetest-ai.jpg"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/wetest-basic.png"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/wetest-know.svg"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/wetest-youralgo.svg"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/wetest-youtrust.jpg"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/wetest-yt.png"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/wetest-yt2.jpg"></span>
  <span class="col-xs-12 col-md-6"><img width="100%" class="imgtile" src="/images/wetest.svg"></span>
</div>

---
## 23 March 2020 — Call for help

We released a small [call for help](https://www.facebook.com/personalizationalgorithm/posts/3143468549072245), especially we need Chinese and Arabic expertise. 

<div class="container col-12 justify-content-center">
  <h2 class="project-color">HELP ― Nothing is collective if desn't come from a group effort (<b>before</b> March 25th!)</h2>
  <ul style="font-size: 1.8em">
    <li>
      We need the most recent (March 2020), short (&lt;5 minutes), accurate, and trustworthy video on Covid-19 in Arabic and Chinese. If you are fluent in these languages and know of a video providing vetted scientic information, Please <a href="#contacts">reach out to us</a>. We already have videos selected in Brasilian (Portugese), Spanish, and English).
    </li>
    <li>
      Please share <a href="https://www.facebook.com/events/795277934295961/" target=_blank>the event</a>!
      It should be seen by groups distant from us. 
    </li>
    <li>
      We will release an open dataset containing all the observations from this study!
      Let your fellow <b>Data analysts</b>, open science advocates, and <b>digital activists</b> know about <a href="https://youtube.tracking.exposed/wetest/1/">youtube.tracking.exposed</a>! Help us keep content platforms accountable.
    </li>
  </ul>
</div>

---
## 22 March 2020 — Research state of art

<div class="container col-12 justify-content-center">
  <br>
  <h2 class="project-color">STATE OF ART ― Recent and past advancement in YT algorithm analysis</h2>
  <br>
  <p style="font-size: 2.2em">
    An evolving discussion among journalists and researchers is taking place regarding YouTube's accountability. First, we saw anecdotal statements; subjective stories from individuals frustrated by a perceived distortion of objective access to information. Since then, interest in the academic investigation of algorithmic bias and accountability has grown. With this study, we aim to contribute to an organic worldwide, scientific, and political experiment to shed light on how YouTube impacts  our view of the world.
  </p>

  <div class="row enlarged">
    <div class="col-6 ">
      <ul>
        <li>The political danger of YouTube is often attributed to an article by Tufekci, Zeynep. “<a href="https://www.nytimes.com/2018/03/10/opinion/sunday/youtube-politics-radical.html" target=_blank>
           YouTube, the Great Radicalizer
           </a>” <i>The New York Times. 10 March 2018.</i> 
           Note, "youtube rabbit hole" concept 
           <a href="https://www.urbandictionary.com/define.php?term=youtube%20rabbit%20hole" target=_blank>has a long history</a>,
           <a href="https://www.wired.com/2014/08/khun-narin-electric-phin-band/" target=_blank>also seen as an oppor</a>r<a href="http://www.mtv.com/news/2283473/youtube-rabit-hole/" target=_blank>tunity</a>;
           <i>
            <a href="https://chrome.google.com/webstore/detail/youtube-rabbit-hole/nlddakjbmpidooplakalfoogdincflfh" target=_blank>[try this to get rid of!?]</a>. 
           </i>
           Most of the evidence supporting these claims is <b>anecdotal</b>; experiences of algorithmic interference, reported by screenshots and memories. 
        </li>
        <li>A more rigorous collection of evidence, from the perspective of a single point of observation, is maintained by Guillaume Chaslot: <a target=_blank href="https://algotransparency.org/">algotransparency.org</a>.</li>
        <li>At the beginning of 2020 a heated debate was seenon twitter, 
          <a target=_blank href="https://twitter.com/mark_ledwich/status/1210743158184693760">
           (Mark Ledwich, twitter announcements)
          </a>
            Their paper reitterated the concept of YouTube as a facilitator in radicalization efforts. The methodology was limited, but reinforced the state of the art.
            <b>Youtube Tracking Exposed aims to provide researchers with the data and tooling</b>
            to overcome the existing methodological limitations.
        </li>
      </ul>
    </div>
    <div class="col-6">
      The browser extension is crucial, and <b>we need it to be used by a diverse group of people, exploring far away corners of the Internet</b>,It may be that specific demographics are more frequently targeted by disinformation. With help from global participants, our collaborative observation and analysis efforts can help bring transparency to algorithmic recommendations. If you want to join our analyst community in talking about algorithms, check out our <a href="https://twitter.com/trackingexposed/status/1237908761710342144" target=_blank>previous experiment</a> which was <a href="https://pornhub.tracking.exposed/potest/final-1" target=_blank>on 😳 pornhub's recommendation algorithm</a>.
      <ol>
        <li>The official API isn't suitable for this analysis and limits access ot information unsuitable to exploring algorthmic bias</li>
        <li>We do not use 'anonymous profiles' like some research, this would miss out on critical data pertaining to the use of historical profiles in recommendations.</li>        
        <li>We distinguish between two kind of <i>logged profiles</i>: the profiles with traces left by genuine human utilization, and automated data collection efforts. </li>
      </ol>
    </div>
  </div> 

  <p style="font-size: 2.2em">
    <b>COVID-19 is having unprecedented impact on life across the globe</b>, and YouTube claims to be active in combating disinformation at a time when people are seeking to inform themselves on topics related to public health. Cultural interpretation does not scale as well as web services do, and we're skeptically of efforts for content in languages where less investment has been made. With this study we aim to explore the impact of content recommendations for public health information as it shapes the views and beliefs of non-English speakers as well.
  </p>

</div> <!-- container -->

---
## 21 March 2020 — Background experiment design

<div class="container col-12 justify-content-center">
  <br>
  <h2 class="project-color">DESIGN ― Planning the experiment shape the possible findings</h2>
  <br>
  <p>Don't be surprised smarter experiments might be modeled. For example, prof. <a href="https://data-activism.net/author/davide/" target=_blank>
  Davide Beraldo
  </a> and Salvatore Romano coordinated a test with logged profiles and by simulating political leaning (on what? you tell me, check out: <a href="/trexit">Trexit</a>), they recorded how YT diversify the informative experiences.</p>
  <div class="row enlarged">
    <div class="col-6">
      <h3>weTEST Experiment Design</h3>
      <p>Testing a personalization algorithm isn't quick and straightforward, as it seems. The researcher has to define a methodology. This method gives different values to the collected samples because they are only useful to test the assumptions initially made. 
        <br>
        <br>
        <i>This text explores a difficult concept. It might take a while before fully interiorize the complexity of tools, restrictions, and variables tracking. If anything is unclear, don't miss the
          <a href="/automation"><b>
            three different methodologies lead to different dataset properties
          </b></a>,
          <a href="/what-we-collect"><b>
            what we collect and how data might be safely released
          </b> </a>, and 
          <a href="/data"><b>
            data format and usages
          </b></a>.
        </i>
        <br>
        <br>
        Because wetest wants to be a collaborative experiment, it is smart to develop initial findings without assuming any past research. We'll start with a few concise research questions. 
        <br>
        Inevitability, at the beginning, these question are more technical than focused on studying the political impact of the recommendation algorithms. In this initial phase we focus on developing tools and best practices. 
        <br>
        <br>
        Tracking.exposed goals aren't merely to produce reports, articles, or researches. Yes, we do it, (look at our <a href="/">home</a>, bottom-left); it has been part of our training experience. Algorithm accountability can't be revolutionary if accessible only to data analyst and data protection authority. A bit of knowledge on platform influence, or algorithm literacy, should be in the modern background education, and we want to play with it. 
        <br>
        <br>
        Do you remember, companies taking a bunch of random users and experiment on them? 
          <b>We'll do precisely the opposite</b>: 
          <b>a distributed crowd of random individuals, coordinated to experiment on them!</b>
          Anyone can contribute. Someone with a clean, freshly installed browser, someone else with their Google account logged. Partecipants, during the chosen day, should watch a few videos, and we'll collect the video the platform will recommend. We will run analysis to see how much diverse ends up to be suggested video. 
          <br<br>
          It is the most basic calculus on how much is unique, personalized, the experience the company decide for us.
      </p>
    </div>
    <div class="col-6">
      <img class="imgtile" width="96%" style="margin-left:2%;margin-right:2%" src="/images/wetest-youralgo.svg" />
      <br>
      <smaller style="font-size:0.6em;">This is our 
        <a href="https://tracking.exposed/manifesto">Manifesto </a>, or checkout the 
        <a href="https://pornhub.tracking.exposed/potest/final-1">collaborative PornHub analysis</a>, and
        <a href="/preview">use ytTREX</a>.
      </smaller>
      <br>
      <h3>This test - why language?</h3>
      <blockquote class="blockquote">
        <p class="mb-0">
          Farshad Shadloo, a YouTube spokesman, said the company’s recommendations aimed to steer people toward authoritative videos that leave them satisfied. He said the company was continually improving the algorithm that generates the recommendations. “Over the past year alone, we’ve launched over 30 different changes to reduce recommendations of borderline content and harmful misinformation, including climate change misinformation and other types of conspiracy videos,” he said. “Thanks to this change, watchtime this type of content gets from recommendations has dropped by over 70 percent in the U.S.”
        </p>
        <footer class="blockquote-footer" style="margin-top:0;border-top:0;">NYTimes 2 March 2020
          <cite title="Source Title">Can YouTube Quiet Its Conspiracy Theorists?</cite>
        </footer>
      </blockquote>
      <p>
        In commentary such as the one above, there are two pitfalls: <b>a language issue</b>, and a <b>trust issue</b>.
        <br>
        Maybe YT is right, and in English language, for the US audience, Youtube investment might guarantee a quality in content curaction high enough to avoid fines, but would be that true in another language? 
        <br>
        The exploitative business model of surveillance capitalism can't easily scale when the succes metric is the _removal of content troublesome for a precise culture_ because investing in content moderator trained and balanced in every culture in the world seems unfeasable due to high costs.
        <br>
        This first experiment concentrate effort in watching four videos chosen by us, on the same broad topic (covid19), in the four most used langagues in the world.
        <br>
        Regardless of trust, how is credible a company who promise changes, (they are invisible), and the quality assessment of such improvements comes from the same organization? Independent testing, like the one we want to enable, is an option accessible to you, to a class of students, to the FTC and to the DPAs.
      </p>
    </div>
  </div> 
  <h3>
    We want to apply the most scientific, open, distributed approach we can aim for
  </h3>
  <p class="enlarged">
    <b>Diversity is the key</b>, but how exactly?
    <br>
    <br>
    Personalization algorithms, content curation, and targeted experiences are unique for each of us. 
    <br>
    Winning the fight for algorithmic independence (when you retain agency and control on the prioritization filter know as recommendation system), make sense if most of us reach that point. A minority of techno elite, literate enough to fact-check and with the skills to find the right information online, would only reinforce inequality among the people in the information age. Diversity is the key because we collectively should understand how other people are perceiving the public discourse. 
    <br>
    A widely deployed recommendation system should be validated by a public policy. It should be subject to public scrutiny, gauging the impact on all of us. Just in 2020, the goal is not a better society but a fluid business flow in the monopolist's hand.
    <br>
    Algorithm analysis might seems a purely technical effort. But the platform we're operating on (Facebook, youtube, amazon) mixes social constructs with their technology, and implicitly, the limited form of algorithm analysis we can perform via passive observation, inherit complexities typical of political analysis.
    <br>
    <br>
    Now, with wetest#1, <b>we begin with the technical analysis</b>, to build up a knowledge base robust enough to address <b>political and sociological analysis</b>. We can't yet address research questions such as "<i>Does youtube radicalize or not people?</i>" or "<i>are videos with blonde white women prioritized against other demographics? It is true in any region?</i>". We want to coordinate tests with these politically meaningful topics, but we can't yet, they aren't low hanging fruits. Releasing approximative analysis would be detrimental for algorithm literacy and platform accountability. Let's build this community with academics and digital rights defender. 
    <br>
    If you have an idea, propose your experiment by
    <a href="https://github.com/tracking-exposed/youtube.tracking.exposed/issues/new?assignees=&labels=research+question&template=research-question-proposal.md&title=%3CRQ%3E" target=_blank>opening this formatted GitHub issue</a>
    , and please consider:
    <ol class="enlarged">
      <li>we should start to measure technical conditions, and be confident in testing such variables.</li>
      <li>read other issues marked in the same way; this might help to understand which limits this test has.</li>
      <li>research questions should come from the community: concerned citizen, seasoned professional expert, to submit a proposal open a GitHub issue in our repository.</li>
    </ol>
  </p>
</div> <!-- container -->

---
## March 2020 — quarantined 🤞, the planning of [weTEST#1](/wetest/1) starts!

<h2 class="project-color">
  <a href="https://covid-ad-home.info" style="color:brown">
  Wash your hands
  </a> 🦠 and spread the word, we need as much observations as possible!
</h2>
<br/><br/>

{{<colorblock>}}

<div class="container col-12 justify-content-center" id="contacts">
  <h2 style="text-align: center;">CONTACT US ― 
    <a href="https://github.com/tracking-exposed" target=_blank>github</a>,
    <a href="#contacts" onclick="replacemail()" id="email">team shared email</a>,
    <a href="https://twitter.com/trackingexposed" target=_blank>
      project twitter</a>,
    <a href="https://facebook.com/personalizationalgorithm" target=_blank>facebook page</a>
  </h2>
</div> <!-- container -->

<script>
function replacemail() {
    $("#email").text("youtube-team" + "@" + "tracking" + "." + "exposed");
  }
</script>
