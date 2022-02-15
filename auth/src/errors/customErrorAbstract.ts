export abstract class CustomErrorAbstract extends Error{
    abstract statusCode: number;
    constructor(){
        super();

        Object.setPrototypeOf(this, CustomErrorAbstract.prototype);
    }

   abstract serializeError(): {message: string, field?: string}[]
}