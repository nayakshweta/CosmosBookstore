import { searchBooks } from '../db';

export const searchBooksRoute = {
    method: 'get',
    path: '/search',
    handler: async (req, res) => {
        const searchString = req.query.search;
        const skip = parseInt(req.query.skip);
        const top = parseInt(req.query.top);
        const books = await searchBooks(skip, top, searchString);
        res.status(200).json(books);
    }
}