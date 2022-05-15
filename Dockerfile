FROM node:14

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

CMD npm test && npm run bdd-test

EXPOSE 8081
