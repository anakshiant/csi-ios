import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

import { getDateDiffinDays } from "../utills";

const DateDiff = ({ date }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Icon name="timelapse" />
      <Text style={{ fontWeight: "600", padding: 5 }}>
        {getDateDiffinDays(date)}d
      </Text>
    </View>
  );
};

export default DateDiff;
