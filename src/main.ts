import { Sequelize } from "sequelize";

import routes from "./modules/app.router";
import { env } from "./utils/env";

import AppServer from "./server";

const DB_USER = env("DB_USER");
const DB_PASSWORD = env("DB_PASSWORD");
const DB_HOST = env("DB_HOST");
const DB_PORT = env("DB_PORT");
const DATABASE_URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

console.log("Testing pre commit");

async function bootstrap(): Promise<void> {
    const appRoutes = routes();
    const server = new AppServer({
        routes: appRoutes,
        database: new Sequelize(DATABASE_URI),
    });
    await server.run();
}

void bootstrap();
