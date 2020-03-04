## CSV format

                recommendedVideoId: related.videoId,
                recommendedViews: (related.mined) ? related.mined.viz : null,
                recommendedDuration: (related.mined) ? related.mined.duration : null,
                recommendedPubtime: (related.mined) ? related.mined.timeago : null,
                recommendedForYou: related.foryou,
                recommendedTitle: related.title,
                recommendedAuthor: related.source,
                recommendedVerified: related.verified,
                recommendationOrder: related.index,
                watchedId: evidence.id,
                watchedAuthor: evidence.authorName,
                watchedPubtime: evidence.related.vizstr,
                watchedTitle: evidence.title,
                watchedViews: evidence.viewInfo.viewStr ? evidence.viewInfo.viewStr : null,
                watchedChannel: evidence.authorSource,


## Introduction

The main URL to access the ytTrex API is:
`https://youtube.tracking.exposed/api/`.

<br>`userToken` is an unique identifier for you Facebook user. It's a 40-characters long hexadecimal string. You can retrieve it by clicking on the ytTrex logo when you click on the extension in the browser where you installed it. In the URL bar you will find the string. Just copy-paste it.<br><br>
`videoToken` is the identifier used for each video by Youtube. You can retrieve it by separating the string that appears after `watch?v=`. For example the videoToken for `https://www.youtube.com/watch?v=BXB-PoihfYI` would be `BXB-PoihfYI`.<br><br>
`Paging` defines the number of entries that are retrieved by the API, as well as the number of entries to skip. For example, if you call `/10-5` at the end of a "Personal" query, you will get 10 entries and skip the 5 most recent ones. If you call `/20-0` you will just get the 20 most recent entries.

There are two fundamental `data units` through which entries (video observations) are shared: _video metadata_ and _related videos_.

In _video metadata_, the unit is the watched video. Each 'id' represents an evidence collected by the watcher. Often you will see a field named _related_. It's a list of objects, each one describing a suggested video on the right column of the YouTube interface. The number of these videos differs. We expect it to be always 20, but it might not be.

In _related videos_, the unit is a suggested video, when the data is served in CSV - but not only in that case.

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
    <td>Personal Related</td>
    <td><a href=#personalrelated>link</a></td>
    <td>/v1/personal/$userToken/related/$paging</td>
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
    <td><a href=#videoid>link</a></td>
    <td>/v1/videoId/$videoToken</td>
  </tr>
  <tr>
    <td>VideoId Related</td>
    <td><a href=#related>link</a></td>
    <td>/v1/related/$videoToken</td>
  </tr>
  <tr>
    <td>VideoId Csv</td>
    <td><a href=#videocsv>link</a></td>
    <td>/v1/videoCSV/$videoToken/$paging</td>
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
    <td>Author</td>
    <td><a href=#author>link</a></td>
    <td>/v1/author/John%20Malecki</td>
  </tr>
    <tr>
    <td>HTML ID</td>
    <td><a href=#htmlid>link</a></td>
    <td>/v1/htmlId/$id</td>
  </tr>
</table>

****

## <a name="personal"></a>Personal

#### URL
`https://youtube.tracking.exposed/api/v1/personal/$token/$paging`
<br>
#### Description
Retrieves personal information on your profile, the last videos you watched and the list of related (suggested) videos.

**Data unit**: _video metadata_.

#### Sample Usage
Request:
    `https://youtube.tracking.exposed/api/v1/personal/HIDDEN/1`

<details>
  <summary>Response:</summary>

