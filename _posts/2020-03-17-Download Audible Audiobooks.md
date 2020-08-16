---
layout: post
title: Download Audible Audiobooks (AAX to mp3)
caption: 
previewImg: /assets/pictures/
thumb:		/assets/pictures/
published: false
categories: []
tags: []
---

### 1. Download all your audiobooks
- go to audible.com
- click "Library" 
- there will be all audiobooks with a download button on the right
- download everything you want to your aax folder


### 2. Get the Key
- you need an identification key to your account do convert these aax files
- we will use a software from github here so if you dont have git installd you can do so by using `sudo apt install git`
- the software uses pip and Python (2.7 and up)
- the Chrome Driver I use here is 64bit so if you have a 32bit system or an other chrome version check [here](https://sites.google.com/a/chromium.org/chromedriver/downloads) for alternatives
- I will extract the Driver zip with 7z (`sudo apt install p7zip-full`)
- sadly it really runs in google-chrome not chromium so to install that:

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

```bash
git clone https://github.com/inAudible-NG/audible-activator.git #thats the Software
cd audible-activator 
pip install --user requests #these two are Requirements for this Software
pip install --user selenium
wget https://chromedriver.storage.googleapis.com/2.35/chromedriver_linux64.zip #that's a 64bit Chrome Driver
7z e chromedriver_linux64.zip #extract the .zip
./audible-activator.py --username=<your_username> --password=<your_password> # run the Script with your username and password
```
- that should open a new chrome window log you in, reload close again and end up with your code `activation_bytes: fxxxxxx4` 
- I had probles that the login had an "I'm a human check" if you have that and cant login use the -d flag (`./audible-activator.py --username=<your_username> --password=<your_password> -d`) which will wait for you to log in manually

### 3. actually converting stuff
- We'll need an other software from github here which hase some dependencies as well
- the standard converting mode is to mp3 with one file for each capital but [there](https://github.com/KrumpetPirate/AAXtoMP3) are many more options
- without any other flags you'll get an "Audiobook" folder containing the Books sorted by Auther in individual folders

```bash
sudo apt-get update
sudo apt-get install ffmpeg libav-tools x264 x265 bc #dependencies
git clone https://github.com/KrumpetPirate/AAXtoMP3.git #Converter
AAXtoMP3/AAXtoMP3 --authcode <authcode> ./*.aax #convert everything right here
```
### 4. runnig both programs should look something like this:
![example pic](/assets/pictures/AAX/example.png)

#### sauce:
- <https://github.com/KrumpetPirate/AAXtoMP3>
- <https://github.com/inAudible-NG/audible-activator>
- <https://itsfoss.com/install-chrome-ubuntu/>
- <https://linuxhint.com/install-7zip-compression-tool-on-ubuntu/>
- <https://code-bude.net/2017/02/12/audible-aax-dateien-in-mp3-umwandeln-unter-linux/>