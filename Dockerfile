ARG NODE_VERSION=16.15
ARG NPM_VERSION=8.12.1

FROM docker.io/node:${NODE_VERSION}

ENV NPM_VERSION ${NPM_VERSION}

RUN npm install -g npm@${NPM_VERSION}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]