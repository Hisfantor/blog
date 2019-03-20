---
layout: post
title: bash alias in rofi
caption: define bash aliases and run them from rofi
previewImg: /assets/pictures/bash alias in rofi/bash alias in rofi.png
thumb:      /assets/pictures/bash alias in rofi/bash alias in rofi_thumb.png
published: false
categories: [linux]
tags: [ubuntu, rofi, bash]
---

# Dependencies:

* rofi
* bash shell


# Setup:

first create your bash alias file\(\~/.bash\_aliases\):

    alias | awk -F'[ =]' '{print $2}'
    alias wpr='~/.config/i3/wp.sh'

the first line is for rofi to know how aliases look like

the second line is an example alias

make sure that your bashrc\(\~/.bashrc\) is looking for your file\(.bash\_aliases\):

    # Alias definitions.
    # You may want to put all your additions into a separate file like
    # ~/.bash_aliases, instead of adding them here directly.
    # See /usr/share/doc/bash-doc/examples in the bash-doc package.
    if [ -f ~/.bash_aliases ]; then
        . ~/.bash_aliases
    fi

and last you have to configure your run command like this:

    rofi -run-list-command ". ~/.bash_aliases" -run-command "/bin/bash -i -c '{cmd}'" -show run

I use i3wm so I add in my config\(.config/i3/config\):

    bindsym $mod+d exec rofi -run-list-command ". ~/.bash_aliases" -run-command "/bin/bash -i -c '{cmd}'" -show run


# Explanation:

1. .bashrc gets the bash aliases via .bash\_aliases
2. rofi knows what aliases are withe the first line in .bash\_aliases
3. the rofi run command is configured too look up .bash\_aliases and include them in run
