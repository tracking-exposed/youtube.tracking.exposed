---
title: What We Collect
subtitle: and how ytTREX works
draft: false
---

## What the browser extension does

1. It creates cryptographic key pairs. It is the method to ensure you can access your data, and only you can mark the data received as “yours.” It is necessary because we don’t have an email address, Google profile, or YouTube username. Your official identification method is not linked to our data at all. This work for every human or bot opening youtube.com website. Every browser extension installed has a different and unique cryptographic key.

2. It copies the HTML of every youtube.com video page once YouTube has completed to send the suggested videos. The HTML is sent to the tracking.exposed server, hosted in Germany and administrated by the [tech leader of our group](/about).

**Technical detail**: the extension cryptographically signs the HTML you send, with your public key. We differentiate *supporters* through the public key they are using, and you can create a new key, download, or import a key when you want.

## Which data we receive and save

1. From the submission: we use the public key to verify the existence of the profile and validate the signature. We keep the exact time, the URL of the video watched, and the HTML. This data goes in a collection named 'videos'.
2. From videos: we pick all the HTML and extract metadata, using [parser implemented in nodejs](https://github.com/tracking-exposed/yttrex/blob/master/backend/parsers/video.js). It derives the following list of metadata. The data goes in a collection named 'metadata.'
3. **YES**: You have full control of your entries in the 'videos' and 'metadata' collection.

### How a 'metadata' entry looks like

There is one entry for each submission received by the supporters

<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Example</td>
            <td>Notes</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>e1895eed23ffcb8a0b5d1221c28a712b379886fe</td>
            <td>the unique identified of the evidence: every observation has a different ID</td>
        </tr>
        <tr>
            <td>title</td>
            <td>Salmo - 90MIN (Official Live Performance) | Vevo X</td>
            <td>the title of the video: in certain condition the same video might display a different title, for example, it can looks translated</td>
        </tr>
        <tr>
            <td>videoId</td>
            <td>U7OarstN2GU</td>
            <td>This is the youtube VideoId, if you compose the url https://youtube.com/watch?v=<i>$videoId</i>, it will display the video. This videoId is unique in Youtube platform.</td>
        </tr>
        <tr>
            <td>authorName</td>
            <td>Confused Bi-Product of a Misinformed Culture</td>
            <td>The name of the author as YouTube display it</td>
        </tr>
        <tr>
            <td>authorChannel</td>
            <td>/channel/UCSsz5GO1rQjzp1RND7QtEjg</td>
            <td>The unique ID of the content producer: by looking at htts://youtube.com/<i>$authorChannel</i> you'll see the producer page</td>
        </tr>
        <tr>
            <td>savingTime</td>
            <td>2019-08-01 22:46:41.355Z</td>
            <td>The date when the evidence was collected</td>
        </tr>
        <tr>
            <td>RelatedN</td>
            <td>20</td>
            <td>The number of related video recorded</td>
        </tr>
        <tr>
            <td>watcher</td>
            <td>caramel-macaroon-succotash</td>
            <td>This is a pseudonym assigned to every broswer submitting data. This is linked to the authentication material, and therefore <b>this is a personal data</b>.</td>
        </tr>
        <tr>
            <td>Related</td>
            <td>[ is a list ]</td>
            <td>A list of related videos. The size of this list is the number in the field RelatedN. See below the details</td>
        </tr>
    </tbody>
</table>

Each related video has a different data structure. This list of related is part of the evidence. We use _related_ and _suggested_ as synonyms. We are talking about the videos display on the right column of YouTube interface.

<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Example</td>
            <td>Notes</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Index</td>
            <td>1</td>
            <td>Order of the related video. This counter start from 1, and we can't guarantee all the videos have the same amount of related videos. (also called <i>suggestionOrder</i>)</td>
        </tr>
        <tr>
            <td>Title</td>
            <td>Platero y Tú - Vamos tirando (1993) (Álbum completo)</td>
            <td>The name of the suggested video</td>
        </tr>
        <tr>
            <td>Verified</td>
            <td>false</td>
            <td>true or false, is the presence of the verified marker next ✔ to the channel name</td>
        </tr>
        <tr>
            <td>foryou</td>
            <td>true</td>
            <td>This field take value true or false if the video related was explicitly 'recommended for you'</td>
        </tr>
        <tr>
            <td>source</td>
            <td>Kirstin Leticia</td>
            <td>The display name of the channel owning the recommended video</td>
        </tr>
        <tr>
            <td>displayTime</td>
            <td>03:14</td>
            <td>Video length, as declared in the preview</td>
        </tr>
    </tbody>
</table>


## What is a personal data in this regards

What is linkable to an individual activity is personal data. In our regards, two metadata should deserve special attention and protection: the **watcher pseudonym**, and the **sequence of videos seen by the same watcher**.

1. By 'watcher' it is meant a sequence of three random food names. They are assigned when the adopter opts-in. For example *pizza-broccoli-tangelo* is a legitimate watcher name. The 'watcher' is the person using the extension, who has to opt-in to this term of data processing. This person, in regards of our GDPR compliance, is a [data subject](https://eugdprcompliant.com/what-is-data-subject/).
2. The data subjects can exert their rights in two ways:
  * With the browser extension they can access to their personal profile, where they can fully control the data
  * By downloading the key, they can ask us to intervene in deleting their data. Having the key is the only authentication measure you use to the system. The public key is the only secret we can demand to you in order to identify you properly.
3. The watcher pseudonym is **not guaranteed to be unique**. In the system, another person with the same pseudonym might exist. Anyhow, knowing or guessing a pseudonym has no impact on data privacy because it is not an authentication factor, and a method to use this pseudonym to query the database does not exist.
4. The data subject can fully dispose of the evidence they send to us: they can control data retention time (default is 6 month, minimum two weeks, maximum 1 year). If they want to share some limited portion of this data, they can create access token for this, they can revoke and change their authentication code from the browser extension.
5. The sequence of videos seen by the same watcher is not disclosed to anyone except the watcher. This sequence (or, the video experience of the individual) is protected because in the long term, these content might let an adversary infer personal information, and we don't allow it.

# Our data processing logic

The primary goal is to enable algorithm analysis.
The influence of the personalization algorithm emerges by comparing individualized experiences with other people's experiences.
This can be done with three broad approaches:

### For the data subject (or the supporter with the browser extension installed)

A person collects how YouTube personalizes his or her experience. If this person decides to share their evidences (or a portion of it) with someone else in an exclusive way, this second person can accept or decline to share back their evidences. **This allows two people to compare their personalized experience**.

The privacy model is an explicit, and revokable, opt-in from the two parties, allowing a granular selection of the shared content.

### For researchers

A researcher coordinates tests among people or by using puppet profiles. The experiments might differ broadly (it mainly depends on the research question and methodology). In this case, the researcher should ask the data subject to share the data with them, in a private agreement expressed with informed consent. **This is the approach used in the research team which publishes our first report**: [exposing YouTube, an ALEX project in DMI Summer School](https://github.com/tracking-exposed/presentation/blob/master/ytTREX%20-%20final%20report%20-%20Summer%20School%2019.pdf) at UvA.

The privacy model is an explicit opt-in for people joining the research group. In case dummy profiles play a role, the researcher likely owns these profiles and has full control of the data collected with them.

### Open data for a wider access

Tracking Exposed might run an analysis on the dataset as long as the logic to look into the database is:

* it SHOULD be a [MapReduce](https://en.wikipedia.org/wiki/MapReduce): a transformation that filters and aggregates the analyzed records and produces a summarized version of the original input.
* The generated dataset MUST not contain the watchers' names
* The generation of the dataset SHOULD NOT use the watchers' ID as part of the aggregation logic.

#### How to guarantee protection in Open Data

Our privacy model wants to anonymize, aggregate data in a way which you can't recognize any contributor.
Again, we should investigate phenomena without exposing any individual.

This method has a problem: the three points above are not enough for producing 100% safe and useful data for the public. This approach is a general indication, but our procedure to accept a process like this includes three phases:

1. A third party proposes a research question and a logic in pseudo-code
2. We implement the functionality and don't release it to the public, we only produce a small sample of data.
3. We help the third party in writing their privacy assessment.
3. The proposal (1), our experimental result (2) and the P.A. (3) are assessed by a team of independent reviewers.

At the moment, this is not yet happening. We are only experimenting with producing aggregated queries with privacy-preserving capabilities. When external researchers had access to a selected portion of the dataset, they signed an agreement with us which requires them to:

* Do not release un-redacted records as part of this project;
* Ensure the discloser's ownership of the data;
* Do not sell or share the dataset with anyone outside the working group;
* Only use it for working on the project, as mentioned above;
* Share the data with third parties only prior the discloser's consent;
* Remove the data from the recipient's storage devices after the end of the project.

#### "Public only" approaches

In case a research abides the following methodology:

1) researchers are using profiles under their control
2) the profiles only follow content of known public interests (political figures, mainstream media)
3) we are sure no content of private individuals might be part of the dataset

then the researchers might decide to publish their collected data as a method to let others replicate and validate the research. Few cases like these are registered so far, such as in the context of Facebook algorithm analysis, as documented in [the invisible curation of content](https://webfoundation.org/research/the-invisible-curation-of-content-facebooks-news-feed-and-our-information-diets/), or the report [Italian political election and digital propaganda](https://ourdataourselves.tacticaltech.org/posts/overview-italy/), has data released in a [repository](https://github.com/tracking-exposed/experiments-data/tree/master/e18).
