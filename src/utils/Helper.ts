export class Helper {
    /**
     * Return the current method name.
     */
    public static getMethodName(): string {
        let err = new Error();
        if (/at \w+\.(\w+)/.exec(err.stack.split('\n')[2]) != null) {
            return /at \w+\.(\w+)/.exec(err.stack.split('\n')[2])[1] // we want the 2nd method in the call stack
        } else {
            return "method not found";
        }
    }
    
    /**
     * Check if current parameter match email adress regex.
     * @param email email to validate.
     */
    public static validateEmail(email: string): boolean {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    /**
     * Print all function parameters.
     * @param parameters : arguments
     */
    public static parameters(parameters: any) {
        let stringParameters = " [ params : ";
        for (let index = 0; index < parameters.length; index++) {
            stringParameters += parameters[index] + ", ";
        }
        return stringParameters + " ] ";
    }
}