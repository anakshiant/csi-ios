import React, { useState, useEffect } from "react";

import { getPosts } from "../services/article";
import config from "../config";

export default ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    (async function() {
      const postResponse = await getPosts();
      if (postResponse.status) {
        postResponse.data = postResponse.data.map(putImageUrl);
        setPosts(postResponse.data);
        setProcessing(false);
        console.log(postResponse.data);
      }
    })();
  }, []);

  const putImageUrl = post => {
    post.image = `${config.imageBaseUrl}${post.image}`;
    post.user_info.picture = `${config.imageBaseUrl}${post.user_info.picture}`;
    return post;
  };

  return children({ processing, posts });
};