`{
  "profile": {
    "publicKey": "HIDDEN",
    "creationTime": "2019-04-15T14:33:28.106Z",
    "p": "waffle-mint-milk",
    "lastActivity": "2019-09-02T21:41:23.391Z",
    "version": "1.1.8"
  },
  "recent": [
    {
      "id": "607e0278f605f231393df390d291933de413ed33",
      "authorName": "Ленинград | Leningrad",
      "authorSource": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
      "likeInfo": {
        "likes": "415,808 likes",
        "dislikes": "50,569 dislikes"
      },
      "publicationString": "Published on May 28, 2019",
      "related": [
        {
          "index": 1,
          "title": "The Most Dangerous Stuff in the Universe - Strange Stars Explained",
          "verified": true,
          "source": "Kurzgesagt – In a Nutshell",
          "vizstr": "6M views4 months ago",
          "foryou": false,
          "videoId": "p_8yK2kmxoo",
          "displayTime": null,
          "expandedTime": null,
          "longlabel": "The Most Dangerous Stuff in the Universe - Strange Stars Explained by Kurzgesagt – In a Nutshell 4 months ago 8 minutes, 28 seconds 6,057,728 views"
        },
        {
          "index": 2,
          "title": "L'ORGANIZZAZIONE ALBA™ in ordine di FORZA",
          "verified": false,
          "source": "Fear of Unknown™",
          "vizstr": "173K views5 months ago",
          "foryou": false,
          "videoId": "gowj9u3LWSs",
          "displayTime": null,
          "expandedTime": null,
          "longlabel": "L'ORGANIZZAZIONE ALBA™ in ordine di FORZA by Fear of Unknown™ 5 months ago 10 minutes 173,561 views"
        },
        {
          "index": 3,
          "title": "The Day We Almost Set the World on Fire",
          "verified": false,
          "source": "Because Science",
          "vizstr": "468K views2 weeks ago",
          "foryou": false,
          "videoId": "NFjVUSOnPzo",
          "displayTime": null,
          "expandedTime": null,
          "longlabel": "The Day We Almost Set the World on Fire by Because Science 2 weeks ago 14 minutes 468,825 views"
        },
        {
          "index": 4,
          "title": "Building a Marsbase is a Horrible Idea: Let’s do it!",
          "verified": true,
          "source": "Kurzgesagt – In a Nutshell",
          "vizstr": "5.9M views6 months ago",
          "foryou": false,
          "videoId": "uqKGREZs6-w",
          "displayTime": null,
          "expandedTime": null,
          "longlabel": "Building a Marsbase is a Horrible Idea: Let’s do it! by Kurzgesagt – In a Nutshell 6 months ago 9 minutes, 22 seconds 5,960,159 views"
        },
        {
          "index": 5,
          "title": "Kakashi diventa il Sesto Hokage, Naruto ottiene un nuovo braccio [Sub ITA]",
          "verified": false,
          "source": "DBSMomentsHD ITA",
          "vizstr": "81K views6 days ago",
          "foryou": false,
          "videoId": "e4sG7-WQDbg",
          "displayTime": null,
          "expandedTime": null,
          "longlabel": "Kakashi diventa il Sesto Hokage, Naruto ottiene un nuovo braccio [Sub ITA] by DBSMomentsHD ITA 6 days ago 4 minutes, 35 seconds 81,415 views"
        },
        {
          "index": 6,
          "title": "How Black Holes Could Turn Jupiter Into a Star",
          "verified": false,
          "source": "Because Science",
          "vizstr": "178K views1 day ago",
          "foryou": false,
          "videoId": "lQh7RordK3Q",
          "displayTime": null,
          "expandedTime": null,
          "longlabel": "How Black Holes Could Turn Jupiter Into a Star by Because Science 1 day ago 12 minutes 178,362 views"
        },
        {
          "index": 7,
          "title": "Consultazioni Conte, Di Maio (M5s): \"I nostri punti siano nel programma o è meglio il voto\"",
          "verified": true,
          "source": "La Repubblica",
          "vizstr": "43K views8 hours ago",
          "foryou": false,
          "videoId": "JxBEuSZtFnI",
          "displayTime": null,
          "expandedTime": null,
          "longlabel": "Consultazioni Conte, Di Maio (M5s): \"I nostri punti siano nel programma o è meglio il voto\" by La Repubblica 8 hours ago 10 minutes 43,027 views"
        },
        {
          "index": 8,
          "title": "Pd-M5S. L'accordo non c'è, anzi sì, forse no. Il videoracconto del giorno più lungo della crisi",
          "verified": true,
          "source": "Fanpage.it",
          "vizstr": "30K views13 hours ago",
          "foryou": false,
          "videoId": "DzGWfAkRhnA",
          "displayTime": null,
          "expandedTime": null,
          "longlabel": "Pd-M5S. L'accordo non c'è, anzi sì, forse no. Il videoracconto del giorno più lungo della crisi by Fanpage.it 13 hours ago 4 minutes, 43 seconds 30,307 views"
        },
        {
          "index": 9,
          "title": "Governo M5s- Pd, le consultazioni di Conte a Montecitorio",
          "verified": true,
          "source": "La Repubblica",
          "vizstr": "16K viewsStreamed 9 hours ago",
          "foryou": false,
          "videoId": "N79gZ9FJIKU",
          "displayTime": null,
          "expandedTime": null,
          "longlabel": "Governo M5s- Pd, le consultazioni di Conte a Montecitorio by La Repubblica Streamed 9 hours ago 5 hours 16,488 views"
        }
      ],
      "relatedN": 9,
      "savingTime": "2019-08-30T23:24:34.513Z",
      "title": "Ленинград — Кабриолет",
      "videoId": "Z8qU0GdW88Q",
      "viewInfo": {
        "viewStr": "37,814,277 views",
        "viewNumber": 37814277
      },
      "watcher": "waffle-mint-milk",
      "relative": "3 days ago"
    }
  ]
}`
</details>

