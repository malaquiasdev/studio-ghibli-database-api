FROM node:14.15.3-alpine as base
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

FROM base as development
ENV NODE_ENV=development
COPY . .
RUN yarn run prebuild
RUN yarn run build

FROM base as production
ENV NODE_ENV=production
COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/src ./src
RUN yarn install --production
RUN yarn cache clean
CMD ["yarn", "start:prod"]