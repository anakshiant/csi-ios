import React, { useState, useEffect } from "react";

import { getPosts, deletePost } from "../../services/article";

export default ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [processing, setProcessing] = useState(false);

  const getAllPosts = async () => {
    setProcessing(true);
    const postResponse = await getPosts();
    if (postResponse.status) {
      setPosts(postResponse.data);
      setProcessing(false);
    }
  };

  const removePost = async postId => {
    setProcessing(true);
    const removePostResponse = await deletePost(postId);
    if (removePostResponse.status) {
      await getAllPosts();
    }
    setProcessing(false);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return children({ processing, posts, removePost });
};
