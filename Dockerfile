FROM node:14.15.3-alpine as base
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

FROM base as development
ENV NODE_ENV=development
COPY . /usr/src/app

FROM base as production
ENV NODE_ENV=production
COPY . /usr/src/app
RUN yarn install --production
RUN yarn cache clean
CMD ["yarn", "start:prod"]