# NestJS with TypeORM and automatic migrations
This is a simple example of how to use NestJS with TypeORM and automatic migrations.

## Setup
1. Clone the repository
2. Run `npm install`
3. Run `docker-compose up -d` to start the database
4. Run `npm run start:dev` to start the server
5. The migrations will be automatically run when the server starts
6. Change any entity (create a new one, or modify an existing one)
7. Run `npm run migration:generate --name=my-migration-name` to generate a new migration
8. Run `npm run migration:run` to run the new migration (or just restart the server)

## Tutorial

I've written a tutorial on how to create this project from scratch. You can find it [here](https://constantsolutions.dk/2024/08/05/nestjs-project-with-typeorm-cli-and-automatic-migrations).