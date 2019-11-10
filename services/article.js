import cilent, { normalizeResponse } from "./index";

export const getArticles = () => {
  return normalizeResponse(cilent.get("/getAllArticles"));
};
