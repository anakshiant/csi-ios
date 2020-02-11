import React from "react";
import {
  createSwitchNavigator,
  createAppContainer,
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
import ProjectApproval from "./Screens/ProjectApproval";
import Events from "./Screens/Events";
import Inbox from "./Screens/Inbox";
import Warning from "./Screens/Warning";
import PublishEvent from "./Screens/PublishEvent";
import InfoCenter from "./Screens/InfoCenter";
import PushNotification from "./Screens/PushNotification";
import Approvals from "./Screens/Approvals";
import LogProjects from "./Screens/LogProjects";

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

const projectApprovalRoute = createStackNavigator(
  {
    ProjectApproval: ProjectApproval
  },
  {
    initialRouteName: "ProjectApproval",
    defaultNavigationOptions: {
      headerTitle: "Project Approval",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const eventsRoute = createStackNavigator(
  {
    Events: Events
  },
  {
    initialRouteName: "Events",
    defaultNavigationOptions: {
      headerTitle: "Events",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const inboxRoute = createStackNavigator(
  {
    Inbox: Inbox
  },
  {
    initialRouteName: "Inbox",
    defaultNavigationOptions: {
      headerTitle: "Inbox",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const warningRoute = createStackNavigator(
  {
    Warning: Warning
  },
  {
    initialRouteName: "Warning",
    defaultNavigationOptions: {
      headerTitle: "Warning/Fine",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const publishEventRoute = createStackNavigator(
  {
    PublishEvent: PublishEvent
  },
  {
    initialRouteName: "PublishEvent",
    defaultNavigationOptions: {
      headerTitle: "Publish Event",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const infoCenterRoute = createStackNavigator(
  {
    InfoCenter: InfoCenter
  },
  {
    initialRouteName: "InfoCenter",
    defaultNavigationOptions: {
      headerTitle: "Info Center",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const pushNotificationRoute = createStackNavigator(
  {
    PushNotification: PushNotification
  },
  {
    initialRouteName: "PushNotification",
    defaultNavigationOptions: {
      headerTitle: "Push Notification",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const approvalsRoute = createStackNavigator(
  {
    Approvals: Approvals
  },
  {
    initialRouteName: "Approvals",
    defaultNavigationOptions: {
      headerTitle: "Approvals",
      headerStyle: styles.headerStyle,
      headerTintColor: "white"
    }
  }
);

const logProjectRoute = createStackNavigator(
  {
    LogProjects: LogProjects
  },
  {
    initialRouteName: "LogProjects",
    defaultNavigationOptions: {
      headerTitle: "Log Projects",
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
    ProjectApproval: {
      navigationOptions: {
        drawerLabel: "Project Approval",
        drawerIcon: <Icon name="fire" type="font-awesome" />
      },
      screen: projectApprovalRoute
    },
    Events: {
      navigationOptions: {
        drawerLabel: "Events",
        drawerIcon: <Icon name="perm-contact-calendar" />
      },
      screen: eventsRoute
    },
    InformationCenter: {
      navigationOptions: {
        drawerLabel: "Informationn Center",
        drawerIcon: <Icon name="apps" />
      },
      screen: informationCenterRoute
    },
    Inbox: {
      navigationOptions: {
        drawerLabel: "Inbox",
        drawerIcon: <Icon name="inbox" />
      },
      screen: inboxRoute
    },
    Warning: {
      navigationOptions: {
        drawerLabel: "Warning",
        drawerIcon: <Icon name="warning" />
      },
      screen: warningRoute
    },
    PublishEvent: {
      navigationOptions: {
        drawerLabel: "Publish Event",
        drawerIcon: <Icon name="event" />
      },
      screen: publishEventRoute
    },
    InfoCenter: {
      navigationOptions: {
        drawerLabel: "Info Center",
        drawerIcon: <Icon name="info" />
      },
      screen: infoCenterRoute
    },
    PushNotification: {
      navigationOptions: {
        drawerLabel: "Push Notification",
        drawerIcon: <Icon name="notifications" />
      },
      screen: pushNotificationRoute
    },
    Approvals: {
      navigationOptions: {
        drawerLabel: "Approvals",
        drawerIcon: <Icon name="confirmation-number" />
      },
      screen: approvalsRoute
    },
    LogProjects: {
      navigationOptions: {
        drawerLabel: "Log Projects",
        drawerIcon: <Icon name="event" />
      },
      screen: logProjectRoute
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

// const profileRoute = createStackNavigator(
//   {
//     Profile: Profile
//   },
//   {
//     initialRouteName: "Profile",
//     defaultNavigationOptions: {
//       headerTitle: "Profile",
//       headerStyle: styles.headerStyle,
//       headerTintColor: "white"
//     }
//   }
// );
