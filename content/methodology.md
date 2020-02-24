---
title: Tools and commands for automated yt testing
subtitle: SeleniumHQ and our scripts explained here
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


### Clone the yttrex development package


This is our [repository](https://github.com/tracking-exposed/yttrex), please fetch latest version and then 

    cd yttrex
    cd methodology


Here you can find our scripts for automatic execution:

    python3 src/experiment1.py

Would run the initial experiment, save some files in 'experiment1.dump/'
