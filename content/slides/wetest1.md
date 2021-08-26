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

<section class="ytbackground">

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

<script>
  removeHeaderFooter(1500)

  $(document).ready(function() {
      let visibleFooter = false;
      /* if the mouse goes out, for four second leave the bar */
      $(document).mouseleave(function() {
        $('header').fadeIn(300);
        window.setTimeout(function() {
          $('header').fadeOut(300);
        }, 4000);
      });
      $("#final-slide").on('mousemove', function() {
        visibileFooter = !visibleFooter && restoreHeaderFooter(800);
      });
    }
  );
</script>