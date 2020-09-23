---
title: Compare Youtube automatically generated homepages
subtitle: Because what you see, is the portion of reality Google decided you'll know.
date: 2020-03-10T15:01:21+01:00
draft: false
description: Tools and visiaulization to compare video platform automated decision making and personalized content curation

og_title: "Compare YT Homepage"
og_type: "website"
og_image: "http://youtube.tracking.exposed/compare.jpeg"
og_url: "https://youtube.tracking.exposed/hompare"
og_description: "youtube.tracking.exposed allow to see discrimination through comparing your personalized content."
---

{{<colorblock text="This service isn't ready yet, despite there is an API">}}

<pre>
curl https://youtube.tracking.exposed/api/v1/home/

[
    { selectedVideo }, 
    { selectedVideo }, 
    { selectedVideo }, ...
]
</pre>

<p>
    The API return all the selected videos up to 100 evidences collected in the same day of the request.
    <br>
    The API and collection have been developed to display how personalization happens in homepages. To get a grasp of why this matter, please give a look to <a href="https://their.tube">Their Tube</a>.
    <br>
    We don't know yet if and how transform the collected data in meaningful visualization. If you are doing any research, you should find a CSV in your personal page.
    <br>
    We should engineer a decent interface and UX. If you've features in mind or skill to share, feel free to connect with our <a href="https://github.com/tracking-exposed/youtube.tracking.exposed/issues">issue tracker</a> ;)
</p>

---

{{<shared-yt-services>}}
