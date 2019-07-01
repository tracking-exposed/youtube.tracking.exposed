---
title: The last videos collected
date: 2019-05-22T15:01:21+01:00
draft: false
description: The last videos collected
type: app
---

<div class="container">
    <div id="recent"></div>
</div>

<script type="text/javascript">

    $( document ).ready(function() {
        function unfoldRelated(memo, e) {
            let add = `
                <small class="related">
                    <b>${e.index}</b>:
                    <span>${e.title}</span>
                    <a href="/yttrex/related/#${e.videoId}">See related</a> |
                    <a target=_blank href="https://www.youtube.com/watch?v=${e.videoId}">See video</a>
                </small><br />
            `;
            memo += add;
            return memo;
        }

        function initLast() {
            $.getJSON('https://youtube.tracking.exposed/api/v1/last', function(recent) {
                _.each(recent.content, function(item) {
                    let relates = _.reduce(item.related, unfoldRelated, "");
                    let h = `
                    <p class="last mt-5">
                        <code>${item.timeago}</code>
                        <b>${item.title}</b>
                        <a class="title" href="/yttrex/compare/#${item.videoId}">See related</a>
                    </p>
                    ${relates}

                `;
                    $('#recent').append(h);
                });

            });
        }
        initLast();


    });
</script>
