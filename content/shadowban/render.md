---
title: Shadowban measurement
subtitle: A prototypal concept to measure how Youtube "reduce the reach" of specific videos
draft: false
layout: page
date: 2021-11-09T08:11:24
---

<h4 id="error"></h4>

<h4>Shadowban experiment report</h4>

<div id="report"></div>

---
#### Shadowban experiment can be selected from the [list](/shadowban/list), and created by using [Guardoni](/guardoni).

<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/experiments.js"></script>

<script type="text/javascript">

async function code(exname) {
  if(!exname) {
    $("h4").html(`<span style='color:red'>Error, not found an experimentId in the URL</span>`);
  } else if(!exname.length) {
    $("h4").html(`Experiment name is missing in the request`);
  }
  await chiaroScuroRender(exname);
}

code(window.location.hash.substr(1));

</script>