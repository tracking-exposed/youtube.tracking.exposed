---
title: "API Documentation"
draft: true
---

## Introduction

The main URL to access the ytTrex API is:
`https://youtube.tracking.exposed/api/`.

<br>`userToken` is an unique identifier for you Facebook user. It's a 40-characters long hexadecimal string. You can retrieve it by clicking on the ytTrex logo when you click on the extension in the browser where you installed it. In the URL bar you will find the string. Just copy-paste it.<br><br>
`videoToken` is the identifier used for each video by Youtube. You can retrieve any by separating the string that appears after `watch?v=`. For example the videoToken for `https://www.youtube.com/watch?v=BXB-PoihfYI` would be `BXB-PoihfYI`.<br><br>
`Paging` defines the number of entries that are retrieved by the API, as well as the number of entries to skip. For example, if you call `/10-5` at the end of a "Personal" query, you will get 10 entries and skip the 5 most recent ones. If you call `/20-0` you will just get the 20 most recent entries.

## API Index
<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>URL</th>
  </tr>
  <tr>
    <td>Personal</td>
    <td><a href=#personal>link</a></td>
    <td>/v1/personal/$userToken/$paging</td>
  </tr>
  <tr>
    <td>Personal CSV</td>
    <td><a href=#personalcsv>link</a></td>
    <td>/v1/personal/$userToken/csv</td>
  </tr>
  <tr>
    <td>Research</td>
    <td><a href=#research>link</a></td>
    <td>/v1/research/$researchToken</td>
  </tr>
  <tr>
    <td>VideoId</td>
    <td><a href=#videoId>link</a></td>
    <td>/v1/videoId/$videoToken</td>
  </tr>
  <tr>
    <td>VideoId: Related</td>
    <td><a href=#related>link</a></td>
    <td>/v1/related/$videoToken</td>
  </tr>
  <tr>
    <td>VideoId: Csv</td>
    <td><a href=#videocsv>link</a></td>
    <td>/v1/videoCSV/$videoId/$paging</td>
  </tr>
  <tr>
    <td>Statistics</td>
    <td><a href=#stats>link</a></td>
    <td>/v2/statistics</td>
  </tr>
  <tr>
    <td>Last</td>
    <td><a href=#last>link</a></td>
    <td>/v1/last</td>
  </tr>
    <tr>
    <td>HTML ID</td>
    <td><a href=#html>link</a></td>
    <td>/v1/htmlId/$id</td>
  </tr>
</table>

****

## <a name="personal"></a>Personal

#### URL
`https://youtube.tracking.exposed/api/v1/personal/$token/$paging`
<br>
#### Description


#### Sample Usage
Request:
    `https://`

Response:

``

****

## <a name="personalcsv"></a>PersonalCsv

#### URL
`https://youtube.tracking.exposed/api/v1/personal/$token/csv`
<br>
#### Description


#### Sample Usage
Request:
    `https://`

Response:

``

****

## <a name="research"></a>Research

#### URL
`https://youtube.tracking.exposed/api/v1/research/$token`
<br>
#### Description


#### Sample Usage
Request:
    `https://`

Response:

``

****

## <a name="videoid"></a>VideoId

#### URL
`https://youtube.tracking.exposed/api/v1/videoId/$videoId`
<br>
#### Description
Provides a list of unique observations of the video with metadata on the video itself, such as likes and dislikes at the time of watching, with the pseudo-username for the watcher and a list of videos which were suggested for that observation.

#### Sample Usage
Request:
    `https://youtube.tracking.exposed/api/v1/videoId/dQw4w9WgXcQ`

Response:

`  {
    "id": "47c16bdc2358e51110003a626d822a61e6bc908f",
    "authorName": "Official Rick Astley",
    "authorSource": "/channel/UCuAXFkgsw1L7xaCfnd5JJOw",
    "likeInfo": {
      "likes": "3.831.159 Mi piace",
      "dislikes": "166.512 Non mi piace"
    },
    "publicationString": "Pubblicato il 24 ott 2009",
    "related": [
      {
        "index": 1,
        "title": "Eurythmics - Sweet Dreams (Are Made Of This) (Official Video) di Eurythmics 9 anni fa",
        "source": "Eurythmics\nCanale ufficiale dell'artista\n•",
        "vizstr": "345 Mln visualizzazioni",
        "videoId": "qeMFqkcPYcg",
        "displayTime": "3:35",
        "expandedTime": "3 minuti e 35 secondi",
        "viz": "345.611.986 visualizzazioni",
        "duration": "35 secondi",
        "timeago": "3 minuti e"
      },
      {
        "index": 2,
        "title": "LEZIONI DI CHITARRA IRRITANTI di Mark The Hammer / Marco Arata 2 mesi fa",
        "source": "Mark The Hammer / Marco Arata•",
        "vizstr": "Consigliato per te",
        "videoId": "chq0kA6kJzs",
        "displayTime": "4:54",
        "expandedTime": "4 minuti e 54 secondi",
        "viz": "391.075 visualizzazioni",
        "duration": "54 secondi",
        "timeago": "4 minuti e"
      },
      {
        "index": 3,
        "title": "RIESCI A SCAPPARE DAL TEATRO ABBANDONATO? - Minecraft ITA di ErenBlaze",
        "source": "ErenBlaze\nVerificato\n•",
        "vizstr": "Consigliato per te",
        "videoId": "MW_WQENS98Y",
        "displayTime": "17:28",
        "expandedTime": "17 minuti",
        "viz": "5.593 visualizzazioni",
        "duration": "17 minuti",
        "timeago": "28 minuti fa"
      },
      {
        "index": 4,
        "title": "Top 10 Best Auditions The Voice In The World di mike max",
        "source": "mike max•",
        "vizstr": "37 Mln visualizzazioni",
        "videoId": "qi8O1-SErr8",
        "displayTime": "17:12",
        "expandedTime": "17 minuti",
        "viz": "37.585.261 visualizzazioni",
        "duration": "17 minuti",
        "timeago": "2 anni fa"
      }],
    "relatedN": 4,
    "savingTime": "2019-05-27T16:32:28.196Z",
    "title": "Rick Astley - Never Gonna Give You Up (Video)",
    "videoId": "dQw4w9WgXcQ",
    "viewInfo": {
      "viewStr": "564.061.689 visualizzazioni",
      "viewNumber": 564061689
    },
    "watcher": "icecream-pie-tea"
  }
]`

