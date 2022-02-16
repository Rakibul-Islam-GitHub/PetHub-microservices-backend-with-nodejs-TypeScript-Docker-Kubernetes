import {ValidationError} from "express-validator";
import { CustomErrorAbstract } from "./customErrorAbstract";

export class RequestValidationError extends CustomErrorAbstract{
    statusCode=400;
    constructor(public errors: ValidationError[]){
        super();

        /// we have to add this because we extended build in class (Error)
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeError(){
        return this.errors.map(error =>{
            return {message: error.msg, field: error.param}
        });

    }
}
