import { db } from './db';
import { ObjectId } from "bson"
var assert = require('assert');

export const getBook = async (bookId) => {
    const connection = db.getConnection();
    // Query one document that matches the particular criteria
    const book = await connection.collection('books').findOne({"_id": ObjectId(bookId)})

    // Check the request charge for the previous operation
    connection.command({ getLastRequestStatistics: 1 }, function(err, result) {
        assert.strictEqual(err, null);
        const requestCharge = result['RequestCharge'];
        console.log("Request charge for the findOne book operation was: ", requestCharge);
    });
    return book;
}