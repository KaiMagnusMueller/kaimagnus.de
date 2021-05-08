---
layout: article
title:  "Destinations website draft"
categories: [articles]
tags: []
course:
prefix: zokei
custom_style:
custom_js:
description: ""

header_caption:
---

After researching different options, like embedding a third-party comment system, I came across PHP. Our web server already supports it and after reading the documentation it turned out to be pretty powerful and suited for our task. 

I favor this self-made approach for a couple of reasons, the biggest being simplicity. Embedding other services comes with a lot of overhead and would detract from this carefully designed experience that we built. Suddenly, the messages from our users would be stored on third-party servers and loading an external JavaScript-based framework would be a lot slower. Considering our website consists of static HTML, that would have a major impact on our page speed. 
