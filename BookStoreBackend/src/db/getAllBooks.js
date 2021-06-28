import { db } from './db';

export const getAllBooks = async (page=0, limit=20) => {
    const connection = db.getConnection();
    let cursor;
    cursor = await connection.collection('books').find({});

    const displayCursor = cursor.limit(limit).skip(page * limit)

    const books = await displayCursor.toArray();
    return books;
}