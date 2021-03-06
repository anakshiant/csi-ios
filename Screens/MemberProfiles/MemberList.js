import React, { useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";

import { withLayout } from "../../Components/withLayout";
import MemberProfileContainer from "../../Containers//MemberProfile/MemberProfile";
import UserAvatar from "../../Components/UserAvatar";

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
                      leftAvatar={<UserAvatar userIcon={member.picture} />}
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
