#!/bin/bash

# exit when any command fails
set -e

SHA=$(git rev-parse --short=12 HEAD)
PACKAGE='www'
DEPLOY_ENV='production'
API_ENDPOINT='https://kordio.co/api'
REGISTRY='europe-west2-docker.pkg.dev/kordio'

docker build \
  -t $REGISTRY/$DEPLOY_ENV/$PACKAGE:$SHA \
  -t $REGISTRY/$DEPLOY_ENV/$PACKAGE:latest \
  -f ./docker/${PACKAGE}/Dockerfile \
  --build-arg=API_ENDPOINT=$API_ENDPOINT \
  --build-arg=DEPLOY_ENV=$DEPLOY_ENV \
  --platform linux/amd64 .

docker push $REGISTRY/$DEPLOY_ENV/$PACKAGE:$SHA
docker push $REGISTRY/$DEPLOY_ENV/$PACKAGE:latest

gcloud run deploy $PACKAGE-$DEPLOY_ENV --image $REGISTRY/$DEPLOY_ENV/$PACKAGE:$SHA --region europe-west2