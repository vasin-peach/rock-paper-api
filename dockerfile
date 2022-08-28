FROM node:14.18-alpine

WORKDIR /rock-paper-api
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start"]