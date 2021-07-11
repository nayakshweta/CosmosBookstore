import { db } from './db';
import { ObjectId } from "bson"

export const getBook = async (bookId) => {
    const connection = db.getConnection();
    // Query one document that matches the particular criteria
    const book = await connection.collection('books').findOne({"_id": ObjectId(bookId)})
    return book;
}