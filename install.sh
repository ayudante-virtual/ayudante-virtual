#!/bin/bash

VERSION='12_10_2'
DOWNLOAD_PATH="/tmp/botpress.zip"
wget -O /tmp/botpress.zip "https://s3.amazonaws.com/botpress-binaries/botpress-v$VERSION-linux-x64.zip"

unzip -q $DOWNLOAD_PATH -d src
