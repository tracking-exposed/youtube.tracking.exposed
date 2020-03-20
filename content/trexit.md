---
title: "YouTube Tracking Exposed: Investigating Brexit polarization" 
subtitle: "Workshop at the Digital Methods Winter School and Data Sprint 2020"
date: 2020-02-22T15:01:21+01:00
draft: false
description: "Winter School workshop's Final Report, extended version"

og_title: "TREXIT - Winter School focus group on youtube+brexit"
og_type: "website"
og_image: "http://youtube.tracking.exposed/yttrex-logo.jpg"
og_url: "https://youtube.tracking.exposed/trexit"
og_description: "A group of researcher using our tool to investigate in personalization algorithm, researched how media in UK polatize around brexit"
---

{{< colorblock text="TREXIT: can we observe UK's news media polarization around Brexit?">}}


##### Nina Altmaier, Davide Beraldo, Maria Castaldo, Daniel Jurg, Salvatore Romano, Matteo Renoldi, Tatiana Smirnova, Natacha Seweryn, Luukas Veivo.

— _students and researchers worked on this research for four days in January 2020_.

--- 

# Abstract

The research used the technology of youtube.tracking.exposed {**yttrex**} to collect evidence of personalization on Youtube session. By creating and controlling new profile, we controlled their behavior to study how gradually and quickly YouTube catch up with the simulated political interest (_leave_ or _remain_), and return content gradually exposed to more personalized content. This analysis is quantitative (counting, for example, diversity of recommended media sources), and qualitative (judge, for example, if the _remain_ profiles actually got content politically aligned to their simulated interest).

We released open data and the methodology might be replicate by other team, using the same topic (if they want to verify our research), or with new topics.

### Key findings

1. There is evidence of progressive polarization of the recommendations around Brexit on YouTube, especially for Leave-inclined users.
2. The Leave/Remain content bubbles, constituted respectively by The Sun/The Telegraph and The Guardian/The Mirror YouTube channels rarely converge.
3. Mainstream media is recommended with greater regularity compared to natively digital channels.

## 1) Introduction 

