---
title: Statistics & Bar charts
subtitle: adoption trends, system performances, and few lines on open data
type: c3app
date: 2019-08-11T00:00:00
description: Statistics build on what we are collecting; Aggregated information to keep in check our system and our relevance
draft: false

og_title: "ytTREX - impact"
og_type: "website"
og_image: "http://youtube.tracking.exposed/yttrex-logo.jpg"
og_url: "https://youtube.tracking.exposed/impact"
og_description: "impact analysis, active users, collected content. we don't do full open-data, but you can ask for more as long as is privacy preserving"
---

<!-- the graphs are appended in the 'div'. the ID #impression-graph is referenced in hugo-theme-trex/layouts/c3app/single.html -->
## New adopters 
<div id="supporters-graph" class="c3graph"></div>

_Newcomers is the number of people installing the extension. In every day the sum of new installations is counted._

---
## Last access (a.k.a recently active supporters)
<div id="active-graph" class="c3graph"></div>

_Here the graph displays the number of active supporters, for the last time, in the correspondent day._

---
## Count of 'Related' videos 
<div id="related-graph" class="c3graph"></div>

_Related reports the number of suggested videos. Normally we observe 20 related suggestion, but for technical reason we catch a different number. This stats is meant at helping us in investigating how the collection is doing._

---
## Evidences successful analyzed by our pipeline
<div id="processing-graph" class="c3graph"></div>

_Below a graph on how our parsers are performing: how many HTMLs have been parsed successfully or not. The failures count might not be a failure from the parsers, but rather the collection of pages not yet supported (such as homepage, search results, channel, and others)._

---
## Related video extracted 
<div id="metadata-graph" class="c3graph"></div>

_We usually expect 20 videos suggested in the right column of YouTube. But if a watcher scroll down more would get more related videos. Also, sometimes we might not load or properly extract the associated videos, and if this happens, it is an error to investigate promptly._

---
### Statistics and OpenData enable network effects, data reuse, and collaborative revision of our project. But they are tricky and can't be released carelessly:

* [Data can't be anonymized](https://www.theguardian.com/technology/2019/jul/23/anonymised-data-never-be-anonymous-enough-study-finds) easily, we aggregate them and we use only non-personal metadata to develop the aggregation.
* We don't want to help in any way [social media intelligence](https://responsibledata.io/social-media-intelligence-the-wayward-child-of-open-source-intelligence/).
* It is in our DNA [to enable researchers](/data-activism), we described our [data usage policies](/what-we-collect).
* The public stats below display how the system is performing, how the people use it (no content-related analysis are here).
