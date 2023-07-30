# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo


RUN npm install npm \
  &&  npm install ejs \
  &&  npm install next \
  &&  npm install react \
  &&  npm install react-dom \
  &&  npm install create-next-app \
  &&  npm install defu

RUN apk add --no-cache bash

ADD . /app