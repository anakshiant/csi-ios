import React, { useContext, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  AsyncStorage
} from "react-native";
import { withLayout } from "../../Components/withLayout";
import ThemeContext from "../../Contexts/ThemeContext";
import AuthContext from "../../Contexts/AuthContext";
// import {} from "react-native-elements";
// import {} from "react-native-vector-icons";

const SplashScreen = ({ navigation }) => {
  const { PrimaryColor } = useContext(ThemeContext);
  const { checkLogin } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(async () => {
      let result = await checkLogin();
      navigation.navigate("Login");
    }, 100);
  });

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
