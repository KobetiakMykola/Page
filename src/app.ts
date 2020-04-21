/**
 * Server initialization
 */
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
import cors from 'cors';
import methodOverride from 'method-override';
import * as appConfig from './configs/config';
import * as db  from './dataBase/models'
import {sendError} from './components/response';
import createError from 'http-errors';
import helmet from 'helmet'
import passport from 'passport'
import {mainRouter} from './routes/main'
import morgan from 'morgan';
const app = express();
const server = http.createServer(app);

db.initModels();

morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet.hidePoweredBy());
app.use(cors());
app.use(methodOverride());
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'"]
    }
}));
require('./components/passport');
app.use(passport.initialize());

app.use('/api', mainRouter);

app.use("*", function (req, res) {
    sendError(createError(404, 'Check the URL please'), res);
});

server.listen(appConfig.config.PORT, function ():void {
    console.info(`HTTP server listening on port: `, appConfig.config.PORT);
});
