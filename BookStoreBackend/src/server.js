import express from 'express';
import bodyParser from 'body-parser';
import { db } from './db';
import { routes } from './routes';
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const dBConnectionString = process.env.COSMOS_BOOKSTORE_DB_CONNECTION_STRING || "";

db.connect(dBConnectionString)
    .catch(err => {
        console.error(err.stack);
        process.exit(1)
    })
    .then(app.listen(8080,() => {
        console.log('Server is listening on port 8080');
    }));
