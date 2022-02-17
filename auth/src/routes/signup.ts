import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/requestValidationError";


const router = express.Router();

router.post("/api/users/signup", [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:3, max:15}).withMessage('Password should be between 3 to 15 characters')
], (req: Request, res: Response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
        throw new RequestValidationError(errors.array());
        
    }

    res.send("working...")
});

export { router as signupRouter };
