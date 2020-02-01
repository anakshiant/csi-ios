import React, { useState, useEffect } from "react";

import { getPosts } from "../../services/article";

export default ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    (async function() {
      const postResponse = await getPosts();
      if (postResponse.status) {
        setPosts(postResponse.data);
        setProcessing(false);
      }
    })();
  }, []);

  return children({ processing, posts });
};
