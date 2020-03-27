import { EStatus } from "../types/EStatus";
import { ECode } from "../types/ECode";

/**
 * Custom response class.
 */
export class CustomResponse {
     /**
      * Response status.
      */
     status: EStatus;

     /**
      * Response code.
      */
     code: ECode;

     /**
      * Response message.
      */
     message: string;

     /**
      * Optionnal error message.
      */
     errorMessage: string;

     /**
      * Response content.
      */
     body: any;

     /**
      * Constructor.
      */
     constructor(status: EStatus, code: ECode, message: string, errorMessage: string, body: any) {
          this.status = status;
          this.code = code;
          this.message = message;
          this.errorMessage = errorMessage;
          this.body = body;
     }

     /**
      * To string method definition.
      */
     toString(): string {
          return "Custom response : [ status : " + this.status
               + " code : " + this.code
               + " message : " + this.message
               + " error message : " + this.errorMessage
               + " body : " + this.body + "]";
     }
}