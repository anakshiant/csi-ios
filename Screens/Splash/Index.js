import React, { useContext, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  AsyncStorage
} from "react-native";
import ThemeContext from "../../Contexts/ThemeContext";
import AuthContext from "../../Contexts/AuthContext";

const SplashScreen = ({ navigation }) => {
  const { PrimaryColor } = useContext(ThemeContext);
  const { checkLogin } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      const { user } = navigation.getScreenProps();
      if (user) {
        navigation.navigate("Main");
      } else {
        navigation.navigate("Auth");
      }
    }, 100);
  }, []);

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

export const Splash = SplashScreen;
