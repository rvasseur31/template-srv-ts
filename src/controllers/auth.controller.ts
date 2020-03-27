import { Router, Request, Response, NextFunction } from "express";
import { UserManagementService } from "../services/UserManagementService";
import { factory } from "../utils/ConfigLog4j"
import { CustomResponse } from '../utils/CustomResponse';
import { EStatus } from '../types/EStatus';
import { ECode } from "../types/ECode";
import { ParamError } from '../errors/ParamError';
import { User } from "../entities"

/**
 * Logger.
 */
const LOGGER = factory.getLogger("AuthController.ts");

/**
 * Auth controller router.
 */
export const AuthController = Router();

/**
 * Login route.
 */
AuthController.post('/login', (req: Request, res: Response, next: NextFunction) => {
    LOGGER.debug("login route");
    let customResponse: CustomResponse;
    if (req.body.email) {
        UserManagementService.getInstance().login(req.body.email, req.body.password).then(user => {
            customResponse = new CustomResponse(EStatus.SUCCESS, ECode.S001, "user successfully logged", null, user);
            res.send(customResponse);
        }).catch(error => {
            customResponse = new CustomResponse(EStatus.FAIL, ECode.S001, null, error.message, null);
            res.send(customResponse);
        });
    } else {
        next(new ParamError('email or phone number has to be specified'));
    }
});

/**
 * Register route.
 */
AuthController.post('/register', (req: Request, res: Response, next: NextFunction) => {
    LOGGER.debug("subscription route");
    let body: any = req.body;
    if (body.pseudo && body.password && body.email && body.phoneNumber) {
        UserManagementService.getInstance().register(body.email, body.password, body.pseudo).then(user => {
            let customResponse: CustomResponse = new CustomResponse(EStatus.SUCCESS, ECode.S001, "user successfully registered", null, user);
            res.send(customResponse);
        }).catch((error: any) => {
            let customResponse: CustomResponse;
            if (error.code == 11000) {
                customResponse = new CustomResponse(EStatus.FAIL, ECode.S001, null, "user already exists in database", null);
            } else {
                customResponse = new CustomResponse(EStatus.FAIL, ECode.S001, null, "internal error", null);
            }
            res.send(customResponse);
        });
    } else {
        next(new ParamError("All fields has to be filled up to register successfully"));
    }
});