---
title: Typography ― usages of all the shortcodes
subtitle: Dah
date: 2020-10-01T15:01:21+01:00
draft: false
---

#### trex Hugo theme has a few shortcodes, here they are summarized:

* bord-img.html
* boxes.html
* colorblock.html
* entry.html
* fb-extension.html
* filterbox.html
* halfentry.html
* po-extension.html
* researchCard.html
* resource.html
* shared-yt-services.html
* simplepict.html
* sponsor.html
* trexproj.html
* yt-extension.html

--- 

## bord-img.html

It return a picture with a small red border. The code is:
```
{{ < bord-img href="/images/ytws20-method.png" > }}
```
{{<bord-img href="/images/ytws20-method.png">}}

## boxes.html

Write a box with one of the color theme. 
```
{{ < boxes text="this is a simple lorem ipsum but in poor English" color="primary" > }}
```

{{<boxes text="this is a simple lorem ipsum but in poor English" color="primary">}}
{{<boxes text="this is the same of above but as color is 'secondary'" color="secondary">}}

## colorblock.html

This is the same as above, but with `<h3 text-align="center">` instead of `<p>`.

{{<colorblock text="this is a simple lorem ipsum but in poor English" color="primary">}}
{{<colorblock text="this is the same of above but as color is 'secondary'" color="secondary">}}

## entry.html

```
{{ <entry
    title="This is the title of the picture"
    text="This is a descriptive text, it can be on the left or right size. In the legend there is a separated picture"
    picture="/images/yt-results/bubble-graph-political.svg"
    type="left"
    legend-image-url="/images/yt-results/fixed-legend-1,2.svg" > }}
```

{{<entry
    title="This is the title of the picture"
    text="This is a descriptive text, it can be on the left or right size. In the legend there is a separated picture"
    picture="/images/yt-results/bubble-graph-political.svg"
    type="left"
    legend-image-url="/images/yt-results/fixed-legend-1,2.svg">}}

## fb-extension.html

Doesn't take any argument!

```
{{ < fb-extension > }}
```

{{<fb-extension>}}

## po-extension.html

Same for PH
```
{{ < po-extension > }}
```

{{<po-extension>}}

## yt-extension.html

Same for YT
```
{{ < yt-extension > }}
```

{{<yt-extension>}}

## filterbox.html

## halfentry.html

```
{{ < halfentry
    title="The secret algorithm behind the related videos is a method to maximize engagement; that's our target."
    content="Algorithms are a known problem since a while, but it might look like we are not doing much against surveillance capitalism. Tracking Exposed has an actionable plan, and experiences built on testing Facebook algorithm black-box." 
    picture="/images/yt-results/lead_art_algorithm_VOX.jpg" 
    type="right" 
    link="https://www.vox.com/technology/2018/10/1/17882340/how-algorithms-control-your-life-hannah-fry" 
    description="“How algorithms are controlling your life”." 
    credit="Christina Animashaun/Vox" > }}
```

{{<halfentry title="The secret algorithm behind the related videos is a method to maximize engagement; that's our target." content="Algorithms are a known problem since a while, but it might look like we are not doing much against surveillance capitalism. Tracking Exposed has an actionable plan, and experiences built on testing Facebook algorithm black-box." picture="/images/yt-results/lead_art_algorithm_VOX.jpg" type="right" link="https://www.vox.com/technology/2018/10/1/17882340/how-algorithms-control-your-life-hannah-fry" description="“How algorithms are controlling your life”." credit="Christina Animashaun/Vox">}}

## researchCard.html
## resource.html

Because there are many options, this is an experiment to see if suits better
```
{{ $nature := .Get "nature" }}
{{ $title:= .Get "title" }}
{{ $when := .Get "when" }}
{{ $description := .Get "description" }}
{{ $href := .Get "href" }}
{{ $kind := .Get "kind" }}
{{ $author := .Get "author" }}
{{ $authors := .Get "authors" }}
{{ $authorLink := .Get "authorLink" }}
{{ $language := .Get "language" }}

{{ $resource1 := .Get "resource1" }}
{{ $resource1href := .Get "resource1href" }}
{{ $resource2 := .Get "resource2" }}
{{ $resource2href := .Get "resource2href" }}
{{ $resource3 := .Get "resource3" }}
{{ $resource3href := .Get "resource3href" }}
```

{{<resource
  kind="article"
  when="January"
  title="Youtube Tracking Exposed — DMI UvA Winter School Tutorial"
  authors="Salvatore Romano"
  description="Tutorial to explain the possible uses of the ytTREX tool, try it at https://youtube.tracking.exposed"
  resource1="Tutorial slides"
  resource1href="https://prezi.com/view/KqmfljOsE8HYvyT7TqGE">}}

## shared-yt-services.html

{{<shared-yt-services>}}

## simplepict.html

## sponsor.html

## trexproj.html
