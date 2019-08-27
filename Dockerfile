# Dependency Stage
FROM node:lts as dep

RUN mkdir /app
WORKDIR /app

ADD package.json .
RUN ["npm", "i", "--only=production"]

# Final Stage (for significantly smaller image)
FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY --from=dep /app/node_modules ./node_modules
COPY --from=dep /app/package.json ./package.json

ADD config.js .

EXPOSE 8125/udp
EXPOSE 8126

# Start statsd with config
ENTRYPOINT [ "node", "daemon.js", "config.js" ]
