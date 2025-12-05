# Fempo

Faster-to-use alternative to Tempo with fewer features to decrease bloat.

## Prerequisites

- [Deno](https://deno.com/)
- [Go](https://go.dev/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [buildx](https://github.com/docker/buildx) _(optional for faster builds)_
- [Taskfile](https://taskfile.dev/)
- [Protoc](https://protobuf.dev/installation/)

## Usage

To install dependencies for development:

```bash
task install
```

To generate dynamically created code (for example: Protobufs):

```bash
task generate
```

To spin up the development environment (with hot-reload), run this command:

```bash
task dev:local
```

To preview (build & run) a production-like environment, run this command:

```bash
task preview:production
```

To build for production, run this command:

```bash
task build:production
```
