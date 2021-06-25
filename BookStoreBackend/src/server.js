import express from 'express';
import bodyParser from 'body-parser';
import { db } from './db';
import { routes } from './routes';

const app = express();

app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});


db.connect('')
    .catch(err => {
        console.error(err.stack);
        process.exit(1)
    })
    .then(app.listen(8080,() => {
        console.log('Server is listening on port 8080');
    }));

