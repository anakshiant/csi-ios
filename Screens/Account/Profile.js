import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";
import { Button, ListItem, Avatar, Card } from "react-native-elements";

import { withLayout } from "../../Components/withLayout";
import ProfileContainer from "../../Containers/Profile";
import config from "../../config";

const Profile = ({ navigation }) => {
  return (
    <React.Fragment>
      <ProfileContainer>
        {({ profile, processing }) => (
          <View style={styles.main}>
            {processing && <ActivityIndicator size="large" />}
            {!processing && (
              <React.Fragment>
                <View style={{ alignItems: "center" }}>
                  <Avatar
                    rounded
                    size="large"
                    source={{ uri: profile.picture }}
                    style={styles.profilePicture}
                  />
                  <Button title="CHANGE PHOTO" type="clear" />
                </View>
                <View>
                  <Card title="Profile">
                    <ListItem
                      title="First Name"
                      subtitle={profile.first_name}
                    />
                    <ListItem title="Last Name" subtitle={profile.last_name} />
                    <ListItem title="Email" subtitle={profile.email} />
                    <ListItem title="Phone" subtitle={profile.phone} />
                    <ListItem title="Company" subtitle={profile.company} />
                    <ListItem title="Bio" subtitle={profile.bio} />
                    <Button title="UPDATE PROFILE" type="solid" />
                  </Card>
                </View>
              </React.Fragment>
            )}
          </View>
        )}
      </ProfileContainer>
    </React.Fragment>
  );
};

export default withLayout(Profile);

const styles = StyleSheet.create({
  main: {
    justifyContent: "flex-start",
    flex: 1,
    alignItems: "stretch"
  },
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 3
  }
});
