import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import config from "../config";

import userDefaultLogo from "../assets/user.jpeg";

const UserAvatar = ({ userIcon, avatarStyle }) => {
  return (
    <Avatar
      rounded
      size="small"
      source={
        userIcon
          ? {
              uri: `${config.imageBaseUrl}${userIcon}`
            }
          : userDefaultLogo
      }
      avatarStyle={avatarStyle}
    />
  );
};

export default UserAvatar;
