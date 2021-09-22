---
title: Compare related by Channel
subtitle: This analysis is meant for content creator, to figure out which video are suggested next to theirs
date: 2019-09-22T15:01:21+01:00
draft: false
type: app

og_title: "youtube content producer treatment statistics"
og_type: "website"
og_image: "http://youtube.tracking.exposed/yttrex-logo.jpg"
og_url: "https://youtube.tracking.exposed/author"
og_description: "look at the suggested video organized by publisher"
---

<div class="container" style="display:none" id="results">
    <h2 id="authorName"></h2>
    <span>Total observation available: <code id="total"></code></span> —
    <span>Total recommendations: <code id="recctotal"></code></span>
    <hr />
    <div class="row">
        <span class="col-6" id="self">
            <p>Self Recommendations</p>
            <div style="font-size:10px" id="selflist"></div>
        </span>
        <span class="col-6" id="external">
            <p>External</p>
            <div style="font-size:10px" id="externallist"></div>
            <span style="color:darkblue;font-waight:700;">Stripped videos recommended only once: <code id="stripped"></code>
            </span>
        </span>
    </div>
    <div class="row">
        <span class="col-6" style="font-size:40px" id="percentself"></span>
        <span class="col-6" style="font-size:40px" id="percentexternal"></span>
    </div>
</div>

<div id="loading" style="font-size:40px">LOADING info from client</div>
<div id="error"></div>

---

#### Video samples for your experiments:
<div class="container" id="recent"></div>

---

#### API basic

**How compose the request**

https://youtube.tracking.exposed/api/v1/author/EwZRhQ4easE

**How to interpret the results**

```
Object { authorName: "ViVi Music", content: (252) […], authorSource: "/channel/UCQk7t8-aQrZqeImjuNui8mA", overflow: false, total: 14 }
​
authorName: "ViVi Music"
authorSource: "/channel/UCQk7t8-aQrZqeImjuNui8mA"
content: Array(252) [ {…}, {…}, {…}, … ]
overflow: false
total: 14
```

**the content Array:**

```
"id": "1425e6b9df6818bd64f50ca8KY67Htlk0",
"watchedTitle": "【Nightcore】千本桜(Senbonzakura)",
"watchedVideoId": "uKxyLmbOc0Q",
"savingTime": "2020-03-26T21:46:16.883Z",
"recommendedVideoId": "ca8KY67Htlk",
"recommendedTitle": "Hanatan - Senbonzakura (Suzumu Remix)",
"recommendedChannel": "「永遠」EIENMUSIC"
```

The request need a youtube Video Id. The backend look in the database on who is the author of this video (we call it, O.A.) and then fetch all the video, recorded in yttrex, belonging to the same author.

Then it aggregate the results in three groups: <i>sameAuthor</i> are the video recommended that belong to O.A, (also called self-recommendations), and <i>external</i>: the remaining videos, related, which lead recommending an external author.

The API have been initially developed as part of the <a href="/seeyou">SeeYou</a>, an experiment on building a Youtube(r) labor union. (to better understand the addressed problem, please check out <a href="https://fairtube.com">FairTube</a>); since 2021 it is sustained by the <a href="https://youchoose.ai">YouChoose.AI</a> project.


{{<shared-yt-services>}}


<script src="/js/global.js"></script>
<script src="/js/public.js"></script>
<link rel="stylesheet" href="/css/author.css">

<script type="text/javascript">

    $( document ).ready(function() {
        initAuthor();
    });

</script>