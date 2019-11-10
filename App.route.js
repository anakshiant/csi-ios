import {
  createSwitchNavigator,
  createAppContainer,
  SwitchRouter
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { StyleSheet } from "react-native";

import { Splash } from "./Screens/Splash/Index";
import Login from "./Screens/Account/Login";
import Profile from "./Screens/Account/Profile";
import Article from "./Screens/Article/Article";
import ArticleList from "./Screens/Article/ArticleList";
import MemberProfile from "./Screens/MemberProfiles/MemberProfile";
import MemberList from "./Screens/MemberProfiles/MemberList";
import theme from "./theme.json";

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: theme.primary
  },
  headerTitleStyle: {
    color: "white"
  }
});

const articleRoute = createStackNavigator(
  {
    ArticleList: ArticleList,
    Article: Article
  },
  {
    initialRouteName: "ArticleList",
    defaultNavigationOptions: {
      headerTitle: "Article",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
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

const MainAppRoute = createDrawerNavigator(
  {
    Profile: profileRoute,
    Article: articleRoute,
    MemberProfiles: memberProfileRoute
  },
  {
    initialRouteName: "Profile"
  }
);

const AuthRoute = createStackNavigator(
  {
    Login: Login
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
