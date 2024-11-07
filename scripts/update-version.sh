#!/bin/bash

PKG_VERSION=$(jq ".version" package.json)
PKG_VERSION=${PKG_VERSION//\"/}
echo -e "Old version:\t$PKG_VERSION"

VERSION=(${PKG_VERSION//\./ })
VERSION[2]=$((VERSION[2] + 1))

NEW_VERSION="${VERSION[0]}.${VERSION[1]}.${VERSION[2]}"
echo -e "New version:\t$NEW_VERSION"

# jq ".version=\"${NEW_VERSION}\"" package.json
cat <<< $(jq ".version=\"${NEW_VERSION}\"" package.json) > package.json
npm i

git add package*.json
git commit -m "Update version"