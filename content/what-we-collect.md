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
            <td>Order of the related video. This counter start from 1, and we can't guarantee all the videos have the same amount of related videos.</td>
        </tr>
        <tr>
            <td>Title</td>
            <td>Platero y Tú - Vamos tirando (1993) (Álbum completo)</td>
            <td>The name of the suggested video</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


## What is a personal data in this regards

 and *likely* linkable to an individual, therefore, this is for us **a personal data**), 

## How we use these data

## Which rights you have over your data


