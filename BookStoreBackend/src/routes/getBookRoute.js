import {getBook} from '../db';

export const getBookRoute = {
    method: 'get',
    path: '/books/:id',
    handler: async (req, res) => {
        const { id } = req.params;
        const book = await getBook(id);
        res.status(200).json(book);
    }
}