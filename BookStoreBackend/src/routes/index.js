import { getAllBooksRoute } from './getAllBooksRoute';
import { getBookRoute } from './getBookRoute';
import { updateCommentRoute } from './updateCommentRoute';
import { removeCommentRoute } from './removeCommentRoute';
import { searchBooksRoute } from './searchBooksRoute';
import { searchGenresRoute } from './searchGenresRoute';

export const routes = [
    getAllBooksRoute,
    getBookRoute,
    updateCommentRoute,
    removeCommentRoute,
    searchBooksRoute,
    searchGenresRoute
];