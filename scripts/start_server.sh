#!/bin/bash

cd /var/sampleNodeJsServer

sudo npm install

sudo npm run pm2stop

sudo npm run build

sudo npm run pm2start
