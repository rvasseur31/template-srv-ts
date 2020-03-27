/**
 * 
 */
export class AuthError extends Error {

    /**
     * 
     */
    public readonly status : string;
    /**
     * 
     */
    public readonly code : string;

    /**
     * 
     */
    public message : string;

    /**
     * 
     * @param message 
     * @param code 
     * @param status 
     */
    constructor(message?: string, code?: string, status?: string) {
        super(message);
        this.message = message;
    }
}