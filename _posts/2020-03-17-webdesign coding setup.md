---
layout: post
title: webdesign coding setup
caption: 
previewImg: /assets/pictures/
thumb:		/assets/pictures/
published: false
categories: []
tags: []
---

Sublime:
$ wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add - 
$ echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
$ sudo apt update && sudo apt install sublime-text

SCSS:
sudo apt install npm
sudo npm install -g sass

scss syntax in sublime:
Ctrl + Shift + P
package control: install package
SCSS
Ctrl + Shift + P
Set syntax: SCSS

sass --watch style.scss style.css

local server:
sudo python3 -m http.server 80
sets up an http server in the current folder on http://0.0.0.0:80/
or
python -m SimpleHTTPServer 8000

live updates:
`<script type="text/javascript" src="http://livejs.com/live.js"></script>`
