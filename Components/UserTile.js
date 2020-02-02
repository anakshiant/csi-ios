import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import config from "../config";

import userDefaultLogo from "../assets/user.jpeg";
import UserAvatar from "./UserAvatar";

const UserTile = ({ userName, userIcon }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <UserAvatar userIcon={userIcon} />
      <Text style={{ fontWeight: "bold", padding: 10 }}>{userName}</Text>
    </View>
  );
};

export default UserTile;
