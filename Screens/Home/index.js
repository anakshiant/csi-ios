import React, { useContext } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { Button, Card, Icon } from "react-native-elements";

import { withLayout } from "../../Components/withLayout";
import PostContainer from "../../Containers/Home/Post";
import UserTile from "../../Components/UserTile";
import DateDiff from "../../Components/DayDiff";
import Picture from "../../Components/Picture";
import AuthContext from "../../Contexts/AuthContext";

const PostTitle = ({ post }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <UserTile
      userName={post.user_info.first_name}
      userIcon={post.user_info.picture}
    />
    <DateDiff date={post.created_at} />
  </View>
);

const PostCard = ({
  post,
  onCommentClickHandler,
  showDeleteButton,
  deleteHandler
}) => (
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
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }}
    >
      <Button
        title="View All comments"
        type="clear"
        titleStyle={{ fontSize: 15, color: "grey" }}
        onPress={() => onCommentClickHandler(post.id)}
        style={{ padding: 20 }}
      />
      {showDeleteButton === true && (
        <Button
          icon={<Icon name="delete" color="red" />}
          buttonStyle={{ height: 50, width: 50, borderRadius: "50%" }}
          onPress={deleteHandler}
          style={{ padding: 20 }}
          type="clear"
        />
      )}
    </View>
  </Card>
);

const PostList = ({ navigation }) => {
  const onCommentClickHandler = postId => {
    navigation.navigate("Comments", { postId });
  };

  const { user } = useContext(AuthContext);

  return (
    <React.Fragment>
      <PostContainer>
        {({ processing, posts, removePost }) => (
          <View>
            {processing && <ActivityIndicator size="large" />}
            {!processing && (
              <ScrollView>
                {posts &&
                  posts.length > 0 &&
                  posts.map(post => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onCommentClickHandler={onCommentClickHandler}
                      showDeleteButton={user.id === post.uid}
                      deleteHandler={() => removePost(post.id)}
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
