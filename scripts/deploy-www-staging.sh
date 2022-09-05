#!/bin/bash

# exit when any command fails
set -e

SHA=$(git rev-parse --short=12 HEAD)
PACKAGE='www'
DEPLOY_ENV='staging'
REGISTRY='europe-west2-docker.pkg.dev/kordio'

docker build \
  -t $REGISTRY/$DEPLOY_ENV/$PACKAGE:$SHA \
  -t $REGISTRY/$DEPLOY_ENV/$PACKAGE:latest \
  -f ./docker/${PACKAGE}/Dockerfile \
  --build-arg=API_ENDPOINT=https://api-md7qu4mnwq-nw.a.run.app
  --platform linux/amd64 .

docker push $REGISTRY/$DEPLOY_ENV/$PACKAGE:$SHA
docker push $REGISTRY/$DEPLOY_ENV/$PACKAGE:latest

# gcloud run deploy --image=$REGISTRY/$DEPLOY_ENV/$PACKAGE:latest --vpc-connector=$DEPLOY_ENV --max-instances=35 --min-instances=0