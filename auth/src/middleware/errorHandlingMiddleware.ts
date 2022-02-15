import {Request , Response, NextFunction} from "express";
import { CustomErrorAbstract } from "../errors/customErrorAbstract";

export const errorHandler= (err: Error, req: Request, res: Response, next: NextFunction) => {
    
    if (err instanceof CustomErrorAbstract) {
        
        return res.status(err.statusCode).send({errors: err.serializeError()})
        
    }

    res.status(400).send({errors: [{message: "something went wrong"}]});
}