****

## <a name="related"></a>Related


#### URL
`https://youtube.tracking.exposed/api/v1/related/$videoId`
<br>
#### Description
Given a videoId, provides a list of videos for which the given videoId was suggested as recommended.

#### Sample Usage
Request:
    `https://youtube.tracking.exposed/api/v1/related/dQw4w9WgXcQ`

Response:

`{
    "id": "cf03ae37b84ccbb0cd21594bf8ea16a9c22c174d",
    "authorName": "Village People",
    "authorSource": "/channel/UCeWkruiHm7NL7OvjPyVshkw",
    "likeInfo": {
      "likes": "34.353 Mi piace",
      "dislikes": "704 Non mi piace"
    },
    "publicationString": "Pubblicato il 8 nov 2014",
    "related": [
      {
        "title": "Billie Jean",
        "source": "Michael Jackson",
        "index": 1,
        "videoId": "Kr4EQDVETuA"
      },
      {
        "title": "Lipps Inc - Funky Town",
        "source": "Sunil Varghese",
        "index": 2,
        "videoId": "RcVuyiMUt9k"
      },
      {
        "title": "Olivia Newton John. John Travolta - GREASE / グリース　1978",
        "source": "Omoto Nagie",
        "index": 3,
        "videoId": "bkWevngKTcw"
      },
      {
        "title": "All Star - Smash Mouth [Lyrics]",
        "source": "FourLyrics",
        "index": 4,
        "videoId": "5ZYgIrqELFw"
      },
      {
        "title": "Poker Face",
        "source": "Lady Gaga",
        "index": 5,
        "videoId": "HqK4-dIiKY8"
      },
      {
        "title": "01.Donna Summer -  Hot Stuff (Bad Girls) 1979 HQ",
        "source": "Mathiaz Gabriel 80's",
        "index": 6,
        "videoId": "PBDjUtCyMYo"
      },
      {
        "title": "Bee Gees - Stayin' Alive (1977)",
        "source": "beegees",
        "index": 7,
        "videoId": "I_izvAbhExY"
      },
      {
        "title": "Guardians of the Galaxy Awesome Mix Vol 1  Vol 2 Full Soundtrack",
        "source": "Felipe Thiesen",
        "index": 8,
        "videoId": "Kt-tLuszKBA&t=403s"
      },
      {
        "title": "a-ha - Take On Me (Legendado)",
        "source": "Fabricio Moreira",
        "index": 9,
        "videoId": "YKQkTMGhxQo"
      },
      {
        "title": "Wake Me up Before You Go-Go",
        "source": "Whamtv",
        "index": 10,
        "videoId": "R14lGgHgVJM"
      },
      {
        "title": "Mambo number 5 - Lou Bega - Lyrics",
        "source": "Janneke Al",
        "index": 11,
        "videoId": "bu7h_md33So"
      },
      {
        "title": "Rock DJ",
        "source": "Robbie Williams",
        "index": 12,
        "videoId": "ZLyyT9yW9kA"
      },
      {
        "title": "Queen - I want to break free (subtitulado al español)",
        "source": "arthur hersan",
        "index": 13,
        "videoId": "JEBpBUEuI-Q"
      },
      {
        "title": "Los Lobos & Gipsy Kings - La Bamba (With Lyrics)",
        "source": "ShakurC",
        "index": 14,
        "videoId": "oxPWVX-qSrQ"
      },
      {
        "title": "Eye of the Tiger",
        "source": "Survivor Band",
        "index": 15,
        "videoId": "i3UVZaIcL6k"
      },
      {
        "title": "Rick Astley - Never Gonna Give You Up (Video)",
        "source": "Official Rick Astley",
        "index": 16,
        "videoId": "dQw4w9WgXcQ"
      }
    ],
    "relatedN": 16,
    "savingTime": "2019-07-11T21:36:10.492Z",
    "title": "YMCA (Original Version 1978)",
    "videoId": "RN8Li7kYNnw",
    "viewInfo": {
      "viewStr": "3.043.626 visualizzazioni",
      "viewNumber": 3043626
    },
    "watcher": "okra-pie-cucumber",
    "timeago": "2 months"
  }]`

****

## <a name="videocsv"></a>Video Csv

#### URL
`https://youtube.tracking.exposed/api/v1/videoCSV/$videoId/$paging`
<br>
#### Description


#### Sample Usage
Request:
    `https://`

Response:

``

****

## <a name="stats"></a>Statistics

#### URL
`https://youtube.tracking.exposed/api/v2/statistics/`
<br>
#### Description


#### Sample Usage
Request:
    `https://`

Response:

``

****

## <a name="last"></a>Last

#### URL
`https://youtube.tracking.exposed/api/v1/last`
<br>
#### Description
Provides a JSON with the last 20 global video observations including metadata on the video watched,the pseudo-username and the related videos.

****

## <a name="htmlid"></a>HTML ID

#### URL
`https://youtube.tracking.exposed/api/v1/htmlId/$id`
<br>
#### Description
Special API for debugging, retrieves raw scraped HTML for specific saved HTML ids.


****
