import { db } from './db';

export const getAllBooks = async (page=0, limit=20, sortby) => {
    const connection = db.getConnection();

    let sortQuery = {};
    
    if (sortby == "rating") {
        sortQuery = ["rating", -1];
    }

    let cursor;
    cursor = await connection.collection('books').find({}).sort(sortQuery);

    const displayCursor = cursor.limit(limit).skip(page * limit)

    const books = await displayCursor.toArray();
    return books;
}