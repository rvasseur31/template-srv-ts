import { IUser } from '../types/IUser'

/**
 * User entity.
 */
export class User implements IUser {
    /**
     * User id.
     */
    id: string;

    /**
     * User pseudo.
     */
    pseudo: string;

    /**
     * User password.
     */
    password: string;

    /**
     * User email.
     */
    mail: string;

    /**
     * Constructor.
     * 
     * @param id: user's id.
     * @param pseudo user's pseudo.
     * @param password user's password.
     * @param mail user's email.
     */
    public constructor(id?: string, pseudo?: string, password?: string, mail?: string) {
        this.id = id;
        this.pseudo = pseudo;
        this.password = password;
        this.mail = mail;
    }
}



