import type { Response } from "express";
import { ZodError } from "zod";

export class AppError extends Error {
    public status: number;

    public constructor(status: number, message?: string) {
        super(message);
        this.status = status;
    }

    public static errorHandler(error: Error, response: Response): void {
        if (error instanceof AppError) {
            response.status(error.status).json({
                status: error.status,
                message: error.message,
                result: null,
            });
        }
        if (error instanceof ZodError) {
            response.status(400).json({
                status: 400,
                errors: error.errors,
                result: null,
            });
        }
        response.status(500).json("Something went wrong!");
    }
}

export class BadRequestException extends AppError {
    public constructor(message: string) {
        super(400, message);
    }
}

export class UnauthorizedException extends AppError {
    public constructor(message: string) {
        super(401, message);
    }
}
