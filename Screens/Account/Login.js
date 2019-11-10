import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Input, Button, ThemeConsumer } from "react-native-elements";

import { withLayout } from "../../Components/withLayout";
import LoginContainer from "../../Containers/Login";

export const Login = ({ navigation }) => {
  return (
    <React.Fragment>
      <LoginContainer action={() => navigation.navigate("Main")}>
        {({ email, setEmail, password, setPassword, login }) => (
          <View style={styles.main}>
            <View style={styles.loginSection}>
              <View style={styles.imageView}>
                <Image source={require("../../assets/icon.png")} />
              </View>
              <TextInput
                placeholder="Email"
                style={styles.textInput}
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                value={password}
                onChangeText={setPassword}
                textContentType={"password"}
              />
              <Button
                title="Login"
                type="solid"
                raised={true}
                onPress={login}
              />
              <Button title="Forgot Password?" type="clear" raised={false} />
            </View>
            <View style={styles.signupView}>
              <Button
                title="New Here? Click here to Register"
                type="clear"
                raised={false}
                onPress={() => navigation.navigate("SignUp")}
              />
            </View>
          </View>
        )}
      </LoginContainer>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center"
  },
  loginSection: {
    justifyContent: "center",
    alignItems: "stretch",
    padding: 20
  },
  textInput: {
    width: 300,
    padding: 20
  },
  signupView: {
    justifyContent: "space-evenly"
  }
});

export default withLayout(Login);
