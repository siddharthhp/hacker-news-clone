FROM node:12-alpine as builder

ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build
CMD [ "npm", "run", "start-server" ]