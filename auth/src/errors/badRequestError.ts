import { CustomErrorAbstract } from "./customErrorAbstract";


export class BadRequestError extends CustomErrorAbstract{
    statusCode=403;
    constructor(public message: string){
        super();
        // this.message;
        Object.setPrototypeOf(this, BadRequestError.prototype);

    }
    serializeError(){
        return [{message: this.message}]
    }
}