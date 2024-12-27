import { Router } from "express";

import { AppResponse } from "@app/lib/response";

import AuthController from "./auth.controller";
import AuthService from "./auth.service";

export default function getAuthRouter(): Router {
    const router = Router();
    const response = new AppResponse();
    const authService = new AuthService();

    const controller = new AuthController(authService);
    router.get("/", response.handler(controller.getCredentials.bind(controller)));

    router.post("/", response.handler(controller.createUser.bind(controller)));

    return router;
}
