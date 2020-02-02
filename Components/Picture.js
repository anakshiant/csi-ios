import React from "react";
import { Image } from "react-native";

import config from "../config";

const Picture = ({ name, ...props }) => {
  const imageUrl = `${config.imageBaseUrl}${name}`;
  return <Image source={{ uri: imageUrl }} {...props} />;
};

export default Picture;
