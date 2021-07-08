---
title: Typography ― usages of all the shortcodes
subtitle: an internal page
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

[Check the code of this file](https://github.com/tracking-exposed/youtube.tracking.exposed/blob/master/content/typography.md).

--- 

## 1. bord-img.html

It return a picture with a small red border. The code is:
```
{{ < bord-img href="/images/ytws20-method.png" > }}
```
{{<bord-img href="/images/ytws20-method.png">}}

## 2. boxes.html

Write a box with one of the color theme. 
```
{{ < boxes text="this is a simple lorem ipsum but in poor English" color="primary" > }}
```

{{<boxes text="this is a simple lorem ipsum but in poor English" color="primary">}}
{{<boxes text="this is the same of above but as color is 'secondary'" color="secondary">}}

## 3. colorblock.html

This is the same as above, but with `<h3 text-align="center">` instead of `<p>`.

{{<colorblock text="this is a simple lorem ipsum but in poor English" color="primary">}}
{{<colorblock text="this is the same of above but as color is 'secondary'" color="secondary">}}

## 4. entry.html

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

## 5. fb-extension.html

Doesn't take any argument!

```
{{ < fb-extension > }}
```

{{<fb-extension>}}

## 6. po-extension.html

Same for PH
```
{{ < po-extension > }}
```

{{<po-extension>}}

## 7. yt-extension.html

Same for YT
```
{{ < yt-extension > }}
```

{{<yt-extension>}}

## 8. filterbox.html

## 9. halfentry.html

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

## A. researchCard.html
## B. resource.html

The `resource` is used in [analysis and publication](/analysis-and-publication) and originally comes from [fbtrex analysis and publication](https://facebook.tracking.exposed/analysis-and-publication). Here is the option list:

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

## C. shared-yt-services.html

{{<shared-yt-services>}}

## D. simplepict.html

This simply embed at maximumg width a picture in the page 
```
{{ < simplepict href=""> }}
```

{{<simplepict href="/images/wetest-youtrust.jpg">}}

## E. sponsor.html

this might be rendered as a bootstrap card, but expand to 100% when used alone.

```
<div class="card-deck">
  {{ < sponsor
      title="European Research Council"
      text="ALEX is the name of the academic project sponsored, and is host in the University of Amsterdam"
      subtitle="Our goal is to stabilize the analysis, offer a product for researchers and skilled users, the privacy preserving access logic to the database."
      href="https://erc.europa.eu/news/erc-proof-concept-grant-examples-research-projects-2-round"
      linked="The official announcement"
      picture="/images/sponsors/ERC-bianco.jpg" > }}
</div>

```

<div class="card-deck">
  {{< sponsor
      title="European Research Council"
      text="ALEX is the name of the academic project sponsored, and is host in the University of Amsterdam"
      subtitle="Our goal is to stabilize the analysis, offer a product for researchers and skilled users, the privacy preserving access logic to the database."
      href="https://erc.europa.eu/news/erc-proof-concept-grant-examples-research-projects-2-round"
      linked="The official announcement"
      picture="/images/sponsors/ERC-bianco.jpg" >}}
  {{< sponsor
      title="European Research Council"
      text="ALEX is the name of the academic project sponsored, and is host in the University of Amsterdam"
      subtitle="Our goal is to stabilize the analysis, offer a product for researchers and skilled users, the privacy preserving access logic to the database."
      href="https://erc.europa.eu/news/erc-proof-concept-grant-examples-research-projects-2-round"
      linked="The official announcement"
      picture="/images/sponsors/ERC-bianco.jpg" >}}
  {{< sponsor
      title="European Research Council"
      text="ALEX is the name of the academic project sponsored, and is host in the University of Amsterdam"
      subtitle="Our goal is to stabilize the analysis, offer a product for researchers and skilled users, the privacy preserving access logic to the database."
      href="https://erc.europa.eu/news/erc-proof-concept-grant-examples-research-projects-2-round"
      linked="The official announcement"
      picture="/images/sponsors/ERC-bianco.jpg" >}}
</div>


<br />
They are repeated three times otherwise it scale up to width 100%.

## F. trexproj.html

Another card used in a card-deck:

<div class="card-deck">
  {{<trexproj
      href="https://facebook.tracking.exposed"
      desc="Analyze the Facebook algorithm by compare your informative experience; Reuse the data in creative ways"
      suffix="facebook.svg"
      bgcolor="#3b5898" >}}
  {{<trexproj
      href="https://youtube.tracking.exposed"
      desc="Anyone has a unique list of recommended videos. Compare with your friends or join experiment group"
      suffix="youtube.svg" >}}
  {{<trexproj
      href="https://pornhub.tracking.exposed"
      desc="The biggest Adult content portal! what they do to raise engagement? We don't know yet"
      bgcolor="#1b1b1b"
      suffix="pornhub.svg" >}}
</div>


## G. clickable-card.html
Yet another card, where the image and the title is clickable

```
<div class="card-deck">
  {{< clickable-card
      title="Facebook"
      text="Don't take Zuck's word for granted."
      href="https://facebook.tracking.exposed"
      picture="/images/marc.jpeg" >}}

  {{< clickable-card
      title="PornHub"
      text="Expose what the heck is going on in porn algorithm"
      href="https://pornhub.tracking.exposed"
      picture="/images/claudio.jpeg" >}}
      
</div>
```

<div class="card-deck">
  {{< clickable-card
      title="Facebook"
      text="Don't take Zuck's word for granted."
      href="https://facebook.tracking.exposed"
      picture="/images/marc.jpeg" >}}

  {{< clickable-card
      title="PornHub"
      text="Expose what the heck is going on in porn algorithm"
      href="https://pornhub.tracking.exposed"
      picture="/images/claudio.jpeg" >}}
      
</div>



## 10. ytbox isn't reported yet
