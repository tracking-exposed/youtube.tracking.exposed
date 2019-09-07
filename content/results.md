---
title: Quick tour on YouTube algorithm
subtitle: A dozen of researchers play with our tool for two days; Below our findings and how you can replicate it
date: 2019-07-22T15:01:21+01:00
draft: false
description: A dozen of researchers analyzed the YouTube algorithm for two days; Here are our findings and how you can replicate the test.
---

In July 2019, a group of students participating in the [DMI Summer School](https://wiki.digitalmethods.net/Dmi/SummerSchool2019) joined the project coordinated by [ALEX (algorithms exposed)](https://algorithms.exposed). Take a look at the results in this [slideshow](https://github.com/tracking-exposed/presentation/blob/master/ALEX%20-%20ytTREX%20-%20Summer%20School%2019.pdf), or read the [final report](https://github.com/tracking-exposed/presentation/blob/master/ytTREX%20-%20final%20report%20-%20Summer%20School%2019.pdf).

{{<colorblock color="secondary" text="political videos are treated differently from non-political videos" >}}

With a dozen of students we played the same video in two different conditions: with the browser they use every day (logged in trough Google) and with a freshly installed one.
In the experiments below, we reference them as the _clean browser_ and _Youtube account_. On the second one, we expected to observe the results of a more specific and targeted personalization.
Our goal was to **compare the 20 related videos** for different profiles and observe the differences between them.

{{<entry text="How often YouTube suggests videos as explicitly “Recommended for you”, while looking at a non-political video" picture="/images/yt-results/bubble-graph-not-political.svg" type="right" >}}

<div class="row col-sm-12 text-center">
  <img width="100%" style="zoom:2.5;" src="/images/yt-results/fixed-legend-1,2.svg" />
</div>

The percentage of "For you" recommendations grows when we switch from the "clean" browser to our personal accounts logged browser, which has more data on us to make decisions. In this case we have some explicitly “for you” related videos in the clean browser (7% in yellow): the percentage grows when watching the same video with more personalized browser. The video used for this test was: “cutest cat compilation”.

**Expected results**: The browsers logged in the _Youtube account_ inherits years of behavioral surveillance. We correctly expect a higher amount of yellow dots (explicitly personalized) and a larger number of dots (more diversity).

**Unexpected insights**: Even with clean browsers we see four explicitly suggested videos. This happened to the students using a non-English system language. The browser communicates to YouTube this system setting, and Google decides to dedicate one of their 20 suggestions to offer a content in the native language of the watcher. This implies, even without cookies and at a first view, technical information is used to personalize suggestions.

{{<entry text="It is visually clear that political videos triggers different rules. Explicitly recommendations “For you” while looking at a political video" picture="/images/yt-results/bubble-graph-political.svg" type="left" >}}

<div class="row col-sm-12 text-center">
  <img width="100%" style="zoom:2.5;" src="/images/yt-results/fixed-legend-1,2.svg" />
</div>

Moving to the second part of the experiment - watching a political video - the differences between the clean and the personal browser set up were much more evident.
In this case we had no “for you” videos at all. It seems that Youtube doesn’t want to suggest anything on this sensitive issue (perhaps to make sure they do not make mistakes).
When we move to our personal accounts to play the same video, almost half of the contents are recommended “for you”. The explanation could be that, when the platform has some data about the users, tries to personalized more the related videos on political (and polarized) issues, than on the others. The video used was: “Philip Hammond - no deal Brexit”.

**Unexpected insights**: YouTube knows what is political and what is not; We wonder if this topic classification works well also in non-English languages.

{{<colorblock color="secondary" text="official APIs are unreliable for algorithm analysis" >}}

We verified which videos YouTube declares as _related_ by using the official API, and then compared those with what is actually displayed on people interface.

{{<entry text="Red circles represent the videos declared by YT as related. In yellow and green, the videos actually suggested to watchers." picture="/images/yt-results/youtube-API-vs-TREX-observations.svg" type="right" >}}

<div class="row col-sm-12 text-center">
  <img width="100%" style="zoom:2.5;" src="/images/yt-results/fixed-legend-3.svg" />
</div>

This analysis mostly confirms why we should use only user-centric observation to perform algorithm analysis. The data released by YouTube related API say "", but by empirical measurement you can see only 14 (the overlapping area) videos are actually suggested to watchers. Also, we can't fully rely on analysis made by research for us, because the videos represented by Green - Yellow are part of the people personalized suggestions and a research would never have any chance to guess these, a researcher can at best find the yellow circle, when people are exposed to the green one. We did this test using one of the most visualized video of all time: “Gangnam style - PSY”.

**Verification**: YouTube can't be trusted. No matter which promise of transparency, APIs for researchers, or whatever they might offer. Passive scraping and GDPR compliance management of data will let you see how algorithm _actually_ treats you.

{{<colorblock color="secondary" text="Every second and click counts as data point" >}}

<div class="row">
  <div class="col-sm-6">
    <figure>
      <img width="100%" src="/images/yt-results/after-twenty-seconds-profiling.svg" />
    </figure>
  </div>
  <div class="col-sm-6">
    <figure>
      <img width="100%" src="/images/yt-results/after-two-minutes-profiling.svg" />
    </figure>
  </div>
</div>

<div class="row col-sm-12 text-center">
  <img width="100%" style="zoom:2.5;" src="/images/yt-results/fixed-legend-4,5.svg" />
</div>

First image: watching Fox and CNN for 20 second create just three common suggestions specific for CNN watchers (yellow spots) and no one for the other group (blue spots). In fact we can see a lot of videos suggested to both groups (grey spots) and some suggestions for the single user (light-blue spots).

Second image, extending the watching time till 2 minutes, we can see eleven common suggestion to at least two CNN users, and six for Fox.

We already know, by the admission of the developers, that the time watched per play is one of the most relevant factors used to create the suggested list. Actually, it is one of the best ways to understand the appreciation for a video and than to figure out if a suggestion has been effective or not. It’s important to discover how exactly YouTube records this data to be able to consider this variable in future studies. It’s possible that there are other types of interactions recorded by the platform (For example mouse movements, GPS location, address book.. It's Google, after all.) but we need further research to verify it.

<!-- Report is complete, now presentation of us begin. The style changes:
   1) we use color="primary"
   2) we don't use 'entry' but 'halfentry'
  -->

