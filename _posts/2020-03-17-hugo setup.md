---
layout: post
title: hugo setup
caption: 
previewImg: /assets/pictures/
thumb:		/assets/pictures/
published: false
categories: []
tags: []
---

sudo apt install hugo
hugo version
hugo new site newsitename

hugo new posts/first-post.md
vim content/posts/first-post.md

hugo server
git init
git submodule add *theme github clone* themes/themename
cp themes/dracula/exampleSite/* . -r
change in config.toml themesDir, theme, baseurl

config.toml add publishDir = "docs"
hugo

git remote add origin *new github repo*
git add --all
git commit -m "first-commit"
git push origin master