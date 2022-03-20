FROM node:16.3.0-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

RUN yarn install --ignore-platform

COPY . .

EXPOSE 3001

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT=3001

CMD [ "yarn", "dev" ]
