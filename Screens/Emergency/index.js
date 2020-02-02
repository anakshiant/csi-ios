import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Linking,
  StyleSheet
} from "react-native";

import { withLayout } from "../../Components/withLayout";
import EmergencyContainer from "../../Containers/Emergency";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";

const Emergency = ({ navigation }) => {
  const makePhoneCall = number => {
    const url = `telprompt:${number}`;
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          alert("Can not make this phone call");
          return;
        }
        return Linking.openURL(url);
      })
      .catch(() => alert("Can not make this phone call"));
  };

  return (
    <EmergencyContainer>
      {({ processing, emergencyNumber }) => {
        return (
          <React.Fragment>
            {processing && <ActivityIndicator size="large" />}
            {!processing && (
              <View style={styles.root}>
                <TextInput
                  multiline={true}
                  placeholder="Enter Message"
                  style={styles.textInput}
                />
                <Button
                  buttonStyle={{ borderRadius: 5 }}
                  title="Send Message"
                  onPress={() => makePhoneCall(emergencyNumber)}
                  style={styles.button}
                />
                <Text style={{ alignSelf: "center", fontWeight: "700" }}>
                  Or
                </Text>
                <Button
                  buttonStyle={{ borderRadius: 5 }}
                  title="Call Emergency Number"
                  onPress={() => makePhoneCall(emergencyNumber)}
                  style={styles.button}
                />
              </View>
            )}
          </React.Fragment>
        );
      }}
    </EmergencyContainer>
  );
};

export default withLayout(Emergency);

const styles = StyleSheet.create({
  root: {
    padding: 10
  },
  textInput: {
    height: 300,
    borderColor: "#757575",
    borderWidth: 1,
    borderRadius: 8
  },
  button: {
    padding: 10
  }
});
