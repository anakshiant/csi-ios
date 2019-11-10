import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { Button, ListItem, Avatar, Card } from "react-native-elements";

import { withLayout } from "../../Components/withLayout";
import PostContainer from "../../Containers/Post";
import config from "../../config";

const PostTitle = ({ post }) => (
  <View style={{ flexDirection: "row" }}>
    <Avatar rounded size="medium" source={{ uri: post.user_info.picture }} />
    <Text style={{ fontWeight: "bold", padding: 10 }}>
      {post.user_info.first_name} {post.user_info.last_name}
    </Text>
  </View>
);

const PostCard = ({ post }) => (
  <Card>
    <PostTitle post={post} />
    <View style={{ alignItems: "stretch", marginTop: 15 }}>
      <Image source={{ uri: post.image }} style={{ height: 190 }} />
    </View>
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontWeight: "700", fontSize: 14 }}>
        {post.description}
      </Text>
    </View>
  </Card>
);

const ArticleList = ({ navigation }) => {
  return (
    <React.Fragment>
      <PostContainer>
        {({ processing, posts }) => (
          <View>
            {processing && <ActivityIndicator size="large" />}
            {!processing && (
              <ScrollView>
                {posts &&
                  posts.length &&
                  posts.map(post => <PostCard key={post.id} post={post} />)}
              </ScrollView>
            )}
          </View>
        )}
      </PostContainer>
    </React.Fragment>
  );
};

export default withLayout(ArticleList);
