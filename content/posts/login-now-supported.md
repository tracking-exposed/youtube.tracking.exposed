---
title: Our dataset just get extended 
date: 2020-03-14T13:01:21+01:00
draft: false
description: Small update posts on how ytTREX extended their dataset.
type: post
---

{{< entry 
    aligntitle="text-left"
    title="This screencapture come from one of our accounts, below is how it looks a portion of the Evidence Page. This is the list of the last videos watched and collected by ytTREX, and it is accessible only to the person using the browser extension." 
    text="As you can see, now a small icon of an human (👤) appears close to a video if the browser with ytTREX was logged in YouTube"
    picture="/images/login-supported.jpeg" 
    type="left"
>}}

---

## What to do next? Try with your friends to replicate this experiment!

---

{{< entry 
    aligntitle="text-left"
    title="This quick test allow you to compare how people logged off from youtube get a broader spectrum of contextual recommendation, rather than the personalized. To run this test, we installed Brave browser. Brave is derived from Chrome, contains adblocker by default, but the good thing is that normally nobody has it on their computer so we can be sure there are not cookies, trackers, and especially is not login in YouTube. To run this test, all these tracks should be clean."
    text="10 different students using their computers, open the same video at the same time. Here we compare the 20 related videos suggested" 
    picture="/images/yt-results/clean-browsers-pattern.svg" 
    type="left" 
    legend-image-url="/images/yt-results/fixed-legend-6,7.svg"
>}}

Each violet bubble in the center represents one of the video suggested. They are few, but share many links, because most of the suggestions are the same among all the observers.
This is a starting condition: how users gets treated when Google doesn't know anything about a profile. Of course, they always know something (location of the connection, operating system model, default language, browser version). We tried to reduce these differences, to have something similar to a *non-personalized* algorithm stage. **You might expect this!** the large majority of the suggestions are shared among the users, because the data points usable by Google to personalize the suggestions are reduced.


{{< entry 
    aligntitle="text-left"
    title="Now watch a video with the standard browser, full of cookies, and logged in YouTube."
    text="It is visually clear how the data points linked to the profiles cause personalized suggestions." 
    picture="/images/yt-results/personalized-browsers-pattern.svg" 
    type="right"
    legend-image-url="/images/yt-results/fixed-legend-6,7.svg"
>}}

*The two illustrations above come from our [first test](/results).*