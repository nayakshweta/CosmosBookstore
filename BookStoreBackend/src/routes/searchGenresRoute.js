import {searchGenres} from '../db';

export const searchGenresRoute = {
    method: 'get',
    path: '/genres',
    handler: async (req, res) => {
        const searchString = req.query.searchString;
        const genres = await searchGenres(searchString);
        res.status(200).json(genres);
    }
}