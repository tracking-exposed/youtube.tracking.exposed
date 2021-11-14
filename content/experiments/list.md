---
title: Experiment list
draft: false
layout: page
date: 2021-11-09T08:11:24
---

#### List of Existing experiments [only <span style='color:#0b89dd'><i>comparison</i></span>]
---

<h4 id="#experiment--warning"></h4>

#### Configured experiments (via Guardoni --csv upload)
<ol id="configured--list"></ol>

----
#### Currently active (or not completed because of network/system errors)
<ol id="active--list"></ol>

<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/experiments.js"></script>
<script type="text/javascript">
  async function render() {
    await reportAllTheExperiments('comparison');
  }
  render();
</script>