{{<colorblock text="Why this matters" color="primary">}}

{{<halfentry title="The secret algorithm behind the related videos is a method to maximize engagement; that's our target." content="Algorithms are a known problem since a while, but it might look like we are not doing much against surveillance capitalism. Tracking Exposed has an actionable plan, and experiences built on testing Facebook algorithm black-box." picture="/images/yt-results/lead_art_algorithm_VOX.jpg" type="right" link="https://www.vox.com/technology/2018/10/1/17882340/how-algorithms-control-your-life-hannah-fry" description="“How algorithms are controlling your life”." credit="Christina Animashaun/Vox">}}

{{<halfentry title="We support a new platform: YouTube" picture="/images/yt-results/TrackingExposed_Main Logo - Positive payoff.svg" type="left" link="https://tracking.exposed" description="Our umbrella project">}}

{{<halfentry title="Warning: personalization works differently for each one of us" content="we should be ready, as a society, to observe and think about how algorithms have an impact on our lives. You shouldn't relay on an expert report, but figure how things affects us in first person." picture="/images/yt-results/6-or-9.jpg" type="right" >}}


{{<colorblock text="What make us unique" color="primary">}}

### By installing our browser extension, you'll do passive scraping of your personalized experience. The collected evidence can be used by you and you decide what, when, and if you want to share those results.

{{< yt-extension >}}

### Still, you might have *totally legitimate privacy concerns*, this is why:

1. You have full control of your data (_TODO: we still lack of interface, only developers can fully delete their data at the moment_)
2. Our code is free and fully auditable.
3. We are publicly funded, and it's not in our sustainability model to exploit people experience.
4. Every user is anonymous: you can access to your data because of a cryptographic secret key generated locally in your browser.
5. We are GDPR compliant, (_TODO: we are, but we lack of the proper description on how data are processed and why_).
6. We don't use your data to run analysis: this tool is meant to let individuals or groups test how personalization algorithms affect them.
7. You can use dedicated profiles with the tool, without using your. (_TODO: we have to document how you can refresh the cryptographic token and how to use a "clean browser"_)

{{<colorblock text="Watch our small experiment: you can replicate it with your friends!" color="primary">}}

### Methodology: a freshly installed Brave browser, without any cookies or login on YouTube

{{<entry text="10 different students using their computers, open the same video at the same time. Here we compare the 20 related videos suggested" picture="/images/yt-results/clean-browsers-pattern.svg" type="left" >}}

<div class="row col-sm-12 text-center">
  <img width="100%" style="zoom:2.5;" src="/images/yt-results/fixed-legend-6,7.svg" />
</div>

Each violet bubble in the center represents one of the video suggested. They are few, but share many links, because most of the suggestions are the same among all the observers.
This is a starting condition: how users gets treated when Google doesn't know anything about a profile. Of course, they always know something (location of the connection, operating system model, default language, browser version). We tried to reduce these differences, to have something similar to a *non-personalized* algorithm stage.

**Verified expectation**: The large majority of the suggestions are shared among the users, because the data points usable by Google to personalize the suggestions are reduced.

### Methodology: watch a video with the standard browser, full of cookies, and logged in YouTube

{{<entry text="It is visually clear how the data points linked to the profiles cause personalized suggestions." picture="/images/yt-results/personalized-browsers-pattern.svg" type="right" >}}

<div class="row col-sm-12 text-center">
  <img width="100%" style="zoom:2.5;" src="/images/yt-results/fixed-legend-6,7.svg" />
</div>

The number of videos in the center diminishes drastically. Most of the suggested video are unique for the individual, and they are represented by the green dots.

**Confirmed expectation**: The large majority of the suggestions are shared among the users, because the data points usable by Google to personalize the suggestions are reduced.

### ...and when we got this, our experiments begin

Unfortunately our experiments had just a few hours, but if a team (your team, your class, friends, or whatever) can coordinate similar tests, you can reproduce and try with new variables. The research question is: **which, of the many data points observed by Google, makes the pattern shift from the initial situation to the personalized one?**
