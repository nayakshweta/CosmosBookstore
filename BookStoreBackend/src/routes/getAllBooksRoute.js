import { getAllBooks } from '../db';

export const getAllBooksRoute = {
    method: 'get',
    path: '/books',
    handler: async (req, res) => {
        const books = await getAllBooks();
        res.status(200).json(books);
    }
}