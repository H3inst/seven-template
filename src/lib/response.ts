import type { NextFunction, Request, Response } from "express";

export class AppResponse {
    public handler(controller: (request: Request) => unknown) {
        return async function (request: Request, res: Response, next: NextFunction): Promise<void> {
            try {
                const result = await controller(request);
                const responseBody = { status: 200, result: result };

                res.json(responseBody);
            } catch (error) {
                next(error);
            }
        };
    }
}
