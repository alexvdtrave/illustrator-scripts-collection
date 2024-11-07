#!/bin/bash

echo "Updating libs"
ncu -u
npm i

echo "Commit updated libs"
git add package*.json
git commit -m "Update libs"

