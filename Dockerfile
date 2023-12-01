FROM --platform=linux/amd64 node:16-alpine


RUN apk update && \
    apk add --no-cache tzdata

ENV TZ Asia/Jakarta

WORKDIR /app
COPY build .
COPY public ./public

RUN npm install

EXPOSE 9000

CMD [ "node", "app.js" ]