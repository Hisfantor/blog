#!/bin/bash
fullfilename=$1
filename=$(basename "$fullfilename")
fname="${filename%.*}"
mkdir ${fname}
convert ${fname}.png -resize 80x80 ${fname}/${fname}_thumb.png

mv ${1} ${fname}/${1}
