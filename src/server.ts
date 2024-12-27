import express, { type Response, type Request, type Router, type NextFunction } from "express";
import morgan from "morgan";

import { AppError } from "./lib/error";
import type { Sequelize } from "sequelize";

interface IServerOptions {
    port?: number;
    routes: Router;
    database: Sequelize;
}

export default class AppServer {
    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;
    private readonly database: Sequelize;

    public constructor(options: IServerOptions) {
        this.port = options.port ?? 8000;
        this.routes = options.routes;
        this.database = options.database;
    }

    public async run(): Promise<void> {
        this.app.use(morgan("tiny"));

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.app.use("/api/v1", this.routes);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
            AppError.errorHandler(error, res);
        });

        try {
            await this.database.authenticate();
            this.app.listen(this.port, () => {
                console.log(`Server running on port ${this.port.toString()}`);
            });
        } catch (error) {
            console.error("Unable to connect to the database", error);
        }
    }
}
