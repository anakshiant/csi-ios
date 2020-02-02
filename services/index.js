import axios from "axios";
import config from "../config";

const client = axios.create({
  baseURL: config.apiBaseUrl
});

export default client;

export const normalizeResponse = async promise => {
  try {
    const response = await promise;
    return response.data;
  } catch (exception) {
    throw exception;
  }
};
