---
title: Quick tour on YouTube algorithm
subtitle: A dozen of researchers play with our tool for two days; Below our findings and how you can replicate it
date: 2019-07-22T15:01:21+01:00
draft: false
description: A dozen of researchers analyzed youtube algorithm for two days; Here our findings and how you can replicate the test.
---

The initial analysis was made in July 2019. A class of students part of [DMI Summer School](https://wiki.digitalmethods.net/Dmi/SummerSchool2019) join the project coordinated by [ALEX (algorithms exposed)](https://algorithms.exposed). Watch our [slideshow](https://github.com/tracking-exposed/presentation/blob/master/ALEX%20-%20ytTREX%20-%20Summer%20School%2019.pdf), or read the [final report](https://github.com/tracking-exposed/presentation/blob/master/ytTREX%20-%20final%20report%20-%20Summer%20School%2019.pdf). We'll start by the results, below you can find [why this matter](#why-this-matter), our [methodology](#methodology), what [make us unique](#what-make-us-unique), and how to [replicate](#replicate-our-experiments) our experiments.

{{<colorblock color="secondary" text="political video are treated differently from non-political videos" >}}

TODO -- cats vs no-deal brexit

{{<colorblock color="secondary" text="official APIs are unreliable to do algorithm analysis" >}}

We verify which videos YouTube declare as _related_ by using the official API, and then, compare it with what is actually display on people interface.

{{<figure src="/images/yt-results/youtube-API-vs-TREX-observations.svg" alt="" class="full align-center" >}}
### Above, red circle represents the videos _declared as related_, in yellow and green, the _videos actually suggested to watchers_.
(We did this test using one of the most visualized video of all time: Gangnam style - PSY, )

{{<colorblock color="secondary" text="every second and click counts as data point" >}}

## TODO -- put here all the network graph viz

## ----------------------------------------------------------------------------------
(in the previous section goes the first summarized results; below, the four points for who want to know more)
## ----------------------------------------------------------------------------------

# Why this matter

{{<entry text="The secret algorithm behind the related videos is a method to maximize engagement; that's our target. " picture="/images/yt-results/secrecy.png" type="right" >}}

Source: [It’s not that we’ve failed to rein in Facebook and Google. We’ve not even tried](https://www.theguardian.com/commentisfree/2019/jul/02/facebook-google-data-change-our-behaviour-democracy),

Algorithms are a known problem since a while, it might look like we are not doing a lot against surveillance capitalism
Tracking Exposed has an actionable plan, and [experiences built on testing Facebook](https://facebook.tracking.exposed/results).

{{<entry text="now was are addressing a new platform: YouTube" picture="/images/yt-results/TrackingExposed_Main Logo - Positive payoff.svg" type="right" >}}

{{<entry text="Because personalization works differently for every one of us, and we should be ready, as a society, to the world in checking their algorithm" picture="/images/yt-results/WENEEDSOMEPICTUREHERE.jpg" type="left" >}}

{{<colorblock text="Think to the Volkswagen emission scandals" >}}

Researchers found the company was cheating on the pollution validation because provide a tampered auditing system!
We look at the actual content served to people, not to what YouTube declares or let us play with

# What make us unique
{{<colorblock text="By installing our browser extention, you'll do passive scraping of personalized experience. The collected evidences can be used by you and you decide wher to share those." >}}

{{< yt-extension >}}

You might have a *totally legitimate privacy concern*, this is why:

1. You have full control of your data (_TODO: we still lack of interface, only developers can fully delete their data at the moment_)
2. Our code is free and fully auditable.
3. We are public funded, and is not in our sustainability model to exploit people experience.
4. Every user is anonymous, you can access to your data because of a cryptographic secret generated in your browser.
5. We are GDPR compliant, (_TODO: we are, but we lack of the proper description on how data are processed and why_).
6. we don't use your data to run analysis, this tool is meant to let individual or groups test how persoanlization algorithms affects them.
7. You can use dedicated profiles with the tool, without using your. (_TODO: we have to document how you can refresh the cryptographic token and how to use a "clean browser"_)

##### Watch our small experiment: you can replicate it with your friends!

{{<boxes text="Methodology: a fresh installed Brave browser, without any cookies or login on Youtube" >}}

{{<entry text="10 different profiles, access to the same video at the same time" picture="/images/yt-results/political-clean-browser-network-graph.svg" type="left" >}}

Each violet bubble in the center represent one of the video suggested. They share many links, because most of the suggestion are shared among all the observer. The side is proportional to the occurencies.

{{<boxes text="Methodology: same people, same video, but with their personal YouTube account" >}}
{{<entry text="In the common scenario, google/youtube have a lot of data points about your previous activites." picture="/images/yt-results/political-dirty-browser-network-graph.svg" type="right" >}}

The number of videos in the center diminish drastically. Most of the suggested video are individual, represented by the green dots.

## TO BE COMPLETED

{{<entry text="TODO" picture="/images/yt-results/bubble-graph-not-political.svg" type="left" >}}

{{<entry text="TO BE DONE" picture="/images/yt-results/bubble-graph-political.svg" type="right" >}}

{{<entry text="TODO" picture="/images/yt-results/two-users-CNN-foxnews-edposure.svg" type="left" >}}
