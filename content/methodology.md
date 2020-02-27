---
title: Tools and commands for automated youtube testing
date: 2020-02-22T22:22:22+00:00
draft: false
description: technical references for researcher using selenium and other automation tool

og_title: "ytTREX - automation and testing" 
og_type: "website"
og_image: "http://youtube.tracking.exposed/yttrex-logo.jpg"
og_url: "https://youtube.tracking.exposed/methodology"
og_description: "When testing youtube you might want to mix actual people with synthetic access, here is provided our script and method"
---

### Install selenium for python3 in your system:


    sudo pip3 install -U selenium 
    sudo apt install firefox-geckodriver

### Browser extension

Clone the yttrex development package. This is our [repository](https://github.com/tracking-exposed/yttrex), please fetch latest version and then 

    cd yttrex/extension
    npm i
    npm run build:dist

You should have the file `dist/extension.zip` at the end of this process.

    cd ../..
    cd yttrex/methodology

Here you can find our scripts for automatic execution:

    python3 src/experiment1.py config/example.txt

Would run the initial experiment. This should save a few evidence in:

  * directory `snaps/` it is a small screenshot took from the video player. Each 4 seconds a new snap is taken, it might help in rebuild the video in a low res animated gif.
  * directory `profiles/` would initialize a profile with the same name of the config file (**example**, in the test case).


### How to use it

As part of our initial test, we had a list of youtube video. This list is meant to be watched by selenium, recorded by youtube.tracking.exposed, and the outcomes are two:

  * We have an observation on how youtube personalized the video for our dummy profile (it might have not representative meaning)
  * We have a profile under our control who youtube profile in the way we want.
  * It is reproducible, if you want to have more than one profile *profiled* in the same way
  * It is reproducible in time, to check how quickly *related content* change.


### Our first usage

    20164 ۞  ~/Dev/yttrex/methodology$ more config/*
    ::::::::::::::
    config/example.txt
    ::::::::::::::
    https://www.youtube.com/watch?v=qaM80BjvLuA
    https://www.youtube.com/watch?v=6McuxV0Krxw
    ::::::::::::::
    config/fanpage.txt
    ::::::::::::::
    https://www.youtube.com/watch?v=qTUeLqdzQWQ
    https://www.youtube.com/watch?v=NpZLioKkN40
    https://www.youtube.com/watch?v=PQoHvj_NCr0
    https://www.youtube.com/watch?v=NpZLioKkN40
    https://www.youtube.com/watch?v=BazmarBhi6g
    ::::::::::::::
    config/fqdn.txt
    ::::::::::::::
    https://www.youtube.com/watch?v=_9AzpWcXXYc
    https://www.youtube.com/watch?v=julKflWoINM
    https://www.youtube.com/watch?v=YrJT_diME8g
    https://www.youtube.com/watch?v=4H0mdfD36uM
    https://www.youtube.com/watch?v=zMO6QXrI2P4
    ::::::::::::::
    config/pupia.txt
    ::::::::::::::
    https://www.youtube.com/watch?v=3vzRGbuQlG0
    https://www.youtube.com/watch?v=7xbMnOzXwgg
    https://www.youtube.com/watch?v=l9iDoAq2Gt0
    https://www.youtube.com/watch?v=4H0mdfD36uM
    https://www.youtube.com/watch?v=Q-DFgTwISOs
    ::::::::::::::
    config/repubblica.txt
    ::::::::::::::
    https://www.youtube.com/watch?v=4I7pmACLEhY
    https://www.youtube.com/watch?v=klM1h_vtx24
    https://www.youtube.com/watch?v=D_7rWrDYZWw
    https://www.youtube.com/watch?v=HVO_1KdLJ3U
    https://www.youtube.com/watch?v=t3LHjuudCDU


As shared in the [github pull request](https://github.com/tracking-exposed/yttrex/pull/17) for this feature, we will test this tool with this method:

  * pick five mainstream topics in the political debate
  * pick four newspaper (fanpage, fqdn, pupia, repubblica) belonging to different political areas
  * pick one video per topic per newspaper

The first execution might often fail this way:

    20167 ۞  ~/Dev/yttrex/methodology$ python3 src/experiment1.py config/fqdn.txt 
    You should copy the master directory in yttrex/methodology/profiles/fqdn

The master directory is located in `profiles/MASTER`

    20168 ۞  ~/Dev/yttrex/methodology$ cd profiles/
    20169 ۞  ~/Dev/yttrex/methodology/profiles$ cp -r MASTER/ fqdn
    20170 ۞  ~/Dev/yttrex/methodology/profiles$ cd ..

Then you can run the command:

    20171 ۞  ~/Dev/yttrex/methodology$ python3 src/experiment1.py config/fqdn.tx

To open more than one directory in parallel run the command:

    20171 ۞  ~/Dev/yttrex/methodology$ ((python3 src/experiment1.py config/fqdn & );(python3 src/experiment1.py config/repubblica & );

This should:

  * Open a chrome window with the first video open
  * Click on "start video" automatically and watch it
  * Record the evidence on youtube.tracking.exposed
  * When the video is done reproducing, the next one will be open
  * Record screencaputre of the video frame every five seconds.

The directory `snaps/` keep the snapshots:


    20090 ۞  ~/Dev/yttrex/methodology$ ls -l snaps/
    total 40
    drwxr-xr-x 2 oo oo  4096 fev 25 11:06 example
    drwxr-xr-x 2 oo oo  4096 fev 26 12:50 fanpage
    drwxr-xr-x 2 oo oo 20480 fev 26 12:50 fqdn
    drwxr-xr-x 2 oo oo  4096 fev 26 12:50 pupia
    drwxr-xr-x 2 oo oo  4096 fev 26 12:30 repubblica
    20091 ۞  ~/Dev/yttrex/methodology$ ls -l snaps/fanpage/
    total 32224
    -rw-r--r-- 1 oo oo  987781 fev 26 12:45 fanpage-1-preview.png
    -rw-r--r-- 1 oo oo  732432 fev 26 12:46 fanpage-1-snap-10.png
    -rw-r--r-- 1 oo oo  960302 fev 26 12:46 fanpage-1-snap-11.png
    -rw-r--r-- 1 oo oo  492212 fev 26 12:46 fanpage-1-snap-12.png
    -rw-r--r-- 1 oo oo  432037 fev 26 12:46 fanpage-1-snap-13.png
    -rw-r--r-- 1 oo oo  641378 fev 26 12:46 fanpage-1-snap-14.png
    -rw-r--r-- 1 oo oo  405199 fev 26 12:46 fanpage-1-snap-15.png
    -rw-r--r-- 1 oo oo  468967 fev 26 12:47 fanpage-1-snap-16.png
    -rw-r--r-- 1 oo oo  572512 fev 26 12:47 fanpage-1-snap-17.png
    -rw-r--r-- 1 oo oo  762689 fev 26 12:47 fanpage-1-snap-18.png
    -rw-r--r-- 1 oo oo  496448 fev 26 12:47 fanpage-1-snap-19.png
    -rw-r--r-- 1 oo oo  689359 fev 26 12:45 fanpage-1-snap-1.png
    ...

### How to access and use the data collected

**TBC**


