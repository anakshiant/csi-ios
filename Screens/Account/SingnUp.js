import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { Button } from "react-native-elements";

import { withLayout } from "../../Components/withLayout";
import SignUpContainer from "../../Containers/Account/SignUp";

export const SignUp = ({ navigation }) => {
  const postSignupAction = () => {
    alert(
      "You have been successfully registered. Please wait for your account approval"
    );
    navigation.navigate("Login");
  };
  return (
    <React.Fragment>
      <SignUpContainer action={() => postSignupAction()}>
        {({
          email,
          setEmail,
          password,
          setPassword,
          signUp,
          firstName,
          lastName,
          setFirstName,
          setLastName,
          processing        }) => {
          const buttonEnabled = email && password && firstName && lastName;
          return (
            <View style={styles.main}>
              <View style={styles.loginSection}>
                <View style={styles.imageView}>
                  <Image source={require("../../assets/icon.png")} />
                </View>
                <TextInput
                  placeholder="First Name"
                  style={styles.textInput}
                  value={firstName}
                  onChangeText={setFirstName}
                />
                <TextInput
                  placeholder="Last Name"
                  style={styles.textInput}
                  value={lastName}
                  onChangeText={setLastName}
                />
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
                  title="Sign Up"
                  type="solid"
                  raised={true}
                  onPress={signUp}
                  loading={processing}
                  disabled={!buttonEnabled}
                />
              </View>
            </View>
          );
        }}
      </SignUpContainer>
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

export default withLayout(SignUp);
