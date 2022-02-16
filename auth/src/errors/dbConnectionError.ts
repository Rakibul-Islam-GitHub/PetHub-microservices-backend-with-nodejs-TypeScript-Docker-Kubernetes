import { CustomErrorAbstract } from "./customErrorAbstract";

export class DBConnectionError extends CustomErrorAbstract{
    message="Error connecting to DB";
    statusCode=503;
    constructor(){
        super();
        

        Object.setPrototypeOf(this, DBConnectionError.prototype);
    }

    serializeError(){
        return [{message: this.message}]

    }
}