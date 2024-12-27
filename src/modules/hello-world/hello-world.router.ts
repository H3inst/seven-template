import { Router } from "express";

import { AppResponse } from "@app/lib/response";

import HelloWorldController from "./hello-world.controller";
import HelloWorldService from "./hello-world.service";

export default function getHelloWorldRouter(): Router {
    const router = Router();
    const response = new AppResponse();
    const helloWorldService = new HelloWorldService();

    const controller = new HelloWorldController(helloWorldService);

    router.get("/", response.handler(controller.getHelloWorld.bind(controller)));

    return router;
}
