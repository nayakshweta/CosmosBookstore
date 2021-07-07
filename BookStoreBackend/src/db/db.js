import { MongoClient } from 'mongodb';

const DB_NAME = 'cosmosbookstore';

export const db = {
    _dbClient: null,
    connect: async function(url) {
        const client = await MongoClient.connect(url, {
            poolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Cosmos DB's API for MongoDB connected")
        this._dbClient = client;
    },
    getConnection: function() {
        if (!this._dbClient) {
            console.log('You need to call .connect() first!');
            process.exit(1);
        }

        return this._dbClient.db(DB_NAME);
    }
}