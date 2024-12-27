import { Router } from "express";

import getHelloWorldRouter from "./hello-world/hello-world.router";
import getAuthRouter from "./auth/auth.router";

export default function routes(): Router {
    const router = Router();
    const helloWorldRouter = getHelloWorldRouter();
    const authRouter = getAuthRouter();

    router.get("/", (_req, res) => void res.send(":)"));
    router.use("/hello-world", helloWorldRouter);
    router.use("/auth", authRouter);

    return router;
}
