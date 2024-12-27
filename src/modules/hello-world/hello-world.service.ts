import { BadRequestException } from "@app/lib/error";

export default class HelloWorldService {
    public async sendHelloWorld(name?: string): Promise<string> {
        if (!name) {
            throw new BadRequestException("Something went wrong");
        }
        return new Promise((resolve) => {
            resolve(`Hello ${name}`);
        });
    }
}
