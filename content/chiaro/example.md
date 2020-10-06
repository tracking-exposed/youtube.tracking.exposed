---
title: "A generic Example"
subtitle: test tool for shadow-ban detection, algorithmic filtering, personalization in searches 
date: 2020-10-02T15:01:21+01:00
draft: false
type: ytSearchCampaign
---

# CHIARO is a list of search queries,

---

### To build a CHIARO, you need a list of search terms, a name, a description, and a place where you can be reachable to discussion. I github issue is the simplest also because you've to push some changes or talk with us.

{{<colorblock text="Each person gots different results! Collaboratively we can show what happen">}} 

## (An experiment among the many)
## you can build the next one

This CHIARO can be edited as markdown on github: [us1.md](https://github.com/tracking-exposed/youtube.tracking.exposed/blob/master/content/chiaro/us1.md). Feel free to copy and create a new list and open a pull request.

To edit the list of allowed query, which you can suggest to friends to:

1. download browser extension
2. access to one or many search query
3. it can be done by different devices

below query list and download button for CSV.

# How this is generated?

    youtube.tracking.exposed/themes/trex/layouts/ytSearchCampaign/single.html

Which calls

    youtube.tracking.exposed/statis/js/sunnyhack.js

It calls onload the js function 

    getCampaignQueryStats('example');

As argument takes the campaign name, the variable comes from the URL of this page and look for a campaign from this file:  
Behind the scene, an API call to  `/api/v2/queries/<campaignName>`

And this horizontal line is the last written in the markdown, below follows the section attached to each CHIARO.

---