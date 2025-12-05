FROM golang:1.25.5-alpine AS build

WORKDIR /source

COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY . .
RUN go build -v -o /usr/local/bin/ ./...

# ---

FROM alpine:3.23.0

WORKDIR /source

COPY --from=build /usr/local/bin/src /source/server

CMD "./server"
