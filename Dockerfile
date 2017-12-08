FROM node:alpine

RUN mkdir /app
ADD index.html /app/
ADD index.js /app/

WORKDIR /app

EXPOSE 80
CMD node index.js
