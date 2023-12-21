#!/bin/bash
git pull
sudo npm install # yarn이나 npm 둘 다 하나만
pm2 restart main