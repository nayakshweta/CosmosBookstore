import {removeComment, getBook} from '../db';

export const removeCommentRoute = {
    method: 'post',
    path: '/books/:id/comments/:commentIndex',
    handler: async (req, res) => {
        const { id, commentIndex } = req.params;
        const response = await removeComment(id, commentIndex);
        res.status(200);
    }
}