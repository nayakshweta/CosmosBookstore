import { db } from './db';

export const searchGenres = async (searchString) => {
    const connection = db.getConnection();

    // Regex search with the searchString on the list of genres
    // Uses aggregation pipeline with $unwind, $match and $group pipeline stages.
    const aggCursor = await connection.collection('genres').aggregate([
                                                        {$unwind : "$genresList"},
                                                        {$match: {"genresList": {$regex: new RegExp(searchString, "i")}}},
                                                        {$group: {_id: null, genres: {$push: "$genresList"}}}
                                                    ])

    //Convert pipeline cursor to an array
    const genres = await aggCursor.toArray();
    return genres[0].genres;
}