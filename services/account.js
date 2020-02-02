import client, { normalizeResponse } from "./index";

export const loginService = (email, password) => {
  let payload = new FormData();
  payload.append("email", email);
  payload.append("password", password);
  return normalizeResponse(client.post("/login", payload));
};

export const signupService = ({ firstName, lastName, email, password }) => {
  let payload = new FormData();
  payload.append("firstName", firstName);
  payload.append("lastName", lastName);
  payload.append("email", email);
  payload.append("password", password);
  return normalizeResponse(client.post("/signup", payload));
};
