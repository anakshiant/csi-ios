import config from "../config";

export default ({ obj, key }) => {
  obj[key] = obj[key] ? `${config.imageBaseUrl}${obj[key]}` : obj[key];
  return obj;
};

