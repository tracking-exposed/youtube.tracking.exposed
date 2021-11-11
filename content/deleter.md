---
title: Emergency content deleter
subtitle: This page is usable only by admin for special management
date: 2021-07-22T15:01:21+01:00
draft: false
---

<input type="password" id="password" />
<label>Admin password</label>

<input type="text" id="targetId" />
<label>Target ID</label>

<input type="text" id="collection" />
<label>Collection</label>

<input type="text" id="keyname" />
<label>Key name</label>

<button type="button" id="submit">Delete!</button>

<hr />
<div id="results"></div>

<script type="text/javascript" src="/js/global.js"></script>
<script type="text/javascript" src="/js/monitor.js"></script>

<script type="text/javascript">

  $("#submit").click(performDelete);

</script>
