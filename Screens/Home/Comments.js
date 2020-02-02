import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  ScrollView
} from "react-native";

import { Button, Icon } from "react-native-elements";

import CommentsContainer from "../../Containers/Home/Comments";
import { withLayout } from "../../Components/withLayout";
import UserTile from "../../Components/UserTile";
import AuthContext from "../../Contexts/AuthContext";

const Comment = ({ comment, deleteHandler }) => {
  return (
    <View style={styles.commentRoot}>
      <View style={styles.comment}>
        <UserTile
          userName={comment.commentedUser.first_name}
          userIcon={comment.commentedUser.picture}
        />
        <View>
          <Text>{comment.comment}</Text>
        </View>
      </View>
      <Button
        icon={<Icon name="delete" color="red" />}
        buttonStyle={{ height: 50, width: 50, borderRadius: "50%" }}
        onPress={deleteHandler}
        style={{ padding: 20 }}
        type="clear"
      />
    </View>
  );
};

const Comments = ({ navigation }) => {
  const postId = navigation.getParam("postId");
  const [commentText, setCommentText] = useState("");
  const { user } = useContext(AuthContext);

  return (
    <CommentsContainer postId={postId}>
      {({ processing, comments, postComment, removeComment }) => {
        return (
          <View style={styles.root}>
            <View style={styles.meRow}>
              <UserTile userName={user.first_name} userIcon={user.picture} />
            </View>
            <ScrollView style={styles.comments}>
              {processing && <ActivityIndicator size="large" />}
              {!processing && (
                <View style={styles.main}>
                  {comments.map(comment => (
                    <Comment
                      key={comment.id}
                      comment={comment}
                      deleteHandler={() => removeComment(comment.id, postId)}
                    />
                  ))}
                </View>
              )}
            </ScrollView>
            <View style={styles.addComment}>
              <TextInput
                style={styles.commentInputBox}
                placeholder="Add a comment"
                value={commentText}
                onChangeText={setCommentText}
              />
              <Button
                icon={<Icon name="send" color="white" />}
                buttonStyle={{ height: 50, width: 50, borderRadius: "50%" }}
                onPress={() => {
                  postComment(postId, user.id, commentText);
                  setCommentText("");
                }}
                style={{ padding: 20 }}
              />
            </View>
          </View>
        );
      }}
    </CommentsContainer>
  );
};

export default withLayout(Comments);

const styles = StyleSheet.create({
  root: {
    flex: 6
  },
  comments: {
    flex: 7
  },
  meRow: {
    height: 100,
    padding: 15,
    borderBottomColor: "gray",
    borderWidth: 1
  },
  commentRoot: {
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "white",
    borderWidth: 1
  },
  comment: {
    height: 100,
    padding: 15,
    justifyContent: "space-evenly"
  },
  addComment: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  commentInputBox: {
    width: 300,
    padding: 20,
    borderBottomColor: "black"
  }
});
