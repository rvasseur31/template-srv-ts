import express from 'express';
import { factory } from "./utils/ConfigLog4j";
import { RootController } from './controllers/root.controller';

/**
 * Logger.
 */
const LOGGER = factory.getLogger("Server.ts");

/**
 * App object using express.
 */
const app = express();

/**
 * Port used to reach server.
 */
const port = 3000;

/**
 * Size limit specification.
 */
app.use(express.json({ limit: "50mb" }));

/**
 * Encoding specifications.
 */
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

/**
 * 
 */
app.use('/api', RootController);

/**
 * Server starting.
 * Listening on port specified.
 */
app.listen(port, err => {
    if (err) {
        return LOGGER.error(err);
    }
    return LOGGER.info(`server is listening on ${port}`);
});