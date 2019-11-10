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
