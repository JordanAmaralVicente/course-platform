FROM node:18.12.1 AS builder

WORKDIR /opt/build

COPY packages/server/package.json ./
RUN npm install

COPY packages/server /opt/build/
RUN npm run build

FROM node:18.12.1 AS app

WORKDIR /opt/course-platform-server

COPY --from=builder /opt/build /opt/course-platform-server

WORKDIR /opt/course-platform-server

USER node

CMD ["node", "build/index.js"]
