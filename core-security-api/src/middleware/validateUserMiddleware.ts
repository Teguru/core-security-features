import { Request, Response, NextFunction } from "express";
import { UserSchema } from "../utils/schemas";

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const result = UserSchema.safeParse(req.body)

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error,
      });
    }

    req.body = result

    next()
}