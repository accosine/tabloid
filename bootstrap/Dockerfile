FROM node:lts-slim
LABEL maintainer="Duncan Kolba <duncankolba@gmail.com>"

RUN apt-get update && apt-get install -y openssl
WORKDIR /opt/app

RUN mkdir -p node_modules && chown node:node -R /opt
USER node

COPY --chown=node:node ./bootstrap/package.json ./
COPY --chown=node:node ./newspaper/prisma /opt/app/prisma 

RUN npm cache clean --force && npm install

CMD [ "npm", "run", "start" ]