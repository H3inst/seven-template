import type { Request } from "express";
import type HelloWorldService from "./hello-world.service";

export default class HelloWorldController {
    private readonly helloWorldService: HelloWorldService;

    public constructor(service: HelloWorldService) {
        this.helloWorldService = service;
    }

    public async getHelloWorld(request: Request): Promise<string> {
        const query = request.query as { name: string };

        return await this.helloWorldService.sendHelloWorld(query.name);
    }
}
