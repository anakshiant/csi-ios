import React from "react";
import { View, Text, Linking } from "react-native";
import { Button, ListItem, Avatar } from "react-native-elements";
import Mailer from "react-native-mail";

import { withLayout } from "../../Components/withLayout";
import UserAvatar from "../../Components/UserAvatar";

const MemberProfile = ({ navigation }) => {
  const member = navigation.getParam("member");

  const sendEmailHandler = email => {
    Mailer.mail({});
  };

  return (
    <View style={{ padding: 30 }}>
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <UserAvatar userIcon={member.picture} />
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ fontWeight: "600", fontSize: 15 }}>
            {member.first_name} {member.last_name}
          </Text>
          {member.position ? (
            <Text>{member.position}</Text>
          ) : (
            <Text>Position not updated yet</Text>
          )}
        </View>
      </View>
      <View style={{ marginTop: 20, paddingTop: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Personal Information
        </Text>
        <ListItem title={"Company"} subtitle={member.company} />
        <ListItem title={"Bio"} subtitle={member.bio} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Button
          title="Send Email"
          type="outline"
          onPress={() => {
            sendEmailHandler(member.email);
          }}
        />
        <Button title="Send Message" type="outline" />
      </View>
    </View>
  );
};

export default withLayout(MemberProfile);
