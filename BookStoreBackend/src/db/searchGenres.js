import { db } from './db';

export const searchGenres = async (searchString) => {
    const connection = db.getConnection();

    // Regex search with the searchStrng on the list of genres
    const aggCursor = await connection.collection('genres').aggregate([
                                                        {$unwind : "$genresList"},
                                                        {$match: {"genresList": {$regex: new RegExp(searchString, "i")}}},
                                                        {$group: {_id: null, genres: {$push: "$genresList"}}}
                                                    ])

    const genres = await aggCursor.toArray()
    return genres[0].genres;
}