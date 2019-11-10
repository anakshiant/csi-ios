import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
import {
  Button,
  ListItem,
  Avatar,
  Card,
  SearchBar
} from "react-native-elements";

import { withLayout } from "../../Components/withLayout";
import MemberProfileContainer from "../../Containers/MemberProfile";
import config from "../../config";

const MemberList = ({ navigation, theme }) => {
  const [search, setSearch] = useState("");

  return (
    <React.Fragment>
      <MemberProfileContainer>
        {({ members, processing }) => (
          <React.Fragment>
            <SearchBar
              placeholder="Search here..."
              value={search}
              onChangeText={setSearch}
              lightTheme
              style={{ marginTop: -3 }}
            />
            {processing && (
              <ActivityIndicator size="large" color={theme.PrimaryColor} />
            )}
            {!processing && (
              <View>
                {members &&
                  members.length &&
                  members.map(member => (
                    <ListItem
                      key={member.id}
                      title={`${member.first_name} ${member.last_name}`}
                      leftAvatar={
                        member.uri ? { source: { uri: member.picture } } : {}
                      }
                      onPress={() =>
                        navigation.navigate("MemberProfile", { member })
                      }
                    />
                  ))}
              </View>
            )}
          </React.Fragment>
        )}
      </MemberProfileContainer>
    </React.Fragment>
  );
};

export default withLayout(MemberList);
