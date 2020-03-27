import { factory } from "../utils/ConfigLog4j";
import { Helper } from '../utils/Helper';


/**
 * Logger.
 */
const LOGGER = factory.getLogger("UserManagementService");

/**
 * User management service.
 * Handle all user treatment.
 */
export class UserManagementService {
    /**
     * UserManagementService instance.
     */
    public static INSTANCE: UserManagementService;

    /**
     * Singleton instance accessor.
     */
    public static getInstance(): UserManagementService {
        if (this.INSTANCE == null) {
            this.INSTANCE = new UserManagementService();
        }
        return this.INSTANCE;
    }

    /**
     * shut down the user management service.
     */
    public static shutDownService(): void {
        this.INSTANCE = null;
        LOGGER.info(this.constructor.name + " : shutted down");
    }

    /**
     * Method to create a new User account.
     * Password chosen by user is hashed using bcript before insert it in database.
     *
     * @param pseudoParam pseudo chosen by user.
     * @param passwordParam  password chosen by user.
     * @param emailParam email chosen by user.
     * @param res response to send back to user interface. TODO specify type.
     */
    async register(emailParam: string, passwordParam: string, pseudoParam: string) {
        LOGGER.debug(Helper.getMethodName() + Helper.parameters(arguments));

    }

    /**
     * Login method .
     * Check if username exists in database.
     * If username exists, password entered by user is compared with hashed password in database.
     *
     * @param emailParam : User's pseudo.
     * @param passwordParam : User's password.
     * @param res response to send back to user interface. TODO specify type.
     */
    async login(emailParam: any, passwordParam: string) {

    }
}
