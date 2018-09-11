#
# Pull packages
#
FROM node:latest as configure
COPY package.json /tmp
COPY yarn.lock /tmp
RUN cd /tmp && yarn

#
# Compile + Bundle
#
FROM node:latest as build
RUN mkdir /app
COPY src/ /app/src
COPY --from=configure /tmp/package.json /app
COPY tsconfig.json /app
COPY webpack.config.js /app
COPY --from=configure /tmp /tmp
RUN cd /app \ 
 && ln -s /tmp/node_modules \
 && yarn build

#
# Run 
#
FROM bitnami/node:latest
COPY --from=configure /tmp /tmp
COPY --from=build /app/dist /app
RUN cd /app && ln -s /tmp/node_modules
WORKDIR /app
EXPOSE 4000
CMD [ "node", "server.js" ]



