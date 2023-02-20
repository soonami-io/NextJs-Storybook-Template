# syntax=docker/dockerfile:1

FROM node:16.18-alpine
RUN --mount=type=secret,id=_env,dst=/run/secrets/.env mkdir -p /home/dapp/ && chown -R node:node /home/dapp && cp /run/secrets/.env /home/dapp/.env.production
RUN apk add --no-cache libc6-compat
RUN apk add --no-cache git

WORKDIR /home/dapp

COPY ./package*.json ./

RUN yarn install

# COPY . .
COPY --chown=node:node . .

RUN yarn install --frozen-lockfile
RUN yarn build

USER node
EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]