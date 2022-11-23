#!/usr/bin/sh

set -ex

export taboule_build=$1;


cp $taboule_build/taboule.css ./static/css/taboule.css
cp $taboule_build/taboule.js ./static/js/generated/taboule.js