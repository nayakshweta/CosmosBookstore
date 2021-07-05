import { getAllBooks } from '../db';

export const getAllBooksRoute = {
    method: 'get',
    path: '/books',
    handler: async (req, res) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const sortby = req.query.sortby;
        const books = await getAllBooks(page, limit, sortby);
        res.status(200).json(books);
    }
}