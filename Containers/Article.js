import React, { useState, useEffect } from "react";

import { getArticles } from "../services/article";
import config from "../config";

export default ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    (async function() {
      const articleResponse = await getArticles();
      if (articleResponse.status) {
        articleResponse.data = articleResponse.data.map(putImageUrl);
        setArticles(articleResponse.data);
        setProcessing(false);
        console.log(articleResponse.data);
      }
    })();
  }, []);

  const putImageUrl = article => {
    article.image = `${config.imageBaseUrl}${article.image}`;
    return article;
  };

  return children({ processing, articles });
};
