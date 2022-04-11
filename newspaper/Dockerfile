FROM node:lts-slim
LABEL maintainer="Duncan Kolba <duncankolba@gmail.com>"

RUN apt-get update && apt-get install -y openssl
WORKDIR /opt/app

RUN mkdir -p node_modules packages && chown node:node -R /opt
USER node

COPY --chown=node:node ./package.json ./package-lock.json ./

# The prisma directory needs to be copied so the prisma client get automatically
# generated upon install of the dependencies.
COPY --chown=node:node ./prisma /opt/app/prisma 

RUN npm cache clean --force && npm install

COPY --chown=node:node . /opt/app

CMD [ "npm", "run", "start" ]