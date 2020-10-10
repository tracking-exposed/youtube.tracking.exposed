---
title: "A generic Example"
subtitle: test tool for shadow-ban detection, algorithmic filtering, personalization in searches 
date: 2020-10-02T15:01:21+01:00
draft: false
type: ytSearchCampaign
---


{{<entry
    title="Problem statement — what's CHIARO want to display"
    text="Every person (or, every profile as Google see you) gets different results even when they perform the same research query"
    picture="/images/yt-results/bubble-graph-political.svg"
    type="left" >}}

# CHIARO as a solution

To build a CHIARO, 
you need a list of search terms that belong to a certain topics (e.g. 'Abortion Clinics', or 'Cheper phone'), a name, a description. 

This CHIARO can be edited as markdown on github: [us1.md](https://github.com/tracking-exposed/youtube.tracking.exposed/blob/master/content/chiaro/us1.md). Feel free to copy and create a new list and open a pull request.

To edit the list of allowed query, which you can suggest to friends to:

1. download browser extension
2. access to one or many search query
3. it can be done by different devices
4. you can visualize the different results 
5. we suggest you download the data and perform better analysis than simply *seeing* the differences.

below query list and download button for CSV.

# Technicalities: How a CHIARO page gets generated?

This is a markdown file you can edit in github, and at the bottom there is a portion of the page attacched by javascript. The templating system used is HUGO.

    youtube.tracking.exposed/themes/trex/layouts/ytSearchCampaign/single.html

Which calls

    youtube.tracking.exposed/statis/js/sunnyhack.js

It calls onload the js function 

    getCampaignQueryStats('example');

As argument takes the campaign name, the variable comes from the URL of this page and look for a campaign from this file:  
Behind the scene, an API call to  `/api/v2/queries/<campaignName>`

And this horizontal line is the last written in the markdown, below follows the section attached to each CHIARO.

---