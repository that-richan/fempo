FROM denoland/deno:alpine-2.5.6 AS build

RUN mkdir /source
RUN chown -R deno:deno /source
WORKDIR /source

RUN mkdir -p ./app
COPY ./deno.jsonc ./deno.lock ./
COPY ./app/deno.jsonc ./app/
RUN deno install

COPY ./app/ ./app/
RUN deno task -r build

# ---

FROM nginx:1.28.0-alpine-slim

EXPOSE 80
WORKDIR /source

COPY --from=build /source/app/dist /usr/share/nginx/html
COPY ./app/nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
