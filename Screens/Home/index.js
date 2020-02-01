import React from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { Button, Card } from "react-native-elements";

import { withLayout } from "../../Components/withLayout";
import PostContainer from "../../Containers/Home/Post";
import UserTile from "../../Components/UserTile";
import DateDiff from "../../Components/DayDiff";
import Picture from "../../Components/Picture";

const PostTitle = ({ post }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <UserTile
      userName={post.user_info.first_name}
      userIcon={post.user_info.picture}
    />
    <DateDiff date={post.created_at} />
  </View>
);

const PostCard = ({ post, onCommentClickHandler }) => (
  <Card>
    <PostTitle post={post} />
    {post.image.length > 0 && (
      <View style={{ alignItems: "stretch", marginTop: 15 }}>
        <Picture name={post.image} style={{ height: 190 }} />
      </View>
    )}
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontWeight: "400", fontSize: 14 }}>
        {post.description}
      </Text>
    </View>
    <View style={{ alignItems: "flex-start" }}>
      <Button
        title="View All comments"
        type="clear"
        titleStyle={{ fontSize: 15, color: "grey" }}
        onPress={() => onCommentClickHandler(post.id)}
      />
    </View>
  </Card>
);

const PostList = ({ navigation }) => {
  const onCommentClickHandler = postId => {
    navigation.navigate("Comments", { postId });
  };

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
                  posts.map(post => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onCommentClickHandler={onCommentClickHandler}
                    />
                  ))}
              </ScrollView>
            )}
          </View>
        )}
      </PostContainer>
    </React.Fragment>
  );
};

export default withLayout(PostList);
