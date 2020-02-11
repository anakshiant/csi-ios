import React, { useContext, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import ThemeContext from "../../Contexts/ThemeContext";
import { withLayout } from "../../Components/withLayout";

const LogProjects = ({ navigation }) => {
  const { PrimaryColor } = useContext(ThemeContext);

  return (
    <View style={viewStyle.main}>
      <ActivityIndicator size="large" color={PrimaryColor} />
    </View>
  );
};

const viewStyle = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default withLayout(LogProjects);
