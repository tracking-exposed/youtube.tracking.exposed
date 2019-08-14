---
title: Statistics & Bar charts
subtitle: adoption trends, system performances, and few lines on open data
type: c3app
date: 2019-08-11T00:00:00
description: Statistics build on what we are collecting; Aggregated information to keep in check our system and our relevance
draft: false
---

Statistics and OpenData enable network effects, data reuse, and collaborative revision of our project. But they are tricky and can't be released carelessly:

* [Data can't be anonymized](https://www.theguardian.com/technology/2019/jul/23/anonymised-data-never-be-anonymous-enough-study-finds) easily, we aggregate them and we use only non-personal metadata to develop the aggregation.
* We don't want to help in any way [social media intelligence](https://responsibledata.io/social-media-intelligence-the-wayward-child-of-open-source-intelligence/).
* Is in our DNA [enable researchers](/data-activism), we described which are our [data usage policies](/what-we-collect).
* The public stats below display how the system is performing how the people use it (no content-related analysis are here).

<!-- the graphs are appended in the 'div'. the ID #impression-graph is referenced in hugo-theme-trex/layouts/c3app/single.html -->
_supporters is the number of people installing the extension. In every day is counted the sum of new comers. There is not a total count yet_
<div id="supporters-graph" class="c3graph"></div>

_related reports the number of suggested videos. Normally we observe 20 related suggestion, but for technical reason we catch a different number. This stats is meant to help us in investigating how the collection is doing._
<div id="related-graph" class="c3graph"></div>

_below a graph on how our parsers are performing: how many HTMLs have been parsed successfully or not_
<div id="processing-graph" class="c3graph"></div>
