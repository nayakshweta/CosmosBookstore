import express from 'express';
import db from './src/db/db.js';
import routes from './src/routes/index.js';
import dotenv from "dotenv";

dotenv.config();

/* Create an Express application.*/
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const dBConnectionString = process.env.COSMOS_BOOKSTORE_DB_CONNECTION_STRING || "";
const PORT = process.env.PORT || 8080;

db.connect(dBConnectionString)
    .catch(err => {
        console.error(err.stack);
        process.exit(1)
    }) // Starting the Server at the port 8080
    .then(app.listen(PORT,() => {
        console.log(`Server is running on port ${PORT}`);
    }));
