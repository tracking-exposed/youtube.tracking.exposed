---
title: Experiment list
draft: false
layout: page
date: 2021-11-09T08:11:24
---

### List of Existing experiments _comparison_.


<ol id="experiment--list"></li>

<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/experiments.js"></script>

<script type="text/javascript">

async function render() {
  console.log("Loading experiment list");
  const cont = await reportAllTheExperiments('comparison');
}

render();
</script>
