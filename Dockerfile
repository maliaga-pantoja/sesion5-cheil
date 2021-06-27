FROM node:14-alpine

WORKDIR /app

COPY index.js .
COPY package.json .

RUN npm i
ENV PORT 80
ENTRYPOINT ["npm", "start"]