import { db } from './db';

export const getAllBooks = async () => {
    const connection = db.getConnection();
    const books = await connection.collection('books').find({}).limit(10).toArray();
    return books;
}