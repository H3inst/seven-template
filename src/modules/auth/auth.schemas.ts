import { z } from "zod";

export const createUserSchema = z.object({
    user_name: z.string().max(30),
    user_lastname: z.string().max(30),
    user_email: z.string().email(),
    user_birthdate: z.date(),
    user_password: z.string().min(6),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = Partial<CreateUserDto>;
