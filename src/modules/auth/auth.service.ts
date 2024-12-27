import { type CreateUserDto, createUserSchema } from "./auth.schemas";

export default class AuthService {
    public async createUser(createUserPayload: CreateUserDto): Promise<CreateUserDto> {
        await createUserSchema.parseAsync(createUserPayload);
        return createUserPayload;
    }
}
