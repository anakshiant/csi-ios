import React, { useContext, useState} from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Input, Button, ThemeConsumer } from "react-native-elements";


import { withLayout } from "../../Components/withLayout";
import AuthContext from "../../Contexts/AuthContext";
import ThemeContext from "../../Contexts/ThemeContext";

export const Login = ({navigation}) => {
  const {PrimaryColor} = useContext(ThemeContext);
  const {Login} = useContext(AuthContext);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")

  return (
    <View style={styles.main}>
      <View style={styles.imageView}>
        <Image source={require("../../assets/icon.png")} />
      </View>
      <View style={styles.loginSection}>
        <TextInput placeholder="Email" style={styles.textInput} onChange={e=>setEmail(e.text)} />
        <TextInput placeholder="Password" style={styles.textInput} onChange={e=>setPassword(e.text)} />
        <Button title="Login" type="solid" raised={true} onPress={}/>
      </View>
      <View style={styles.signupView}>
        <Text style={{ fontWeight: "bold" }} onPress={}>
          New Here? Click here to Register
        </Text>
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
  imageView: {
    justifyContent: "center"
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
    justifyContent: "center"
  }
});

export default withLayout(Login);