****

## <a name="personalrelated"></a>Personal Related

#### URL
`https://youtube.tracking.exposed/api/v1/personal/$token/related/$paging`
<br>
#### Description
Extracts only the list of related videos for Personal API. Paging retrieves the entire list of suggested videos per unit.

**Data unit**: _related video_.

#### Sample Usage
Request:
    `https://youtube.tracking.exposed/api/v1/personal/HIDDEN/related/1-1`

<details>

<summary>Response:</summary>

`[
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "p_8yK2kmxoo",
    "title": "The Most Dangerous Stuff in the Universe - Strange Stars Explained",
    "source": "Kurzgesagt – In a Nutshell",
    "vizstr": "6M views4 months ago",
    "suggestionOrder": 1,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "gowj9u3LWSs",
    "title": "L'ORGANIZZAZIONE ALBA™ in ordine di FORZA",
    "source": "Fear of Unknown™",
    "vizstr": "173K views5 months ago",
    "suggestionOrder": 2,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "NFjVUSOnPzo",
    "title": "The Day We Almost Set the World on Fire",
    "source": "Because Science",
    "vizstr": "468K views2 weeks ago",
    "suggestionOrder": 3,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "uqKGREZs6-w",
    "title": "Building a Marsbase is a Horrible Idea: Let’s do it!",
    "source": "Kurzgesagt – In a Nutshell",
    "vizstr": "5.9M views6 months ago",
    "suggestionOrder": 4,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "e4sG7-WQDbg",
    "title": "Kakashi diventa il Sesto Hokage, Naruto ottiene un nuovo braccio [Sub ITA]",
    "source": "DBSMomentsHD ITA",
    "vizstr": "81K views6 days ago",
    "suggestionOrder": 5,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "lQh7RordK3Q",
    "title": "How Black Holes Could Turn Jupiter Into a Star",
    "source": "Because Science",
    "vizstr": "178K views1 day ago",
    "suggestionOrder": 6,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "JxBEuSZtFnI",
    "title": "Consultazioni Conte, Di Maio (M5s): \"I nostri punti siano nel programma o è meglio il voto\"",
    "source": "La Repubblica",
    "vizstr": "43K views8 hours ago",
    "suggestionOrder": 7,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "DzGWfAkRhnA",
    "title": "Pd-M5S. L'accordo non c'è, anzi sì, forse no. Il videoracconto del giorno più lungo della crisi",
    "source": "Fanpage.it",
    "vizstr": "30K views13 hours ago",
    "suggestionOrder": 8,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "N79gZ9FJIKU",
    "title": "Governo M5s- Pd, le consultazioni di Conte a Montecitorio",
    "source": "La Repubblica",
    "vizstr": "16K viewsStreamed 9 hours ago",
    "suggestionOrder": 9,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "ewpvENd87zo",
    "title": "Andrea Orlando: \"Non c'è problema Di Maio, ma con premier del M5s è giusto che vice sia del Pd\"",
    "source": "Fanpage.it",
    "vizstr": "6.3K views14 hours ago",
    "suggestionOrder": 10,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "cGdbD45CiSI",
    "title": "Consultazioni, Salvini: \"Pd e M5s litigano già prima di governare, meglio votare subito\"",
    "source": "La Repubblica",
    "vizstr": "178K views2 days ago",
    "suggestionOrder": 11,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "_goj9ecJkwE",
    "title": "La Storia di Evangelion",
    "source": "Mortebianca",
    "vizstr": "38K views5 days ago",
    "suggestionOrder": 12,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "tbsxkZ-U6gI",
    "title": "Il gioco della reputazione: Conte, The Boss, Lelouch",
    "source": "WesaChannel",
    "vizstr": "40K views1 day ago",
    "suggestionOrder": 13,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "aI6bPspVOmU",
    "title": "Insane Magician FOOLS Penn & Teller With This MIND BLOWING Magic Trick!",
    "source": "CardShuffler99",
    "vizstr": "3M views4 days ago",
    "suggestionOrder": 14,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "4-hMBNoIhrQ",
    "title": "What Happens When You COMPLETE The Pokedex in Every Pokemon Game?",
    "source": "PokeTips",
    "vizstr": "1.7M views6 days ago",
    "suggestionOrder": 15,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "Hm1JFLpkofs",
    "title": "The Biology of James Cameron’s Avatar",
    "source": "TREY the Explainer",
    "vizstr": "267K views3 days ago",
    "suggestionOrder": 16,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "UaFvZLykI3E",
    "title": "Fuuka bacia Naruto | Naruto vs Fuuka [Sub ITA]",
    "source": "DBSMomentsHD ITA",
    "vizstr": "36K views5 days ago",
    "suggestionOrder": 17,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "VqSKmwWOIwE",
    "title": "Ennesimo tentativo fallito di far capire ad un sovranista che straparla ...",
    "source": "Michele Boldrin",
    "vizstr": "49K views1 month ago",
    "suggestionOrder": 18,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "sCUsLz5Q_Dw",
    "title": "Come smontare le bufale su migranti ed ONG. Intervista a Matteo Villa.",
    "source": "Michele Boldrin",
    "vizstr": "14K views3 weeks ago",
    "suggestionOrder": 19,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "7PwvoRWXivY",
    "title": "Dibattito con Alberto Bagnai - Novembre 2014. AUDIO CORRETTO",
    "source": "Michele Boldrin",
    "vizstr": "39K views11 months ago",
    "suggestionOrder": 20,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "hYi1pxH-xBU",
    "title": "Bufale per tonti: come ti asfalto un video sovranista sul debito",
    "source": "Michele Boldrin",
    "vizstr": "35K views10 months ago",
    "suggestionOrder": 21,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  },
  {
    "id": "607e0278f605f231393df390d291933de413ed33",
    "videoId": "lF9nNATKIc8",
    "title": "Live Q&A. Costantino e Michele: situazione politica e prospettive.",
    "source": "Michele Boldrin",
    "vizstr": "22K viewsStreamed 1 week ago",
    "suggestionOrder": 22,
    "displayLength": null,
    "watched": "Ленинград — Кабриолет",
    "since": "Published on May 28, 2019",
    "credited": "Ленинград | Leningrad",
    "channel": "/channel/UCY0C6A3t3RTUN3BB65rWAgQ",
    "savingTime": "2019-08-30T23:24:34.513Z",
    "watcher": "waffle-sage-milk",
    "watchedId": "Z8qU0GdW88Q"
  }
]`
</details>


