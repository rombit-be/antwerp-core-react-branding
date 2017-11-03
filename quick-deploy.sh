#!/bin/bash

MESSAGE=$1

yarn build
git add -A
git commit -m "$MESSAGE"
npm version patch -m "$MESSAGE"
git push
git checkout master
git merge development
git push github master
