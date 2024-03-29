FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN yarn add glob rimraf

RUN yarn --only=development

COPY . .

RUN yarn build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/

RUN yarn add glob rimraf

RUN yarn --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]