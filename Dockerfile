FROM node:16.13.2-slim
ENV NODE_ENV=production

ARG Version=1.0.0

LABEL name="news_spider_frontend"
LABEL version=$Version

RUN mkdir /news_spider_frontend
COPY ./package.json /news_spider_frontend/
COPY ./package-lock.json /news_spider_frontend/

WORKDIR /news_spider_frontend

RUN npm install --production

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD ["npm", "start"]