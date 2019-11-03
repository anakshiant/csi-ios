import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Input } from "react-native-elements";

import { withLayout } from "../../Components/withLayout";

export const Login = () => {
  return (
    <View style={styles.main}>
      <View>
        <Image source={require("../../assets/icon.png")} />
        <Input placeholder="Email" />
      </View>
      <View style={styles.loginSection}>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginSection: {
    justifyContent: "center",
    alignItems: "stretch"
  }
});

export default Login;
