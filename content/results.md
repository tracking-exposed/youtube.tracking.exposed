---
title: First insights on YT algorithm
subtitle: a dozen of researchers play for two days with our tool; below our findings and how you can replicate it
date: 2019-05-22T15:01:21+01:00
draft: false
description:  Investigating YouTube
---

{{<entry text="The secret algorithm behind the related videos is a method to maximize engagement; that's our target. " picture="/images/yt-results/secrecy.png" type="right" >}}

Source: [It’s not that we’ve failed to rein in Facebook and Google. We’ve not even tried](https://www.theguardian.com/commentisfree/2019/jul/02/facebook-google-data-change-our-behaviour-democracy),

## Algorithms are a known problem since a while, it might look like we are not doing a lot against surveillance capitalism

Tracking Exposed has an actionable plan, and [experiences built on testing Facebook](https://facebook.tracking.exposed/results).

{{<entry text="now was are addressing a new platform: YouTube" picture="/images/yt-results/TrackingExposed_Main Logo - Positive payoff.svg" type="right" >}}



{{<entry text="A former google employee publicly criticized the company, and display" >}}

{{<entry text="Because personalization works differently for every one of us, and we should be ready, as a society, to the world in checking their algorithm" picture="/images/yt-results/qualcosa.jpg" type="right" >}}

{{<entry text="We are unique because of we to the analysis from the user perspective." picture="/images/yt-results/qualcosa.jpg" type="left" >}}

{{<colorblock text="What makes us unique?" >}}

### YouTube has APIs and they includes the related. They are used to study algorithm ecosystem. We argue this is not OK.

We check which videos Youtube declare as "related" using the API, and what is actually display on people interface.
(We did this test using one of the most visualized video of all time: Gangnam style - PSY, )

{{<figure src="/images/yt-results/youtube-API-vs-TREX-observations.svg" alt="" class="full align-center" >}}

### Above. Red circle represents the videos _declared as related_, in yellow and green, the _videos actually suggested to watchers_.

{{<colorblock text="Think to the volkswagen emission scandals" >}}

Researcher find out the company was cheating on the pollution mechanism because provide an auditing system which was tampered!


{{<colorblock text="with this tool you can record what is individualized for you" >}}

This might look like a *totally legitimate privacy concern*, this is why:

1. *TODO* You have full control of your data
2. Our code is free and fully auditable
3. We are public funded and is not in our sustainability model, to exploit people experience
4. *TODO* Every user is anonymous, you can access to your data because of a cryptographic secret generated in your browser.
5. *TODO* we are GDPR compliant, this is how data are processed and why.
6. we don't use your data to run analysis, this tool is meant to let individual or groups test how persoanlization algorithms affects them.
7. *TODO* you can use dedicated profiles with the tool, without using your.

##### In this test we used ours, but was just meand to show the difference beteeexperiment, for example

{{<boxes text="Methodology: a fresh installed Brave browser, without any cookies or login on Youtube" >}}

{{<entry text="10 different profiles, access to the same video at the same time" picture="/images/yt-results/political-clean-browser-network-graph.svg" type="left" >}}

Each violet bubble in the center represent one of the video suggested. They share many links, because most of the suggestion are shared among all the observer. The side is proportional to the occurencies.

{{<boxes text="Methodology: same people, same video, but with their personal YouTube account" >}}
{{<entry text="In the common scenario, google/youtube have a lot of data points about your previous activites." picture="/images/yt-results/political-dirty-browser-network-graph.svg" type="right" >}}

The number of videos in the center diminish drastically. Most of the suggested video are individual, represented by the green dots.

### TODO continue

{{<entry text="Sa Sa" picture="/images/yt-results/bubble-graph-not-political.svg" type="left" >}}

{{<entry text="Sa Sa" picture="/images/yt-results/bubble-graph-political.svg" type="left" >}}

{{<entry text="Sa Sa" picture="/images/yt-results/two-users-CNN-foxnews-edposure.svg" type="left" >}}
