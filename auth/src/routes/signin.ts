import express, { Request, Response } from "express";
import { body, validationResult  } from "express-validator";
import { RequestValidationError } from "../errors/requestValidationError";

const router = express.Router();

router.post(
  "/api/users/signin",
    [
        body("email").isEmail().withMessage("Please enter a valid email address"),
        body("password").trim().isLength({ min: 3, max: 20 }).withMessage('Please enter a password between 3 to 20 characters')
    ],
    (req: Request, res: Response) => {
      const errors= validationResult(req);
      if (!errors.isEmpty()) {

        throw new RequestValidationError(errors.array())
        
          
      }
    res.send({});
  }
);

export { router as signinRouter };
