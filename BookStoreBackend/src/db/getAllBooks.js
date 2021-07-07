import { db } from './db';

export const getAllBooks = async (page=0, limit=20, sortby, rating, format) => {
    const connection = db.getConnection();

    let sortCriteria = {}; 
    if (sortby == "rating") {
        sortCriteria = ["rating", -1];
    }

    let queryList = [];
    if (rating) {
        queryList.push({"rating": {$gt: rating}});
    }
    if (format) {
        const formatList = Array.isArray(format) ? format : format.split(",");
        queryList.push({"bookformat" :  {$in: formatList}});
    }

    let cursor;
    
    cursor = await connection.collection('books').find(...queryList).sort(sortCriteria);

    const displayCursor = cursor.limit(limit).skip(page * limit)

    const books = await displayCursor.toArray();
    return books;
}