****

## <a name="personalcsv"></a>PersonalCsv

#### URL
`https://youtube.tracking.exposed/api/v1/personal/$token/csv`
<br>
#### Description
Same as personal, but data is retrieved as comma-separated-values.

**Data unit**: _related video_.
****

## <a name="research"></a>Research

#### URL
`https://youtube.tracking.exposed/api/v1/research/$token`
<br>
#### Description
Users can join research groups in order to be able to retrieve data for all of their "accounts" with a single token. Joins various "Personal API" together for research purposes.

**STILL TO BE IMPLEMENTED PROPERLY**
**STILL TO BE IMPLEMENTED PROPERLY**
**STILL TO BE IMPLEMENTED PROPERLY**

****

## <a name="videoid"></a>VideoId

#### URL
`https://youtube.tracking.exposed/api/v1/videoId/$videoId`
<br>
#### Description
Provides a list of unique observations of the video with metadata on the video itself, such as likes and dislikes at the time of watching, with the pseudo-username for the watcher and a list of videos which were suggested for that observation.

**Data unit**: _video metadata_.

#### Sample Usage
Request:
    `https://youtube.tracking.exposed/api/v1/videoId/dQw4w9WgXcQ`

<details>

<summary>Response:</summary>

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
</details>

****

## <a name="related"></a>Related


