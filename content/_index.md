---
title: YouTube Tracking Exposed
date: 2019-05-22T15:01:21+01:00
draft: false
layout: home
---

# Project analysis and roadmap

youtube.tracking.exposed takes its inspiration, methods, experience, and code from [facebook.tracking.exposed](https://facebook.tracking.exposed). This project is motivated by and refers to the [tracking.exposed](https://tracking.exposed) manifesto; the goal is to create free (libre) software, support a community of analysts and developers, and enable critical analysis of monopolist platforms.

### How this technology works

* We do not rely on APIs because they can be blocked or limited by the platform, but instead rely on crowdsourced, voluntarily disclosed data.
* We enable individuals to understand how personalisation affects them, with the aim of mainstreaming the debate around algorithms. We want people to actively engage in the research process.
* We don't (and shouldn't) rely on an individual point of observation to run tests. This is the approach used by [algotransparency.org](https://algotransparency.org), but we should acknowledge two of their important achievements:
    *   The simplicity of their communication. Despite the fact that the issue of algorithms is personalisation, it is already an achievement to display the existance and impact of algorithms, especially to show how delicate topics, such as health, science, and politics, might suffer from these hidden logic because they can be exploited by disinformant.
    *   Their visualisation is something we should learn from.
      

### How data are being used here

This is a method to **collect evidence about personalisation algorithms.**It is necessary to remind this, because our investigation subject is not on the yotubers, but on YouTube. With this evidence it is possible, for example:

1.  Individuals themselves, to understand how their experience is curated by the platform.  
*By clicking on the browser extension, the adopter would reach their personal collection of videos*
2.  People using our tools and analytics. To this end, a simple dashboard would be developed on top of a documented API, in order to enable other free software developers to extend the AGPL technology.  
*Check the 'play with data' section, it points at three basic functionalities*
3.  Let communities play with this  
*a consumer of youtube video might want to mark their contribution as belonging to a certain channel or community. This would help communities to better understand themselves and how algorithms impacts them.*
4.  Researchers (everyone is a researcher for us, just, they have raw data) might wants to explore in details the data. This project is inspired by the concept of ["European Data Commons"](https://diem25.org/wp-content/uploads/2019/03/Technological-Sovereignty-Green-Paper-No-3.pdf) (section 2.2.2), as long as we can ensure they are analyzing phenomenon and not individual behaviors.  
*we can achived this with anonymization and aggregation, but get in touch at -support at tracking dot exposed-*
      

### Approach

This method includes asking the individual to install a web-extension, and we should be as clear as possible on how their data would be processed. Despite not including personal data, the sequence of videos seen by an individual might permit us to attribute behavioural information; therefore, we should manage the dataset with the level of protection required by GDPR. This implies:

1.  think to our adopters as *people* and not as *users* =) 
2.  A clear opt-in, which is revocable and accessible.
3.  A customizable data retention policy.
4.  Full transparency on the data processed and stored (it is free software, but we should describe it before a person join thep project).
5.  Data protection impact assessment?
6.  A way to notify individuals in case of a data breach (which is weird because contributors are anonymous to us, but we might send a message using the browser extension).
      

### Data Pipelines, Collection and Transformation

The technology consists of a pipeline for data collection. Individual contributors have full access to and control over the data they send to us, and to any data attributed, inferred or associated with their contributions. The pipeline has different stages, which serve these functions:
      
1.  Pre-requisite: an individual must install the browser extension, its current name on Firefox and Chrome Store, is yttrex, and you can install the alpha version from https://youtube.tracking.exposed.
2.  Collector: the submission is validated as specific to the individual. This process uses a cryptographically secure vector which ensures a collection associated with an individual can't be mixed with submissions made by another individual. 
3.  Parser: a process that reads the submission and extracts metadata from the given page. These data are served into the database and represent the raw input for our analysis. The parser creates an entry in the database collection named 'videos'
      
The pipeline parses the collected videos, and attributes metadata. They have some differences based on the kind of page acquired (different URL schema normally imply a different kind of page):

* Home: shows the region from which the individual is accessing youtube, and contains a list of suggested videos.
* Watch: it's an individual video page, which contains the metadata of the video at a specific moment, along with related videos selected for the individual. The metadata extracted includes the number of likes/dislikes, the number of views, comments, description, title, and author. 
* Search: displays results from a search query.
* Channel: records what is displayed when a channel page is opened.
      
Along with the metadata extracted from the page, there is some technical metadata generated by the recording system:

* The geographic location attributed to the IP address
* A pseudorandom identifier which links the contribution to the web-extension (and this is usually linkable to the individual). This is PII, and the use of this metadata might result in sensitive data, if not properly redacted/aggregated.  This data is also necessary to identify the legitimate owner of the data and let them exert their rights and authorise complete access.
* A timestamp of when the data was saved.
* Optional metadata as decided by the adopter (for self-tagging the contributions, for example).

These data represent the unique picture of what YouTube suggested to the individual in a specific timeframe.

### Roadmap

1. ☑  Have a browser extension capable of copying the YouTube pages: it is implemented. We need help in providing better screenshots for [Chrome store,](https://chrome.google.com/webstore/detail/yttrex/kbbgjcgdcibilpahljnlejefcehbljnd)and [Firefox store](https://addons.mozilla.org/en-US/firefox/addon/yttrex/). If you are a web-extension developer. [check the README on github](https://github.com/tracking-exposed/yttrex).
2. ☐  Implement a decent statistics collection system 
3. ☑  Release a simple API without any interface, to let researchers and developers experiment with the tool
4. ☐  Develop an interface which permits an individual to delete their submission and control data retention policy
5. ☑  Develop functionalities to let adopters play and compare their results.
6. ☐  Develop the [author ](/author)page, to let people compare video selecting by their chosen source.
      
### Research

The release of stage 3 of the roadmap above would be enough to start research. We aim to keep methodology separate from technology. A researcher might, for example, address questions such as:

* If the same video is seen at the same time from two Google accounts, how many of the suggested videos are the same?
* If the same video is seen at the same time from two browsers without any cookies, from a clean browser, and from the same IP address, how many of the suggested videos are the same?
* and keep playing with these variables! the qualitative analysis (the video content and the judgment on it, if any) is left to the researcher, but with ytTREX they can record and compare how the algorithm is interacting.
      

In this comparative analysis, the researcher can start to figure out how the algorithm displays different suggestions.

### Outreach

1. Talk to the content producers (*"When I'm grow-up I want to be a youtuber!*): they are one of the first large category in the world which is vocal, it is sensible about algorithm discrimination (demonetization, unlisting, automated+human take down)
2. YouTubers are trying to deduct the effect of algorithm, We can offer a tool which YouTubers may have an interest in promoting among their audiences. There is a list of functionalities meant for communities, and others meant for researchers.
3. The website is a technical reference, is meant to describe technology. If the interest arise, other website might use our data and do their own analysis and communication.
