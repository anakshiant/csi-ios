import { useState, useEffect } from "react";

import { getComments, addComment, deleteComment } from "../../services/article";

export default ({ postId, children }) => {
  const [comments, setComments] = useState([]);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    getAllComments(postId);
  }, []);

  const getAllComments = async postId => {
    setProcessing(true);
    const commentResponse = await getComments(postId);
    if (commentResponse.status) {
      setComments(commentResponse.data.comments);
    }
    setProcessing(false);
  };

  const postComment = async (postId, userId, comment) => {
    setProcessing(true);
    const commentResponse = await addComment(postId, userId, comment);
    if (commentResponse.status) {
      await getAllComments(postId);
    }
    setProcessing(false);
  };

  const removeComment = async (commentId, postId) => {
    setProcessing(true);
    const removeCommentResponse = await deleteComment(commentId);
    if (removeCommentResponse.status) {
      await getAllComments(postId);
    }
    setProcessing(false);
  };

  return children({ processing, comments, postComment, removeComment });
};
