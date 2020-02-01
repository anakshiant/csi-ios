import React from "react";
import { View, Text } from "react-native";

import { withLayout } from "../../Components/withLayout";

const Emergency = ({ navigation }) => {
  return (
    <React.Fragment>
      <View>
        <Text>root</Text>
      </View>
    </React.Fragment>
  );
};

export default withLayout(Emergency);
