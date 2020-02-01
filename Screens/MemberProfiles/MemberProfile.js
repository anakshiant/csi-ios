import React from "react";
import {
  View,
  Text,
} from "react-native";
import { Button, ListItem, Avatar } from "react-native-elements";

import { withLayout } from "../../Components/withLayout";

const MemberProfile = ({ navigation }) => {
  const member = navigation.getParam("member");
  return (
    <View
      style={{
        alignItems: "center",
        padding: 20
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Avatar rounded size="xlarge" source={{ uri: member.picture }} />
        <View style={{ padding: 30 }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            {member.first_name} {member.last_name}
          </Text>
          {member.position ? (
            <Text>{member.position}</Text>
          ) : (
            <Text>Position not updated yet</Text>
          )}
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "300", fontSize: 30 }}>
          Personal Information
        </Text>
        <ListItem title={"Company"} subtitle={member.company} />
        <ListItem title={"Bio"} subtitle={member.bio} />
      </View>
      <View style={{ flexDirection: "row", padding: 5 }}>
        <Button title="Send Email" type="outline" />
        <Button title="Send Message" type="outline" />
      </View>
    </View>
  );
};

export default withLayout(MemberProfile);
