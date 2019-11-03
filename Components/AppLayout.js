import React, { useContext } from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import ThemeContext from "../Contexts/ThemeContext";

export const AppLayout = ({ children }) => {
  const { PrimaryColor } = useContext(ThemeContext);
  return (
    <View style={viewStyle.main}>
      <StatusBar
        translucent={true}
        barStyle={"light-content"}
        backgroundColor={PrimaryColor}
      />
      {children}
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
