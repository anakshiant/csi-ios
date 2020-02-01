import React from "react";
import {
  createSwitchNavigator,
  createAppContainer,
  SwitchRouter
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { StyleSheet, Button } from "react-native";
import { Icon } from "react-native-elements";

import { Splash } from "./Screens/Splash/Index";
import Login from "./Screens/Account/Login";
import SignUp from "./Screens/Account/SingnUp";
import Profile from "./Screens/Account/Profile";
import Article from "./Screens/InformationCenter/Article";
import ArticleList from "./Screens/InformationCenter/ArticleList";
import MemberProfile from "./Screens/MemberProfiles/MemberProfile";
import MemberList from "./Screens/MemberProfiles/MemberList";
import Post from "./Screens/Home";
import Comments from "./Screens/Home/Comments";
import theme from "./theme.json";
import Emergency from "./Screens/Emergency";

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: theme.primary
  },
  headerTitleStyle: {
    color: "white"
  }
});

const informationCenterRoute = createStackNavigator(
  {
    ArticleList: ArticleList,
    Article: Article
  },
  {
    initialRouteName: "ArticleList",
    defaultNavigationOptions: {
      headerTitle: "Article",
      headerStyle: styles.headerStyle,
      headerTintColor: "white",
      headerRight: () => (
        <Button
          onPress={() => alert("This is a button!")}
          title="Info"
          color="#fff"
        />
      )
    }
  }
);

const profileRoute = createStackNavigator(
  {
    Profile: Profile
  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      headerTitle: "Profile",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const memberProfileRoute = createStackNavigator(
  {
    MemberProfile: MemberProfile,
    MemberList: MemberList
  },
  {
    initialRouteName: "MemberList",
    defaultNavigationOptions: {
      headerTitle: "Member Profile",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const homeRoute = createStackNavigator(
  {
    Post: Post,
    Comments: Comments
  },
  {
    initialRouteName: "Post",
    defaultNavigationOptions: {
      headerTitle: "Home",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const emergencyRoute = createStackNavigator(
  { Emergency: Emergency },
  {
    initialRouteName: "Emergency",
    defaultNavigationOptions: {
      headerTitle: "Emergency",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const MainAppRoute = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: <Icon name="home" />
      },
      screen: homeRoute
    },
    Emergency: {
      navigationOptions: {
        drawerLabel: "Emergency",
        drawerIcon: <Icon name="notifications" />
      },
      screen: emergencyRoute
    },
    MemberProfiles: {
      navigationOptions: {
        drawerLabel: "Member Profiles",
        drawerIcon: <Icon name="person-add" />
      },
      screen: memberProfileRoute
    },
    InformationCenter: {
      navigationOptions: {
        drawerLabel: "Informationn Center",
        drawerIcon: <Icon name="apps" />
      },
      screen: informationCenterRoute
    },
    Profile: {
      navigationOptions: {
        drawerLabel: "Profile",
        drawerIcon: <Icon name="person" />
      },
      screen: Profile
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerRight: () => (
        <Button
          onPress={() => alert("This is a button!")}
          title="Info"
          color="#fff"
        />
      )
    }
  }
);

const AuthRoute = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTitle: "CSI",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const SwitchRoute = createSwitchNavigator(
  {
    Splash: Splash,
    Auth: AuthRoute,
    Main: MainAppRoute
  },
  {
    initialRouteName: "Splash"
  }
);

export default createAppContainer(SwitchRoute);
