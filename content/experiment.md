---
title: Experiment report
draft: false
layout: page
date: 2021-04-29T18:11:24+02:00
---

#### List of Existing experiments:

<ul id="experiment--list"></ul>
<p id="experiment--warning"></p>

---
<h4 id="error"></h4>
<h4 id="experinfo"></h4>

<div hidden id="protoclone">
  <h3 class="videoName">videoname-filler-replaced-by-js</h3>
  <svg id="svg--" width="960" height="600"></svg>
  <p id="title--"></p>
  <div id="pie--"></div>
</div>
<div id="fuffa"></div>

---

improve this visualization by looking at this HTML or the JS.

<style>
  .videoName {
    background-color: #fff6f6;
    font-variant-caps: all-small-caps;
    padding-left: 10px;
  }
  .links line {
    stroke: #999;
    stroke-opacity: 0.6;
  }
  .nodes circle {
    stroke: #fff;
    stroke-width: 1.5px;
  }
</style>
<link href="/css/c3.min.css" rel="stylesheet">
<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="https://d3js.org/d3.v4.min.js"></script>
<script type="text/javascript" src="/js/c3.min.js"></script>
<script type="text/javascript" src="/js/experiments.js"></script>

<script type="text/javascript">

async function code() {
  const cont = await reportAllTheExperiments();
  if(cont)
    await experimentGradualRender();
}

code();
</script>