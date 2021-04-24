---
title: Tools and commands for automated youtube testing
date: 2020-02-22T22:22:22+00:00
draft: false
description: technical references for researcher using web navigation automation tool
og_title: "ytTREX - automation and testing"
og_type: "website"
og_image: "http://youtube.tracking.exposed/yttrex-logo.jpg"
og_url: "https://youtube.tracking.exposed/methodology"
og_description: "When testing youtube you might want to mix actual people with synthetic access, here is provided our script and method"
---


### How to install automation scripts 

* Be sure 'node -v' show you've installed node in a version bigger than 12.x, if not [install nodejs in your system](https://nodejs.org/en/download/).
* Download: https://github.com/tracking-exposed/yttrex/archive/master.zip (or clone the git repository if you are used to)
* Enter `yttrex-master/methodology` and run `npm install`
* Check the output of `node src/guardoni.js`, does it show an error because you did't specify any config settings? that's good! Let's see which are the available settings:

### Directives and options
 
The configuration file for _guardoni_ specify what the browser would be instructed to do. Example:

```
[{
    "name": "Tracking Exposed intro video",
    "url": "https://www.youtube.com/watch?v=SmYuYEhT81c",
    "watchFor": "end",
    "loadFor": 2000
}, {
    "name": "Youtube Tracking Exposed first tutorial",
    "url": "https://www.youtube.com/watch?v=igs24EeIWBU",
    "watchFor": 165000,
    "loadFor": 2000
}, {
    "name": "Youtube Tracking Exposed presentation in 2020",
    "url": "https://www.youtube.com/watch?v=WheHKW_r_WM",
    "watchFor": 15000,
    "loadFor": 2000
}]
```

* `watchFor` it is the variable that say how many milliseconds the video should be reproduced. You can specify "end" to watch it till the end.
* `loadFor` it is the time used to load the video before trying any interaction (guardoni would press play for you).

### Know issues

Youtube might interrupt any interaction by displaying a few possible requests "Do you want to login?" "Do you want to try premium?". Despite this automation it is meant to be executed without human intervention, there actions should be solved by active clicks from the researcher.

### Conclusion

1. Please double check with the descriptive [README](https://github.com/tracking-exposed/yttrex/tree/master/methodology) in the methodology directory; Also, despite the self explicatory name, it actually lie: there are no methodologies there yet.
2. Consider joining our [Mattermost chat](https://chat.securitywithoutborders.org/community/channels/trackingexposed) and reach out if you need any help.
