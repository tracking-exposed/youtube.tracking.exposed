---
title: Experiment list
draft: false
layout: page
date: 2021-11-09T08:11:24
---

#### List of Existing experiments [<span style='color:#0b89dd'><i>comparison</i></span> only]
---

<h4 id="#experiment--warning"></h4>

#### Configured experiments (via Guardoni \-\-csv upload)
<ol id="configured--list"></ol>

----
#### Currently active (or not completed because of network/system errors)
<ol id="active--list"></ol>

---- 
#### You might be interesed in seeing how a [comparison based experiment](/experiments/example) looks like; You perform it with [Guardoni](/guardoni).

<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/experiments.js"></script>
<script type="text/javascript" src="/js/generated/taboule.js"></script>
<script type="text/javascript">
  const password = window.location.hash.substr(1);
  if(!password) {
    $("h4")
      .html("<span style='color:red'>Error, password missing in the URL</span>");
  }

  const baseURL = (window.location.origin.match(/localhost/)) ? 'http://localhost:9000/api' : "/api";

  window.Taboule({
    showInput: true,
    node: document.getElementById('configured--list'),
    baseURL,
    query: "getExperimentList",
    pageSize: 25,
    initialParams: {
      type: 'comparison',
      key: password,
    },
  });
</script>
