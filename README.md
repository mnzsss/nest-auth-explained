<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<br/>

<h1 align="center">Authentication API with NestJs</h1>

This repository has all code created and explained in series of posts that I will made a authentication API posted in [Dev.to](https://dev.to/mnzs)

## Tutorial Posts

- [Setup Project and Fastify Platform](https://dev.to/mnzs/setup-project-and-fastify-platform-nestjs-with-passport-01-27jl)
- [Database with Prisma ORM, Docker and Postgres](https://dev.to/mnzs/database-with-prisma-orm-docker-and-postgres-nestjs-with-passport-02-180l)

Keep in development...

## Setup

Copy a `.env.example` and create a `.env` adding your settings

```
DATABASE_URL="postgresql://nestAuth:nestAuth@localhost:5432/nestAuth?schema=nestAuth&sslmode=prefer"

# PostgreSQL
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

## Running the app

```bash
# development
$ docker-compose up dev

# production mode
$ docker-compose up prod
```

## Feedback

If you have a something feedback, send to me in gabrielsmenezes99@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)
