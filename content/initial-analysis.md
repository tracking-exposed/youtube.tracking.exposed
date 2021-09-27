---
title: Initial project analysis
subtitle: February 2019
date: 2019-05-20T15:01:21+01:00
draft: false
layout: page

og_title: "ytTREX - project pitch"
og_type: "website"
og_image: "http://youtube.tracking.exposed/yttrex-logo.jpg"
og_url: "https://youtube.tracking.exposed/initial-analysis"
og_description: "The way you design a test impact the final result: we develop an user-centric, algorithm analysis, approach"
---

youtube.tracking.exposed takes its inspiration, methods, experience, and code from [facebook.tracking.exposed](https://facebook.tracking.exposed). This project is motivated by and refers to the [tracking.exposed](https://tracking.exposed) manifesto; the goal is to create [free (libre) software](https://github.com/tracking-exposed/yttrex), support a community of analysts and developers, and enable critical analysis of monopolist platforms.

### How this technology works

* We do not rely on YouTube APIs because they can be blocked or limited by the platform, but instead rely on crowdsourced, voluntarily disclosed data.
* We enable individuals to understand how personalisation affects them, with the aim of mainstreaming the debate around algorithms. We want people to actively engage in the research process.
* We don't (and shouldn't) rely on an individual point of observation to run tests.
* We are different from great project such as [algotransparency.org](https://algotransparency.org) and [YouTube advertises big brands alongside fake cancer cure videos](https://www.bbc.com/news/blogs-trending-49483681). They are both great and helpful in talking about algorithm impact, but we don't rely on a single point of observation.

### What can we do with this data, and who are "we" ?

With the browser extension *ytTREX*, you **collect evidence on how YouTube is treating your individual profile**. Full stop. Nothing about algorithm, yet.
The session YouTube provides to the watcher is personalized, and with these data, you and your friends can, for example:

1. Individuals themselves can understand how their experience is curated by the platform.  
*By clicking on the browser extension, the adopter would reach their personal collection of videos*
2. People using our tools and analytics. To this end, a simple dashboard would be developed on top of a documented API, and enable other free software developers in extending our [AGPL technology](https://github.com/tracking-exposed/yttrex/).
*Check the 'play with data' section, it points at three basic functionalities*
3. Let communities play with this  
*a consumer of Youtube video might want to mark their contribution as belonging to a certain channel or community. This would help communities to better understand themselves and how algorithms impacts them.*
4. Researchers (everyone is a researcher for us, they just have raw data) might want to explore in details the data. This project is inspired by the concept of ["European Data Commons"](https://diem25.org/wp-content/uploads/2019/03/Technological-Sovereignty-Green-Paper-No-3.pdf) (section 2.2.2), as long as we can ensure they are analyzing phenomenon and not individual behaviors.  
*we can achieve this with anonymization and aggregation, but get in touch at -support at tracking dot exposed-*

### Approach

This method includes asking individuals to install a web-extension, and we should be as clear as possible about how their data would be processed. Despite not including personal data, the sequence of videos seen by an individual might permit us to attribute behavioral information; therefore, we should manage the dataset with the level of protection required by GDPR. This implies:

1. Thinking about our adopters as *people* and not as *users* =)
2. A clear opt-in, which is revocable and accessible.
3. A customizable data retention policy.
4. Full transparency on the data processed and stored (it is free software, but we should describe it before a person joins the project).
5. Data protection impact assessment?
6. A way to notify individuals in case of a data breach (which is weird because contributors are anonymous to us, but we might send a message using the browser extension).

{{< yt-extension >}}

### Data Pipelines, Collection and Transformation

The technology consists of a pipeline for data collection. Individual contributors have full access to and control over the data they send to us, and to any data attributed, inferred or associated with their contributions. The pipeline has different stages, which serve these functions:

1.  **Requirements**: an individual should have the browser extension installed. We are currently in beta version, and it is not linked to any of your existing Google profiles. It works through the browser: you should configure, in the panel, what your name or pseudonymous is (and you can change it with whatever you want).
2.  **The Collector**: the submission is validated as specific to the individual. This process uses a cryptographically secure vector which ensures a collection associated with an individual can't be mixed with submissions made by another individual.
3.  **The Parser**: a process that reads the submission and extracts metadata from the given page. These data are served into the database and represent the raw input for our analysis. The parser creates an entry in the database collection named 'videos'
4. **The API**: the interfaces meant for data analysts and for the browser interface you'll see in this website, to retrieve data in machine readable format (CSV or JSON).

The pipeline parses the collected videos, and attributes metadata. They have some differences based on the kind of page acquired (different URL schema normally imply a different kind of page):

* Home: shows the region from which the individual is accessing YouTube, and contains a list of suggested videos.
* Watch: it's an individual video page, which contains the metadata of the video at a specific moment, along with related videos selected for the individual. The metadata extracted includes the number of likes/dislikes, the number of views, comments, description, title, and author.
* Search: displays results from a search query.
* Channel: records what is displayed when a channel page is opened.

We will begin in *parsing* only the 'Watch' pages.

#### Along with the metadata extracted from the page, there is some technical metadata generated by the recording system:

* The geographic location attributed to the IP address
* A pseudorandom identifier which links the contribution to the web-extension (and this is usually linkable to the individual). This is PII, and the use of this metadata might result in sensitive data, if not properly redacted/aggregated. This data is also necessary to identify the legitimate owner of the data and let them exert their rights and authorize complete access.
* A timestamp of when the data was saved.
* Optional metadata as decided by the adopter (for self-tagging the contributions, for example).

These data represent the unique picture of what YouTube suggested to the individual in a specific timeframe.

### Research questions?

The release of stage 3 of the roadmap above would be enough to start research. We aim to keep methodology separate from technology. A researcher might, for example, address questions such as:

* If the same video is seen at the same time by two Google accounts, how many of the suggested videos are the same?
* If the same video is seen at the same time by two browsers without any cookie, from a clean browser, and from the same IP address, how many of the suggested videos are the same?
* and keep playing with these variables! The qualitative analysis (the video content and the judgment on it, if any) is left to the researcher, but with ytTREX they can record and compare how the algorithm is interacting.


In this comparative analysis, the researcher can start to figure out how the algorithm displays different suggestions.

### Outreach

1. Talk to the content producers - *"When I grow up I'll be a youtuber!* - they are one of the first large categories in the world which is vocal, and sensitive about algorithm discrimination (demonetization, unlisting, automated+human take down).
2. YouTubers are trying to deduct the effect of algorithm. We can offer a tool which YouTubers may have an interest in promoting among their audiences. There is a list of functionalities meant for communities, and others meant for researchers.
3. The website is a technical reference, it is meant to describe technology. If interest grows, other websites might use our data and do their own analysis and communication.
