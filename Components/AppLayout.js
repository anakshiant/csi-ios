import React, { useContext } from "react";
import { View, Text, StatusBar, StyleSheet, Dimensions } from "react-native";
import { withNavigation } from "react-navigation";

import ThemeContext from "../Contexts/ThemeContext";
import AuthContext from "../Contexts/AuthContext";

const AppLayout = ({ children }) => {
  const { PrimaryColor, SuccessColor, DangerColor, InfoColor } = useContext(
    ThemeContext
  );

  const { user, getToken, authenticated } = useContext(AuthContext);

  return (
    <View style={viewStyle.main}>
      {children}
    </View>
  );
};

export default withNavigation(AppLayout);

const viewStyle = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  }
});
