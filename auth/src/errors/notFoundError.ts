
import { CustomErrorAbstract } from "./customErrorAbstract";

export class NotFoundError extends CustomErrorAbstract {
    statusCode= 404;
    constructor(){
        super();
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    
    serializeError(){
        return [{message:"Not Found!"}]

    }

}