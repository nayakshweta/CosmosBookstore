import {updateComment, getBook} from '../db';

export const updateCommentRoute = {
    method: 'post',
    path: '/books/:id/comments',
    handler: async (req, res) => {
        const { id } = req.params;
        const { name, comment } = req.body;
        const response = await updateComment(id, name, comment);
        res.status(200);
    }
}