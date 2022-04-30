FROM node:17-alpine3.13

ENV TZ Asia/Tokyo
# dockerコマンド単体で立ち上げるとhot reloadが効かない。。
ENV CHOKIDAR_USEPOLLING=true

WORKDIR /react

COPY ./ /react
RUN apk update && apk add bash
RUN npm install

CMD ["npm", "run", "start"]
