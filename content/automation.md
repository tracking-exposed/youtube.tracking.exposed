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

# [Install nodejs in your system](https://nodejs.org/en/download://nodejs.org/en/download/)

# Copy the git repository locally

* download: https://github.com/tracking-exposed/yttrex/archive/master.zip
* unpack the .zip in the `methodology/extension` directory. _You should see manifest.json in the extension directory_.

# Things to know about the script `src/guardoni.js`

1. it have to follow a list of URL retrieved from a JSON list reachable on the web. You can decide which URL, we offer two of them as default: [conservative](https://youtube.tracking.exposed/bin/conservative-filtertube.json), [progressive](https://youtube.tracking.exposed/bin/progressive-filtertube.json).
2. you have to create a directory where the chrome-profile would live. we suggest to create a directory in `methodology/profiles/`
3. you have to download a .zip (the browser extension of [youtube.tracking.exposed](/)) and unpack it `methodology/extension/`

What you're ready, guardoni.js is a script that uses puppeteer and automate chrome.
for our video we configured the method to watch them till the end. In other pages and other cases you might want to train your profile

# Examples

`node scr/guardoni.js --source https://youtube.tracking.exposed/bin/conservative-filtertube.json --profile profiles/conservative1`

or, if you enable debug:

`DEBUG=*,-puppeteer:* node src/guardoni.js --source https://youtube.tracking.exposed/bin/progressive-filtertube.json --profile profiles/progressive1`
