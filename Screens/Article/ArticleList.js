import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
import { Button, ListItem, Avatar, Card } from "react-native-elements";

import { withLayout } from "../../Components/withLayout";
import ArticleContainer from "../../Containers/Article";
import config from "../../config";

const ArticleCard = ({ article, onPress }) => (
  <Card
    containerStyle={{ padding: 10 }}
    title={article.title}
    image={{ uri: article.image }}
  >
    <Button title="Read" type="outline" onPress={() => onPress(article)} />
  </Card>
);

const ArticleList = ({ navigation }) => {
  return (
    <React.Fragment>
      <ArticleContainer>
        {({ processing, articles }) => (
          <View>
            {processing && <ActivityIndicator size="large" />}
            {!processing && (
              <View style={{ padding: 10 }}>
                {articles &&
                  articles.length &&
                  articles.map(article => (
                    <ArticleCard
                      key={articles.id}
                      article={article}
                      onPress={article =>
                        navigation.navigate("Article", { article })
                      }
                    />
                  ))}
              </View>
            )}
          </View>
        )}
      </ArticleContainer>
    </React.Fragment>
  );
};

export default withLayout(ArticleList);
