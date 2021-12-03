---
title: Shadowban detector analysis toolkit
draft: false
layout: page
date: 2021-11-18T08:11:24
---

#### List of configured shadowban measurements
---

<h4 id="#experiment--warning"></h4>

#### Configured experiments (via Guardoni with options \-\-csv \-\-shadowban)
<ol id="configured--list"></ol>

----
#### Currently active (or not completed because of network/system errors)
<ol id="active--list"></ol>

<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/experiments.js"></script>
<script type="text/javascript">
  async function display() {
    const data = await reportAllTheExperiments('chiaroscuro');
    console.log(data);
  }
  display();
</script>
