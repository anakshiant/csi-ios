import client, { normalizeResponse } from "./index";

export const loginService = (email, password) => {
  let payload = new FormData();
  payload.append("email", email);
  payload.append("password", password);
  return normalizeResponse(client.post("/login", payload));
};
