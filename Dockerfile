FROM node:alpine

WORKDIR /app

VOLUME ["/app"]

RUN npm install -g nodemon

COPY . /app
RUN npm install

ENTRYPOINT ["tail", "-f", "/dev/null"]