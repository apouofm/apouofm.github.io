---
layout: page
title: News
---

## News & Updates

{% for post in site.posts %}

## [{{ post.title }}]({{ post.url }})

{{ post.date | date: "%B %-d, %Y" }}

{{ post.excerpt }}
{% endfor %}
