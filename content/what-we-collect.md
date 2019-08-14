---
title: What We Collect
subtitle: considering we don't do business with data but only by comparing multiple evidences you can spot the algorithm hidden agenda?
draft: false
---

## What the browser extension does

1. It creates a cryptogrphic key pairs. This is the method to ensure you can access to your data, and only you can mark the data received as "yours". This is necessary because we don't have any email address, Google profile or Youtube username. This work for every human or bot opening youtube.com website. Every browser extension installed has a different and unique cryptographic key.

2. It copy the HTML of every youtube.com video page once the video has been loaded. This HTML is sent to the tracking.exposed server, hosted in Germany and managed by the [tech leader of our group](/about).

**Technical detail**: the HTML is cryptographically signed with the public key, and every *supporter* sending data is differenciated by this public key.

## Which data we extract and save

1. From the submission: the public key (which is a unique identifier), the time of the submission, the URL from which the page come from.

2. From the HTML, this [nodejs parser](https://github.com/tracking-exposed/yttrex/blob/master/backend/parsers/video.js) extract this list of metadata for every page, it is called

### metadata entry

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

Each related video has a different data structure. This list of related is part of the evidence. We use _related_ and _suggested_ as synonims. We are talking about the videos display on the right column of YouTube interface.

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

What is linkable to an individual activity is a personal data, and in our regards, two metadata should deserve special attention and protection: the **watcher pseudonym**, and the **sequence of videos seen by the same watcher**.

1. By 'watcher' is mean a sequence of three random food names. They are assigned when the opt-in is given. For example: *pizza-broccoli-tatangelo* is a legitimate watcher name.
2. The watcher pseudonym it is **not guarantee to be unique**. In the system, might exist another person with the same pseudonym. Anyhow, knowing or guessing a pseudonym has not impact on data privacy because is not an authentication factor, and do not exists method to use this pseudonym to query the database.
3. Data subject can fully dispose of the evidences they send to us: they can control data retention time (default is 6 month, minimum two weeks, maximum 1 year), if they want to share some limited portion of this data, they can create access token for this, they can revoke and change their authentication code from the browser extension.
4. The sequence of videos seen by the same watcher is not disclosed to anyone except the watcher. This is done because the timing and the content observed might let someone infer personal information, and we don't allow it.

# The reason of our data processing

The primary goal is enable algorithm analysis. This mostly works by comparing personalized experiences with experiences of other people.
This can be done in three broad approaches:

#### 1. For the data subject (or, the supporter with the browser extension installed)

A person collects how YouTube personalize your experience. If this person decide to share their evidences (or a portion) to someone else in an exclusive way, this second person can accept or decline to share back their evidences. **This permit to two people to compare how they got a personalized experience**.

The privacy model is explicit opt-in from the two parties, revokable, and allowing a granular selection of the shared content.

#### 2. For researchers

A researcher coordinate tests between people or by using puppet profiles. The experiments might differ broadly (mainly depends on research question and methodology). In this case, the researcher should ask to the data subject to share the data with them, in a private agreement expressed with informed consent. **This is the approach used in the research team which publish our first report**: [exposing YouTube, an ALEX project in DMI Summer School](https://github.com/tracking-exposed/presentation/blob/master/ytTREX%20-%20final%20report%20-%20Summer%20School%2019.pdf) at UvA.

The privacy model is: explicit opt-in for people joining the research group. In the case dummy profiles play a role, the researcher likely own these profiles and has full control of the data collected with them.

#### 3. For the public

Tracking Exposed might run analysis on the dataset as long as the logic to look into the database is:

* SHOULD be a [MapReduce](https://en.wikipedia.org/wiki/MapReduce): a transformation that filter and aggregate the analyzed records and produce a summarized version of the original input.
* The produced dataset MUST not contain the watcher name
* The generation of the dataset SHOULD NOT use the watcher ID as part of the aggregation logic.

The privacy model is: anonymize, aggregate and try to investigate on phenomenon without exposing any individual.
This method has a problem: the three points above are not a specification capable of producing 100% safe and useful data for the public. This approach is a general indication, but our procedure to accept a process like this includes three phases:

1. A third party propose a research question and a logic in pseudo code
2. We implement the functionality and don't release to the public, only produce a small sample of data.
3. We help the third party in writing their privacy assessment.
3. The proposal (1), our experimental result (2) and the P.A. (3) goes to a team of independent reviewer.

At the moment this is not yet happen, only us are doing experiment in producing aggregated queries with privacy preserving capabilities.