Over the last few years, the creation of ‘filter-bubbles’ and the issue of algorithmic radicalization has sparked significant controversy within academia and privacy-focused collectives. In this literature, YouTube especially has come under scrutiny. In 2019, [Ribeiro et al.](https://www.google.com/url?q=https://arxiv.org/abs/1908.08313&sa=D&ust=1580319744818000) have sought to computationally verify the ‘anecdotal literature’ on the ‘radicalizing power’ of YouTube ’s Recommendation Systems (RSs). They argued that there is indeed empirical evidence to confirm the hypothesis that users navigate along with YouTube Recommendations. Contrary to this research, at the end of 2019, [Ledwich and Zaitsev](https://arxiv.org/abs/1912.11211&sa=D&ust=1580319744818000) claimed that the hypothesis of YouTube being a platform for algorithmic radicalization to be actually false. Instead, they highlighted how YouTube recommends a more mainstream type content to its users. In other words, blaming the algorithm for creating niche viewing behavior might be incorrect.

The aforementioned articles (and scholars) have also become the center of discussions on Twitter. Prominent journalists Zeynep Tufekci and Kevin Roose, as well as scholars, e.g. Becca Lewis and Arvind Narayan, writing on the topic of YouTube ’s algorithm have questioned the validity of the methods used to study RSs ( [Feuer](https://www.cnbc.com/2019/12/30/critics-slam-youtube-study-showing-no-ties-to-radicalization.html&sa=D&ust=1580319744819000)). The main critique here is methodological, i.e. studies into RSs have relied on YouTube ’s official API, which, arguably, does not give an accurate representation of users’ actual experiences. As Narayan points out: “They (Ledwich and Zaitsev) reached their sweeping conclusion *without logging in…* ” (ibid.). Ribeiro et al. already pointed out that their “analysis does not take into account personalization, which could reveal a completely different picture”. While some scholars have suggested moving away from RSs ([Munger and Phillips](https://osf.io/73jys/)), it is still the case that YouTube’s algorithm accounts for 70 percent of videos watched on the platform ([Newton](https://www.theverge.com/2017/8/30/16222850/youtube-google-brain-algorithm-video-recommendation-personalized-feed&sa=D&ust=1580319744820000)) and, therefore, is worth investigating.

This Winter School project seeks to study algorithmic recommendation from a user perspective in an attempt to move towards post-API research. Specifically, empowered by [youtube.tracking.exposed](https://youtube.tracking.exposed)’s infrastructure, we have been able to highlight filter bubbles visually and statistically as a by-product of polarization dynamics. Taking Brexit as an emblem for a divisive issue, this project aims to map in which way the algorithm guides users through the enormous supply of Brexit videos and how this algorithmic guiding might polarize users interested in the topic coming from divergent political backgrounds.

## 2) Research Questions

   * Do YouTube’s recommendation systems enhance and potentially incentivise users’ polarization on a specific topic?
   * How might users experience Brexit polarization on YouTube?

## 3) Methodology

The aim of this project was to try to understand the inner logic of YouTube ’s recommender algorithm by taking into account the videos recommended to different research personas. Crucially, we made use of the youtube.tracking.exposed tool which allows us - in contrast to YouTube ’s official API - to retrieve data about users’ personalized experience. This is possible as a result of the passive scraping performed by the browser extension on the videos’ pages.

We conducted experiments on two separate topics and refined the methodology after the first experiment. Our initial research was focused on a controversy arising from the French YouTube -sphere concerning the following video ["French actress Adèle Haenel accuses filmmaker of 'sexual harassment"](https://www.youtube.com/watch?v=QFRPci2wK2Y). This was a video that sparked significant debate in France between feminists and more conservative-leaning groups. We performed four different tests, each time retrieving the recommendations given on the aforementioned video through the youtube.tracking.exposed web extension. For all the tests were started with a clean, cookie-free browser as a baseline setting and the “French (France)” language as a default to reduce the influence of system variables.

The video was accessed directly via the URL through a simple copy-paste.
Half of the team accessed the video from a right-leaning website and the other half from a left-leaning website (you can find the precise list of videos in the [Appendix 8.1](https://wiki.digitalmethods.net/Dmi/WinterSchool2020youtube)). 
Half of the group watched five left-leaning videos on the topic. The other half right-leaning videos.
Afterward all accessed the initial video through a copy-paste.
Half of the group watched five left-leaning videos on the topic, while the other half right-leaning videos. Following this, the groups switched videos, watching the videos the other “side” had seen. Afterward all accessed the initial video.

Data was then retrieved for all 4 scenarios to compare the recommendations given on the initial video.

The second experiment was performed on the issue of Brexit. We chose four different British newspapers according to their political stances ([YouGov 2017](https://yougov.co.uk/topics/politics/articles-reports/2017/03/07/how-left-or-right-wing-are-uks-newspapers)). Then, we selected five videos for each of their respective YouTube channels. Again, we divided the team into two sub-groups. Each sub-group performed two tests, always starting from a clean, cookies-free browser with English (UK) as a language setting. Importantly, we also found what we regarded as a non-partisan video on Brexit (see Appendix 8.2) to access after watching the selected videos.

1. Half of the group watched five videos from The Guardian. The other half watched five videos from The Sun. Afterward all accessed the ‘neutral’ video.
2. Half of the group watched five videos from The Mirror. The other half watched five videos from The Telegraph. Afterward all accessed the ‘neutral’ video.

We retrieved the information after each step across all scenarios.

{{< entry 
    title="The different tests designed and realized:" 
    text="1: Methodology for Data Collection " 
    picture="/images/winter_met1.png" 
    type="right" 
>}}


{{< entry 
    text="2: Methodology for analysis of the finding" 
    picture="/images/winter_met2.png" 
    type="left" 
>}}

### 3.2) Dataset
The size and shape of our datasets have been defined by the functioning of the youtube.tracking.exposed web extension. This browser add-on is able to save and store the video that is being watched but also the metadata of the first twenty suggested videos that appear on the right side of the screen.

### 3.3) Qualitative Analysis

In order to ascertain what effect the partisan stance of each of the two ‘research personas’ constructed for the experiment had on the nature of the content recommended by Youtube, a subset of our group carried out qualitative research designed to map out the political position of each recommended channel from each of the scenarios listed above.

To carry out this task, a list of the recommended channels was retrieved from the datasets, after which their individual position on the issue of the Adele Haenel affair and Brexit was determined through a qualitative analysis of their political leanings. This was determined primarily on the basis of both the channels’ own description of themselves, as well as the subject matter and tone of their video content when the former proved less explicit – a method resolved as best in the interests of the limited time allowed for the research project.

For the main experiment concerning polarisation around Brexit, this data also formed the basis of two graphs we created using Tableau. The first was a set of 5 pie graphs conflated into one pane, each showing the absolute number of recommended channels subscribing to one of 4 political positions (Leave, Remain, neutral, or irrelevant) divided according to the type of media they represented (alternative media, government, influencer, mainstream media, other). In addition, to further elucidate the qualitative nature of and possible links between the content bubbles surrounding each of the 4 publications chosen for the experiment, the data we had retrieved was also used to create a word map of the top 10 keywords occurring in the titles of the first 20 recommended videos for each of the main channels.

## 4) Findings 
### 4.1) Video Recommendations

<img alt='a network graph hardly can be described by alternative text' src='/images/ws20/winter_graph_all.png' title='' />

Figure 3: Shared titles within different bubbles

We investigated the number of suggested videos shared by different users. In Figure 3, we aggregated in 4 major nodes the users that have been profilized by watching videos published by the same channel. Smaller nodes represent the video they have been recommended. The graph was generated using only the suggestions received after watching 5 videos coming from the same channel. As we can see, many videos belong to a “bubble”, an evident result of personalization.

Then, we focused on the number of suggested videos shared by Leave users (in yellow in Figure 3), i.e. users trained with videos coming from The Telegraph or The Sun channels, and Remain users (in blue in Figure 3), i.e. users trained with videos coming from The Guardian and The Daily Mirror. We investigated how this quantity changes over time, i.e. as the number of videos used to personalize profiles grows from 1 to 5. The result is a dynamic network graph presented by the following video.

### Evolution of shared suggested videos within different user groups

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ezkh7GqxP-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

As shown by the video (Figure 4), the number of videos suggested to both Remain and Leave users seems to decrease as the personalization goes on. We decided to formally test this result by defining a measure of similarity between clusters as a measure of similarity between the suggestions proposed to Remain and Leave users and to test the availability of statistical evidence of the similarity decrease.

To give a formal definition, let us call <img alt='image1.png' height='14' src='%ATTACHURL%/image1.png' title='image1.png' width='12' /> the set of Leave users and <img alt='image2.png' height='15' src='%ATTACHURL%/image2.png' title='image2.png' width='15' /> the set of Remain users. Let us also call <img alt='image3.png' height='21' src='%ATTACHURL%/image3.png' title='image3.png' width='24' /> the set of videos suggested to user <img alt='image4.png' height='14' src='%ATTACHURL%/image4.png' title='image4.png' width='6' /> at time <img alt='image5.png' height='13' src='%ATTACHURL%/image5.png' title='image5.png' width='10' />For each user <img alt='image6.png' height='17' src='%ATTACHURL%/image6.png' title='image6.png' width='65' />, we define a measure <img alt='image7.png' height='17' src='%ATTACHURL%/image7.png' title='image7.png' width='18' /> of similarity between clusters as follows:

<img alt='image8.png' height='47' src='%ATTACHURL%/image8.png' title='image8.png' width='256' />

<img alt='image9.png' height='47' src='%ATTACHURL%/image9.png' title='image9.png' width='256' />

where

<img alt='image16.png' height='100' src='%ATTACHURL%/image16.png' title='image16.png' width='300' />

Once defined this measure and evaluated the two samples at time <img alt='image10.png' height='14' src='%ATTACHURL%/image10.png' title='image10.png' width='39' />and <img alt='image11.png' height='14' src='%ATTACHURL%/image11.png' title='image11.png' width='34' /> we can investigate the difference in means within the two samples and run a t test using R.

The output of such a test is displayed below:

mean of <img alt='image12.png' height='18' src='%ATTACHURL%/image12.png' title='image12.png' width='19' /> = 30%

mean of <img alt='image13.png' height='18' src='%ATTACHURL%/image13.png' title='image13.png' width='20' /> = 18%

<img align='middle' alt='image22.png' height='163' src='%ATTACHURL%/image22.png' title='image22.png' width='551' />

Figure 5: R code of t test execution

Such a low p-value, noticeable in Figure 5, stands for statistical evidence of the difference within the two means to be significant. Therefore, we can state that the similarity of suggestions between the Remain and Leave users decreases over time and that it is already significant after a personalization built on watching just five videos.

<h2 id='h.6ysyl2nnml0d'>4.2 Channel Recommendations</h2> <h1 id='h.ezrtv8ocszkl'><img alt='image14.png' height='400' src='%ATTACHURL%/image14.png' title='image14.png' width='750' /></h1>

Figure 6: Comparing Channel Recommendations, after one visualization (left-side) and five visualizations (right-side)

In section 4.1 we investigated the relation between the videos suggested to different kind of users by looking at the channels the videos belonged to. In Figure 6, on the left, we can see the network of suggestions proposed to users that watched a single video coming from either The Telegraph, The Sun, The Guardian or The Daily Mirror. On the right part of the same picture we visualize how the structure of the network changed after users watching five videos each. As we can see from the plots, once again, the number of channels suggested to both Remain and Leave users decreases with time, i.e. as a result of the personalization increase.

[[https://www.google.com/url?q=https://www.youtube.com/watch?v%3D6v6Go1TfJyk%26feature%3Dyoutu.be&sa=D&ust=1580319744836000][Video 2]]: evolution of channel recommendations after one to five views

The aforementioned dynamics can be clearly noticed in Video 2.

<h2 id='h.l3790lcw76j6'>4.3 Qualitative Analyses of Brexit Recommendations</h2>

Two kinds of qualitative analyses have been performed: (1) a categorization of the recommended channels and (2) a word association of the recommended video titles.

First, in order to see what type of channels were recommended and how they were positioned on Brexit we performed a close-reading of the channels to get a sense of their content and possible stand.

<img alt='image21.png' height='350' src='%ATTACHURL%/image21.png' title='image21.png' width='1000' />

Figure 7: Categorization of Recommended Channels

Figure 7 highlights that, contrary to earlier research on YouTube, where audiences are argued to be led to more fringe or niche content, we found that, when departing from mainstream outlets, users would be recommended more mainstream channels albeit mostly the same mainstream channels. There were some influencers, but these were not specifically ‘alternative political influencers’ that exploit the political potential of the platform to circumvent mainstream narrative reported by traditional news outlets, as has been argued by [[https://www.google.com/url?q=https://datasociety.net/output/alternative-influence/&sa=D&ust=1580319744838000][Rebecca Lewis]]. Moreover, ‘alternative media’ in our analysis refers to natively digital content (Rogers 5), i.e. outlets that were ‘born on the web’ rather than, as the outlets with which we began, migrated to the web. While Figure 7 does not distinguish unique channels, it does show that in general pro-Brexit positioning allows for more recommendations on YouTube. Finally, we also found some that we re ‘irrelevant’, i.e. channels without distinct political stance or content.

Second, in order to get a sense of the actual impact of polarization on YouTube in relation to Brexit, we extracted all the titles of the recommended videos per news source, i.e. The Mirror, The Telegraph, The Guardian and The Sun. Video titles are an important factor in getting a video recommended to users and nudging them into clicking and watching the content. Comparing video titles the refore says something about how these news sources, in relation to the algorithm, address audience concerns. Figure 8 highlights the association of words in the recommended video titles in relation to the various outlets.

<img alt='image20.png' height='500' src='%ATTACHURL%/image20.png' title='image20.png' width='750' />

Figure 8: Network of Common Keywords by Publication

Figure 8 shows that audiences of The Guardian will be recommended more ‘explanatory’ videos and ‘documentaries’. The Sun audiences get recommendations mostly of Nigel Farage addressing members of the European Parliament and, considering the timing of our research, the controversy surrounding the Duke and Duchess of Sussex Meghan and Harry. Counter to the findings of video and channel recommendations, where The Guardian and The Mirror shared more in common, the difference in non-shared videos reveals that audiences actually get different topics recommended. Videos recommended to The Mirror’s audience address Labour Party Leader Jeremy Corbyn as well as more specific videos about farms and dairy. The centrality of The Telegraph shows that audiences get recommended videos of topics that all other channels also touch on.
---
<h1 id='h.bbo8cvuldw5k'> </h1> <h1 id='h.wfo8748bti44'>5. Discussion</h1>

The experiments carried out by our group suggest that there is some evidence of progressive polarisation on Youtube, particularly around the already controversial subject of Brexit, although this is more prominent on the side of Leave users.

The analyses of title recommendations also show that, in the frame of our smaller investigation, channels might share recommended videos, but that their individual recommendations largely broach distinctly different topics. T hus, the ‘content bubbles’ created by the recommender algorithm around Leave and Remain users rarely converge.

Significantly, our findings also show that, despite clear evidence of slight polarisation around political issues, contrary to assumptions that frequently underpin claims about Youtube’s ‘radicalising’ effect, videos by mainstream media outlets were recommended with far greater regularity compared to those produced by native digital channels (such as alt-right influencers). What this suggests is that although the recommender algorithm seems to favour videos with clear partisan leanings, it does not inevitably lead users towards the most radical or inflammatory content.

<h1 id='h.hgrfuzax8xmp'>7. Conclusion</h1>

[[https://www.google.com/url?q=https://wiki.digitalmethods.net/Dmi/SummerSchool2019AlgorithmsExposed&sa=D&ust=1580319744843000][Previous research]] at the DMI Summer School has shown that personalization happens just when the users watch the entirety of the video. For this reason, we had to limit the videos chosen to five and also select videos that won’t be too long - we decided to have seven minutes as the maximum length. Clearly, further research which will take into account a more in-depth personalization i.e. watching more videos and longer videos would be beneficial in illustrating this phenomena. To avoid unnecessary laborious human-curated work, we would recommend the development and use of bots for this task. These could also help in generating a larger dataset compared to the relatively small one that we were able to create in the Winter School session. Crucially, youtube.tracking.exposed, as well as the other tracking.exposed tools are still under development.

As with all projects, our experiments also held certain limitations that future research into the subject should acknowledge. Importantly, we did not look at the Youtube ‘home screen’ that offers users a separate collection of recommended videos when opening the webpage, and consider the effect the research personas created had on these recommendations - a strategy recommended by Arvind Narayan ([[https://www.google.com/url?q=https://www.cnbc.com/2019/12/30/critics-slam-youtube-study-showing-no-ties-to-radicalization.html&sa=D&ust=1580319744844000][Feuer]]). In addition, the sets of five videos chosen for both experiments, decided in partially in the interests of expediency as mentioned above, were not as uniform in age and tone as one might hope for optimal results. These pragmatic constraints had a slight detrimental effect for some of our results such as the Common Keywords graph, the relatively important amount of ‘irrelevant’ and ‘off-topic’ recommended videos obscuring some of the conclusions that could be drawn. A more precisely curated set of videos might thus have avoided some of these issues (which cropped up particularly strongly around the Mirror), and produced somewhat more refined datasets. Finally, taking up Rogers suggestions after presenting this report at the DMI Winterschool, we feel it can be beneficial to ‘confuse’ the algorithm by watching videos that would be ‘meant’ for opposing audiences in order to assess a ‘bias’ within the algorithm.

In light of these conclusions, it is clear that the Youtube recommender algorithm certainly has subtle polarising effect on the content it proposes to users, yet this phenomenon is a more nuanced and complex one than is often claimed by straightforward accounts of Youtube radicalisation. Thus, future research aimed at appreciating this process in greater detail might focus particularly on some of the concerns that our project missed, such as the recommendations suggested by the ‘home screen’, and with the help of larger datasets produce more lucid and illuminating accounts of the impact of the recommender algorithm on Youtube user experience.
---
<h1 id='h.uswdzxcw4jyl'> </h1> <h1 id='h.adqxlyg5w44m'>7. References</h1>

Ledwich, Mark, and Anna Zaitsev. “Algorithmic Extremism: Examining YouTube 's Rabbit Hole of Radicalization.” arXiv preprint arXiv:1912.11211v1 (Submitted 24 December 2019).

Lewis, Rebecca. “Alternative Influence: Broadcasting the Reactionary Right on YouTube.” Data Media Manipulation. Data & Society (2018). 1 November 2019. &lt;https://datasociety.net/wpcontent/uploads/2018/09/DS_Alternative_Influence.pdf&gt;.

Munger, Kevin, and Joseph Phillips. "A Supply and Demand Framework for YouTube Politics." OSF (2019). 4 November 2019. &lt;[[https://www.google.com/url?q=https://osf.io/73jys/&sa=D&ust=1580319744845000][https://osf.io/73jys/]]&gt;.

Tufekci, Zeynep. “YouTube, the Great Radicalizer.” The New York Times. 10 March 2018. 1 November 2019. &lt;https://www.nytimes.com/2018/03/10/opinion/sunday/youtube-politicsradical.html&gt;.

Ribeiro, Manoel Horta, et al. "Auditing radicalization pathways on YouTube." arXiv preprint arXiv:1908.08313 (2019).

Rogers, Richard. Digital Methods. Cambridge, Massachusetts: The MIT Press, 2013.

Feuer, William. “Critics Slam Study Claiming YouTube ’s Algorithm Doesn’t Lead to Radicalization.” CNBC. 30 December 2019. 20 Januari 2020. [[https://www.google.com/url?q=https://www.cnbc.com/2019/12/30/critics-slam-youtube-study-showing-no-ties-to-radicalization.html&sa=D&ust=1580319744846000][https://www.cnbc.com/2019/12/30/critics-slam-youtube-study-showing-no-ties-to-radicalization.html]].

Newton, Casey. “How YouTube Perfected the Feed.” The Verge. 30 August 2017.[[https://www.google.com/url?q=https://www.theverge.com/2017/8/30/16222850/youtube-google-brain-algorithm-video-recommendation-personalized-feed&sa=D&ust=1580319744846000][ ]]20 Januari 2020. [[https://www.google.com/url?q=https://www.theverge.com/2017/8/30/16222850/youtube-google-brain-algorithm-video-recommendation-personalized-feed&sa=D&ust=1580319744847000][https://www.theverge.com/2017/8/30/16222850/youtube-google-brain-algorithm-video-recommendation-personalized-feed]].

Matthew Smith. “How left or right-wing are the UK’s newspapers. YouGov. 7 March 2017

https://yougov.co.uk/topics/politics/articles-reports/2017/03/07/how-left-or-right-wing-are-uks-newspapers

## Appendix

we don't provide appendix: TODO the link on DMI

