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

---
# TBC
---

## filterbox.html


## halfentry.html
## researchCard.html
## resource.html
## shared-yt-services.html
## simplepict.html
## sponsor.html
## trexproj.html
