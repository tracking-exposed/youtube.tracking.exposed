---
title: Experiment renderer
draft: false
layout: page
date: 2021-11-09T08:11:24
---

#### Experiment can be accessed once you execute Guardoni, follow the [example](/experiments/example); they are build by using [Guardoni](/guardoni).

---

<h4 id="error"></h4>
<h4 id="experinfo"></h4>

<!-- 
<div hidden id="protoclone">
  <h3 class="videoName">videoname-filler-replaced-by-js</h3>
  <svg id="svg--" width="960" height="600"></svg>
  <p id="title--"></p>
  <div id="pie--"></div>
</div>
<div id="fuffa"></div>
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
-->

<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/experiments.js"></script>

<script type="text/javascript">

async function code(exname) {
  await comparisonRender(exname);
}

const exname = window.location.hash.substr(1);
if(!exname) {
  $("#error").html("<span style='color:red'>Error, not found an experimentId in the URL</span>");
  return;
}

if(!exname.length) {
  $("#error").html(`Experiment name is missing in the request`);
  return false;
}

code(exname);

</script>
