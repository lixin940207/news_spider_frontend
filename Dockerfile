FROM node:16.13.2-slim
ENV NODE_ENV=production

ARG Version=1.0.0

LABEL name="news_spider_frontend"
LABEL version=$Version

RUN mkdir /news_spider_frontend
COPY ./package.json /news_spider_frontend/
COPY ./yarn.lock /news_spider_frontend/

WORKDIR /news_spider_frontend

RUN apt-get update \
    && apt-get install -y --no-install-recommends apt-utils python3 build-essential git ca-certificates \
    && yarn cache clean \
    && yarn install --network-concurrency 1 --production\
    && yarn cache clean \
    && apt-get autoremove --purge -y python3 build-essential git \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["npm", "start"]