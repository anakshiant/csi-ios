import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { withLayout } from "../../Components/withLayout";

const Article = ({ navigation, theme }) => {
  const article = navigation.getParam("article");

  return (
    <React.Fragment>
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: article.image }} />
        </View>
        <View style={{ padding: 30 }}>
          <View>
            <Text style={styles.title}>{article.title}</Text>
          </View>
          <View
            style={{
              backgroundColor: theme.PrimaryColor,
              padding: 20,
              alignItems: "center",
              marginTop: 10
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {new Date(article.created_at).toDateString()}
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.description}>{article.description}</Text>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

export default withLayout(Article);

const styles = StyleSheet.create({
  main: {
    padding: 10
  },
  image: {
    height: 200
  },
  imageContainer: {
    alignItems: "stretch"
  },
  title: {
    fontWeight: "900",
    fontSize: 20
  },
  description: {
    fontWeight: "100",
    fontSize: 13
  }
});
