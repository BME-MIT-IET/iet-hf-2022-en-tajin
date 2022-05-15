#!/bin/bash

docker build -t domurl-image .
docker run -d --name domurl-image -p 8081:8081 domurl-image
docker container ls 
docker rm -f domurl-image