#### URL
`https://youtube.tracking.exposed/api/v1/related/$videoId`
<br>
#### Description
Given a videoId, it provides a list of videos for which the given videoId was suggested as recommended.

**Data unit**: _video metadata_.

#### Sample Usage
Request:
    `https://youtube.tracking.exposed/api/v1/related/dQw4w9WgXcQ`

<details>

<summary>Response:</summary>

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
</details>

****

## <a name="videocsv"></a>Video Csv

#### URL
`https://youtube.tracking.exposed/api/v1/videoCSV/$videoId/$paging`
<br>
#### Description
Same as VideoId API, but as comma-separated-values file.

**Data unit**: _related video_.
****

## <a name="stats"></a>Statistics

#### URL
`https://youtube.tracking.exposed/api/v2/statistics/$name/$unit/$amount`
<br>
#### Description
It provides statistics on the node, given specific keys.

Statistics API provide data to compile the [public statistics](https://youtube.tracking.exposed/impact).
Statistics is an interface shared among other Tracking Exposed project, for example [facebook](https://facebook.tracking.exposed/impact).

Required three mandatory parameters:
  * **name**: is the name of the statistic we want, and the available names are configured in the backend configuration file `config/stats.json`.
  * **unit**: and be _day_ or _hour_
  * **amount** is the amount of day or amount of hours requested.

## <a name="last"></a>Last

#### URL
`https://youtube.tracking.exposed/api/v1/last`
<br>
#### Description
Provides a JSON with the last 20 global video observations including metadata on the video watched,the pseudo-username and the related videos.

****

## <a name="author"></a>Author

#### URL
`https://youtube.tracking.exposed/api/v1/author/$authorName`
<br>
#### Description
Provides a JSON with all the videos suggested after videos observed in a specific channel.

**Data unit**: _video metadata_.

#### Sample Usage
Request:
    `https://youtube.tracking.exposed/api/v1/author/John%20Malecki`
<details>

<summary>Response:</summary>

`[{"id":"064d6a48f3299b2cd3c6","title":"DIY Concrete Coffee Table | Beginner Mistakes Video","savingTime":"2019-06-03T21:25:25.661Z","videoId":"VADCu5q-RNY","viewInfo":{"viewStr":"38,935 views","viewNumber":38935},"related":[{"index":1,"title":"DIY Concrete Table with a Walnut Slab","verified":false,"source":"DIY PETE","vizstr":"312K views","foryou":false,"videoId":"9R8Be8XSIj0","displayTime":"13:28","expandedTime":"13 minutes","longlabel":"DIY Concrete Table with a Walnut Slab by DIY PETE 2 years ago 13 minutes 312,342 views","mined":{"viz":"312,342 views","duration":"13 minutes","timeago":"2 years ago","title":"DIY Concrete Table with a Walnut Slab by DIY PETE"}},{"index":2,"title":"Cosa ci insegna la storia dei MINIBOT?","verified":false,"source":"Breaking Italy","vizstr":"Recommended for you","foryou":true,"videoId":"V4_VUCOF5qs","displayTime":null,"expandedTime":null,"longlabel":"Cosa ci insegna la storia dei MINIBOT? by Breaking Italy 2 hours ago 16 minutes 31,864 views","mined":{"viz":"31,864 views","duration":"16 minutes","timeago":"2 hours ago","title":"Cosa ci insegna la storia dei MINIBOT? by Breaking Italy"}},{"index":3,"title":"How to make a Concrete Counter Top in 1 hour!","verified":false,"source":"Michael Builds","vizstr":"1.9M views","foryou":false,"videoId":"T7mYB6x68DY","displayTime":null,"expandedTime":null,"longlabel":"How to make a Concrete Counter Top in 1 hour! by Michael Builds 5 months ago 19 minutes 1,900,952 views","mined":{"viz":"1,900,952 views","duration":"19 minutes","timeago":"5 months ago","title":"How to make a Concrete Counter Top in 1 hour! by Michael Builds"}},{"index":4,"title":"Apple's WWDC19 keynote in 12 minutes","verified":false,"source":"CNET","vizstr":"Recommended for you","foryou":true,"videoId":"SAh30bOsvgU","displayTime":null,"expandedTime":null,"longlabel":"Apple's WWDC19 keynote in 12 minutes by CNET 1 hour ago 12 minutes 26,810 views","mined":{"viz":"26,810 views","duration":"12 minutes","timeago":"1 hour ago","title":"Apple's WWDC19 keynote in 12 minutes by CNET"}},{"index":5,"title":"Turning old jewelry into pure gold bars","verified":false,"source":"NileRed","vizstr":"1.1M views","foryou":false,"videoId":"37Kn-kIsVu8","displayTime":null,"expandedTime":null,"longlabel":"Turning old jewelry into pure gold bars by NileRed 5 days ago 31 minutes 1,139,760 views","mined":{"viz":"1,139,760 views","duration":"31 minutes","timeago":"5 days ago","title":"Turning old jewelry into pure gold bars by NileRed"}},{"index":6,"title":"How to Warm Dinner Plates — Is the Microwave Safe?","verified":false,"source":"Adam Ragusea","vizstr":"Recommended for you","foryou":true,"videoId":"7aJ1P6TV3n4","displayTime":null,"expandedTime":null,"longlabel":"How to Warm Dinner Plates — Is the Microwave Safe? by Adam Ragusea 3 hours ago 4 minutes, 47 seconds 18,387 views","mined":{"viz":"18,387 views","duration":"47 seconds","timeago":"4 minutes,","title":"How to Warm Dinner Plates — Is the Microwave Safe? by Adam Ragusea 3 hours ago"}},{"index":7,"title":"6 Things I Wish I Knew at 20","verified":false,"source":"Matt D'Avella","vizstr":"Recommended for you","foryou":true,"videoId":"xEIRoc_WitI","displayTime":null,"expandedTime":null,"longlabel":"6 Things I Wish I Knew at 20 by Matt D'Avella 1 week ago 11 minutes 783,913 views","mined":{"viz":"783,913 views","duration":"11 minutes","timeago":"1 week ago","title":"6 Things I Wish I Knew at 20 by Matt D'Avella"}},{"index":8,"title":"Building a Solar Powered Workshop","verified":false,"source":"HomeMadeModern","vizstr":"3.6M views","foryou":false,"videoId":"xnSew-tCuPo","displayTime":null,"expandedTime":null,"longlabel":"Building a Solar Powered Workshop by HomeMadeModern 1 year ago 12 minutes 3,601,560 views","mined":{"viz":"3,601,560 views","duration":"12 minutes","timeago":"1 year ago","title":"Building a Solar Powered Workshop by HomeMadeModern"}},{"index":9,"title":"Apple WWDC 2019 keynote in 13 minutes","verified":false,"source":"The Verge","vizstr":"Recommended for you","foryou":true,"videoId":"izSg1YUvpAA","displayTime":null,"expandedTime":null,"longlabel":"Apple WWDC 2019 keynote in 13 minutes by The Verge 25 minutes ago 12 minutes 8,120 views","mined":{"viz":"8,120 views","duration":"12 minutes","timeago":"25 minutes ago","title":"Apple WWDC 2019 keynote in 13 minutes by The Verge"}},{"index":10,"title":"How To Remodel a Bathroom // DIY // Modern Builds","verified":false,"source":"Modern Builds","vizstr":"902K views","foryou":false,"videoId":"_jt26JfnKOg","displayTime":null,"expandedTime":null,"longlabel":"How To Remodel a Bathroom // DIY // Modern Builds by Modern Builds 5 months ago 17 minutes 902,341 views","mined":{"viz":"902,341 views","duration":"17 minutes","timeago":"5 months ago","title":"How To Remodel a Bathroom // DIY // Modern Builds by Modern Builds"}},{"index":11,"title":"I need to buy AMD stock. Now. - Ryzen 3rd Gen News","verified":false,"source":"Linus Tech Tips","vizstr":"Recommended for you","foryou":true,"videoId":"v7hofCnniJE","displayTime":null,"expandedTime":null,"longlabel":"I need to buy AMD stock. Now. - Ryzen 3rd Gen News by Linus Tech Tips 1 week ago 12 minutes 2,077,274 views","mined":{"viz":"2,077,274 views","duration":"12 minutes","timeago":"1 week ago","title":"I need to buy AMD stock. Now. - Ryzen 3rd Gen News by Linus Tech Tips"}},{"index":12,"title":"Thrift Store rescue #9 | $5.00 Mid Century Desk Restoration","verified":false,"source":"Dashner Design & Restoration","vizstr":"167K views","foryou":false,"videoId":"6gb5cJopUpo","displayTime":null,"expandedTime":null,"longlabel":"Thrift Store rescue #9 | $5.00 Mid Century Desk Restoration by Dashner Design & Restoration 1 month ago 15 minutes 167,547 views","mined":{"viz":"167,547 views","duration":"15 minutes","timeago":"1 month ago","title":"Thrift Store rescue #9 | $5.00 Mid Century Desk Restoration by Dashner Design & Restoration"}},{"index":13,"title":"My New Croissant Machine Is 3D-PRINTED ! (and open-source)","verified":false,"source":"Alex","vizstr":"Recommended for you","foryou":true,"videoId":"_2eIZ3a_hrw","displayTime":null,"expandedTime":null,"longlabel":"My New Croissant Machine Is 3D-PRINTED ! (and open-source) by Alex 2 days ago 11 minutes 238,442 views","mined":{"viz":"238,442 views","duration":"11 minutes","timeago":"2 days ago","title":"My New Croissant Machine Is 3D-PRINTED ! (and open-source) by Alex"}},{"index":14,"title":"18 things every beginning woodworker should know","verified":false,"source":"Steve Ramsey - Woodworking for Mere Mortals","vizstr":"529K views","foryou":false,"videoId":"hXjTXeXeTpI","displayTime":null,"expandedTime":null,"longlabel":"18 things every beginning woodworker should know by Steve Ramsey - Woodworking for Mere Mortals 3 months ago 9 minutes, 5 seconds 529,012 views","mined":{"viz":"529,012 views","duration":"5 seconds","timeago":"9 minutes,","title":"18 things every beginning woodworker should know by Steve Ramsey - Woodworking for Mere Mortals 3 months ago"}},{"index":15,"title":"CLOSET Remodel // Surprising The Parents With A New Closet // Small closet Ideas","verified":false,"source":"DIY Creators","vizstr":"670K views","foryou":false,"videoId":"qLXUNem_sGk","displayTime":null,"expandedTime":null,"longlabel":"CLOSET Remodel // Surprising The Parents With A New Closet // Small closet Ideas by DIY Creators 5 months ago 15 minutes 670,305 views","mined":{"viz":"670,305 views","duration":"15 minutes","timeago":"5 months ago","title":"CLOSET Remodel // Surprising The Parents With A New Closet // Small closet Ideas by DIY Creators"}},{"index":16,"title":"How To Make a Concrete Coffee Table and How to Embed a Metal Design in Concrete","verified":false,"source":"DIY PETE","vizstr":"1.9M views","foryou":false,"videoId":"BygJGz3TC3o","displayTime":null,"expandedTime":null,"longlabel":"How To Make a Concrete Coffee Table and How to Embed a Metal Design in Concrete by DIY PETE 2 years ago 13 minutes 1,987,571 views","mined":{"viz":"1,987,571 views","duration":"13 minutes","timeago":"2 years ago","title":"How To Make a Concrete Coffee Table and How to Embed a Metal Design in Concrete by DIY PETE"}},{"index":17,"title":"$12,000 HOUSE - One Man Renovation","verified":false,"source":"Homemade Home","vizstr":"3.1M views","foryou":false,"videoId":"zBCbbXlVOhs","displayTime":null,"expandedTime":null,"longlabel":"$12,000 HOUSE - One Man Renovation by Homemade Home 1 month ago 10 minutes 3,114,966 views","mined":{"viz":"3,114,966 views","duration":"10 minutes","timeago":"1 month ago","title":"$12,000 HOUSE - One Man Renovation by Homemade Home"}},{"index":18,"title":"Making A Concrete FIRE PIT  | from a washing machine drum","verified":false,"source":"DIY Creators","vizstr":"670K views","foryou":false,"videoId":"rB__p25GUpc","displayTime":null,"expandedTime":null,"longlabel":"Making A Concrete FIRE PIT  | from a washing machine drum by DIY Creators 11 months ago 10 minutes 670,983 views","mined":{"viz":"670,983 views","duration":"10 minutes","timeago":"11 months ago","title":"Making A Concrete FIRE PIT  | from a washing machine drum by DIY Creators"}},{"index":19,"title":"4  DIY Projects that can instantly improve your space","verified":false,"source":"DIY Creators","vizstr":"806K views","foryou":false,"videoId":"mLhMdAszG9I","displayTime":null,"expandedTime":null,"longlabel":"4  DIY Projects that can instantly improve your space by DIY Creators 2 years ago 11 minutes 806,184 views","mined":{"viz":"806,184 views","duration":"11 minutes","timeago":"2 years ago","title":"4  DIY Projects that can instantly improve your space by DIY Creators"}},{"index":20,"title":"Flawless dovetails with Rob Cosman!","verified":false,"source":"ShopBuilt","vizstr":"625K views","foryou":false,"videoId":"hIkwZFBbPHo","displayTime":null,"expandedTime":null,"longlabel":"Flawless dovetails with Rob Cosman! by ShopBuilt 2 years ago 13 minutes 625,825 views","mined":{"viz":"625,825 views","duration":"13 minutes","timeago":"2 years ago","title":"Flawless dovetails with Rob Cosman! by ShopBuilt"}}],"authorName":"John Malecki","authorSource":"/channel/UCVUSDq6-oSpWAAPUppHFtZQ","publicationString":"Published on 29 Jun 2018"}]`
</details>

****
## <a name="htmlid"></a>HTML ID

#### URL
`https://youtube.tracking.exposed/api/v1/htmlId/$id`
<br>
#### Description
Special API for debugging, it retrieves raw scraped HTML for specific saved HTML ids.

****
