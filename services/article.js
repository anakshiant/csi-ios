import client, { normalizeResponse } from "./index";

export const getArticles = () => {
  return normalizeResponse(client.get("/getAllArticles"));
};

export const getRecentUsers = () => {
  return normalizeResponse(client.get("/getRecentUsers"));
};

export const getPosts = () => {
  return normalizeResponse(client.get("/getAllPosts"));
};

export const getComments = postId => {
  return normalizeResponse(
    client.get("/getCommentsOnPost", {
      params: { postId }
    })
  );
};

export const deleteComment = commentId => {
  return normalizeResponse(
    client.get("/deleteComment", {
      params: {
        commentId
      }
    })
  );
};

export const addComment = (postId, userId, comment) => {
  let payload = new FormData();
  payload.append("postId", postId);
  payload.append("userId", userId);
  payload.append("comment", comment);
  return normalizeResponse(client.post("/addComments", payload));
};
