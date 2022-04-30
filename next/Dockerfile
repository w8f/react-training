FROM node:17-alpine3.13

ENV TZ Asia/Tokyo

WORKDIR /next

COPY ./ /next
RUN apk update && apk add bash
RUN npm install

CMD ["npm", "run", "dev"]
