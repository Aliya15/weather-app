#!/bin/bash

# Extract the version value from the JSON file using grep and store it in a variable
VERSION=$(grep -Eo '"version":.*?[^\\]",' package.json | awk -F'"' '{print $4}')
APP_NAME=$(grep -Eo '"name":.*?[^\\]",' package.json | awk -F'"' '{print $4}')

echo $APP_NAME $VERSION

# Build
docker build -t $APP_NAME:$VERSION -t $APP_NAME:latest --no-cache .

# Push
docker push $APP_NAME:latest
docker push $APP_NAME:$VERSION
