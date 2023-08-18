FROM node:18-alpine

WORKDIR /app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json

RUN npm install npm \
  &&  npm install ejs \
  &&  npm install next \
  &&  npm install react \
  &&  npm install react-dom \
  &&  npm install create-next-app \
  &&  npm install defu

RUN apk add --no-cache bash

ADD . /app

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]