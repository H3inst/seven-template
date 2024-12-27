import type { Request } from "express";
import type AuthService from "./auth.service";
import type { CreateUserDto } from "./auth.schemas";

export default class AuthController {
    private readonly authService: AuthService;

    public constructor(authService: AuthService) {
        this.authService = authService;
    }

    public getCredentials(request: Request): Record<string, string> {
        return request.query as Record<string, string>;
    }

    public async createUser(request: Request): Promise<CreateUserDto> {
        const payload = request.body as CreateUserDto;
        return this.authService.createUser(payload);
    }
}
