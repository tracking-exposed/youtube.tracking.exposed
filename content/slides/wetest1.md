---
title: "slides weTEST1"
subtitle: "summary of weTEST1"
draft: false
date: "2021-08-25"
og_title: "Summary and findings, weTEST#1"
og_type: "website"
og_image: "http://youtube.tracking.exposed/images/compare.jpg" 
og_url: "https://youtube.tracking.exposed/slides/wetest1"
og_description: "The 25th of March, the first collaborative observation of Youtube personalization algorithm regardless of Covid-19"
type: "webslides"

extraCSS: "/css/slides.css"
---

  <section class="bg-yt">
    <div class="aligncenter">
      <h1 class="primary"><b>WEtest YOUtube</b></h1>
      <br>
      <p class="text-symbols">* * * </p>
      <p class="text-intro third">
          A collaborative observation of the Youtube algorithm during the Covid pandemic.
          <br>
          (<a href="https://www.researchgate.net/profile/Leonardo-Sanna-2/publication/351285419_YTTREX_crowdsourced_analysis_of_YouTube's_recommender_system_during_COVID-19_pandemic/links/60900733a6fdccaebd057c0b/YTTREX-crowdsourced-analysis-of-YouTubes-recommender-system-during-COVID-19-pandemic.pdf" target=_blank class="primary">Academic publication</a>)
          (<a href="/wetest/1/" target=_blank class="primary">Call to action</a>)
          (<a href="wetest/announcement-1/" target=_blank class="primary">Project updates</a>)
      </p>
    </div>
  </section>

<section>
  <div class="aligncenter">
    <h2 class="primary"> March 25th 2020 we openly asked to: </h2> 
    <br><br><br><br>
    <div class="row mb-5 mt-5">
      <div class="col-sm text-center">
        <img src="/images/slides/slide1.png"><br><br>
        <h4>Add the <a href="https://addons.mozilla.org/en-US/firefox/addon/yttrex/"> Youtube.tracking.exposed </a> browser extension. </h4>
        <h5> Go on Youtube.com, logged or not. </h5>
      </div>
      <div class="col-sm text-center">
        <img src="/images/slides/slide2.png"><br><br>
        <h4> Watch five BBC videos about Covid-19 on Youtube. </h4>
        <h5> In five different languages. </h5>
      </div>
      <div class="col-sm text-center">
        <img src="/images/slides/slide3.png"><br><br>
        <h4>All togheter, compare the algorithm suggestion.</h4>
        <h5>And learn how to wash hands.</h5>
      </div>
    </div>
  </div>
</section>

<section>
    <div class="card-40 bg-yt fadeInUp">
      <figure> <img src="/images/covid.png"> </figure>
      <div class="flex-content">
        <h2>What we observe:</h2>
        <ul class="description">
          <li><strong class="text-label third">Recommended videos:</strong> where the personalization algorithm takes action</li>
          <li><strong class="text-label third">Comparing participants:</strong> where the personalization algorithm takes action</li>
          <li><strong class="text-label third">Videos:</strong> we decided to compare one video uploaded 11 years ago with a 24 hours old one to see if there were any differences</li>
        </ul>
      </div>
  </div>
</section>

<section>
<span class=background style="background-image:url('/images/smoke.jpeg'"></span>
  <div class="wrap">
   <h1 class="secondary">ANONYMIZATION PROCESS</h1>
    <ul class="flexblock metrics">
      <li>
        <h3>01. Unique and secret token</h3>
        <p>Every participant has a unique code attributed to download his/her evidences</p>
      </li>
      <li>
        <h2>02. Your choice</h2>
        <p>With the token, participants can manage the data provided: visualize, download or delete</p>
      </li>
      <li>
        <h2>03. Not our customer</h2>
        <p>We are not obsessed by you ;) We don't collect any data about your location, your friends and so on</p>
      </li>
      <li>
        <h2>04. WEstudy YOUtube </h2>
        <p>We collect evidence about the suggestions made by the algorithm, like recommended videos</p>
      </li>
    </ul>
  </div>
</section>




<!--
<section class="">

# Problem

**Algorithms are the gatekeepers** of YouTube.

The various search and recommendation engines select [more than 70%](https://www.journalism.org/wp-content/uploads/sites/8/2020/09/Many-Americans-Get-News-on-YouTube-Where-News-Organizations-and-Independent-Producers-Thrive-Side-by-Side.pdf) of the content viewed on the platform.

Yet, these opaque systems have serious drawbacks:
* They favor clickbaity and sensationalist content
* They are not accountable and hardly customizable
* Their results are confined within YouTube.com
- - -
### ➜ An AI with misaligned interest decides most of what people watch.

</section><section>

<div class="grid">
<div class="column">

# UN ACCA1

</div><div class="column">

Questo testo deve stare [sulla](/) estra perchè c'è image--left e quindi il testo è sulla destra

</div><div class="column">

* anche un elenco
* puntato
* [linkato](/).

</div>
</div>
</section>

-->

<script>
  removeHeaderFooter(1500)

  $(document).ready(function() {
      let visibleFooter = false;
      /* if the mouse goes out, for four second leave the bar */
      $(document).mouseleave(function() {
        $('header').fadeIn(40);
        window.setTimeout(function() {
          $('header').fadeOut(40);
        }, 4000);
      });
      $("#final-slide").on('mousemove', function() {
        visibileFooter = !visibleFooter && restoreHeaderFooter(800);
      });
    }
  );
</script>
