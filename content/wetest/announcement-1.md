---
title: "weTEST#1 ― Announcements & Update"
subtitle: "March 2020: the first coordinated observation of the Youtube algorithm"
draft: false
date: 2020-03-21T10:26:08Z

og_title: "Coordinated observation of YouTube — test n.1 updates"
og_type: "website"
og_image: "http://youtube.tracking.exposed/images/compare.jpeg"
og_url: "https://youtube.tracking.exposed/wetest/announcement-1"
og_description: "The first worldwide test of the Pornhub algorithm; on Sunday January 19th, with a browser extension, we'll see how PH personalizes the customer experience"

extraCSS: "/css/wetest.css"
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

<hr />
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
        <li>The political danger of YouTube is often attributed to an article by Tufekci, Zeynep. “<a href="https://www.nytimes.com/2018/03/10/opinion/sunday/youtube-politicsradical.html" target=_blank>
           YouTube, the Great Radicalizer
           </a>” <i>The New York Times. 10 March 2018.</i> 
           Note, "youtube rabbit hole" concept 
           <a href="https://www.urbandictionary.com/define.php?term=youtube%20rabbit%20hole" target=_blank>has a long history</a>,
           <a href="https://www.wired.com/2014/08/khun-narin-electric-phin-band/" target=_blank>also seen as an oppor</a>r<a href="http://www.mtv.com/news/2283473/youtube-rabit-hole/" target=_blank>tunity</a>;
           <i>
            <a href="https://chrome.google.com/webstore/detail/youtube-rabbit-hole/nlddakjbmpidooplakalfoogdincflfh" target=_blank>[try this to get rid of!?]</a>. 
           </i>
           Most of the evidence supporting these claims is <b>anecdotal</b>; stories told by the author, supported by screenshots of content. 
        </li>
        <li>A more rigorous collection presentaiton of evidence was produced by <a target=_blank href="https://algotransparency.org/">algotransparency.org</a>, by Guillaume Chaslot.</li>
        <li>At the beginning of 2020 a heated debate was seenon twitter, 
          <a target=_blank href="https://twitter.com/mark_ledwich/status/1210743158184693760">
           (Mark Ledwich, twitter announcements)
          </a>
            Their paper reitterated the concept of YouTube as a facilitator in radicalization efforts. The methodology was limited, but reinforced the state of the art.
            <b>Youtube Tracking Exposed aims to provide researchers with the data and tooling
          </b> to overcome the existing methodological limitations.
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
  <b>COVID-19 is having unprecedented impact on life across the globe</b>, and YouTube claims to be active in combating disinformation at a time when people are seeking to inform themselves on topics related to public health. Cultural interpretation does not scale as well as web services do, and we're skeptically of efforts for content in languages where less investment has been made. With this study we aim to explore the impact of content recommendations for public health information as it shapes the views and beliefs of non-English speakers as well.  </p>

</div> <!-- container -->

<hr />
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
    <b>
      Diversity is the key</b>, but how exactly?
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