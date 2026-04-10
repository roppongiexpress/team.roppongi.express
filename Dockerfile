FROM --platform=linux/arm64 node:20-alpine

RUN npm install -g sass

WORKDIR /src

COPY src/scss /src/scss
COPY docs /src/docs

RUN sass scss/style.scss docs/css/style.css --style expanded --source-map \
    && sass scss/style.scss docs/css/style.min.css --style compressed --source-map

CMD ["cp", "-r", "/src/docs/.", "/output/"]
