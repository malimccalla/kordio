#!/bin/bash

# exit when any command fails
set -e

SHA=$(git rev-parse --short=12 HEAD)
PACKAGE='api'
DEPLOY_ENV='production'
REGISTRY='europe-west2-docker.pkg.dev/kordio'

docker build -t $REGISTRY/$DEPLOY_ENV/$PACKAGE:$SHA -t $REGISTRY/$DEPLOY_ENV/$PACKAGE:latest -f ./docker/api/Dockerfile --platform linux/amd64 .

docker push $REGISTRY/$DEPLOY_ENV/$PACKAGE:$SHA
docker push $REGISTRY/$DEPLOY_ENV/$PACKAGE:latest

gcloud run deploy $PACKAGE-$DEPLOY_ENV --image $REGISTRY/$DEPLOY_ENV/$PACKAGE:$SHA --region europe-west2
