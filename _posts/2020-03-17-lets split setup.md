---
layout: post
title: Let's Split setup
caption: 
previewImg: /assets/pictures/
thumb:		/assets/pictures/
published: false
categories: []
tags: []
---

Let's split, USB in left half tutorial
 
 
>sudo apt-get update
updates repository packages
 
> sudo apt-get install git cmake make build-essential autoconf gcc-avr binutils-avr gdb-avr avr-libc avrdude libusb-dev libusb-1.0-0-dev
that installs stuff and makes the make work
 
> cd
Goes into your home directory (for example /home/Hisfantor)
 
> git clone https://github.com/qmk/qmk_firmware.git QMK
clones the qmk from github into the folder QMK under /home/Hisfantor
(So it's /home/Hisfantor/qmk)
 
> cd qmk
go into the qmk folder
 
> sudo make lets_split/rev2:default
that should create the .hex for the default layout of lets_split
 
> make git-submodules
if he wants them give him what he needs
probably wont work
If it doesn't work, try make again(always from the qmk folder)
 
> ls /dev/tty*
there should be a ttyACM0 or something, thats the pro micro in bootloader
Remember, it's there only for approx 7 seconds
 
> sudo avrdude -p atmega32u4 -P /dev/ttyACM0 -c avr109 -U flash:w:lets_split_rev2_default.hex
that will flash the pro micro but make sure you are in bootloader mode have only one half connected and no aux(klinke) in