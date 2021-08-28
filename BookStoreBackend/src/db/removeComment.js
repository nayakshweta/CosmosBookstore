import { db } from './db';
import { ObjectId } from "bson"

export const removeComment = async (bookId, commentIndex) => {
    const connection = db.getConnection();

    //Updates one document. Removes a comment from the reviewcomments array field of a book using $unset and $pull array operators
    await connection.collection('books').updateOne(
                                            {"_id": ObjectId(bookId)}, 
                                            {$unset: {[`reviewcomments.${commentIndex}`]: 1}}
                                        );
    await connection.collection('books').updateOne(
                                            {"_id": ObjectId(bookId)}, 
                                            {$pull: {"reviewcomments": null}}
                                        );

}