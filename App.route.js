import {
  createSwitchNavigator,
  createAppContainer,
  SwitchRouter
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Splash } from "./Screens/Splash/Index";
import Login from "./Screens/Account/Login";

// const MainAppRoute = createDrawerNavigator({});

const SwitchRoute = createSwitchNavigator(
  {
    Splash: Splash,
    Login: Login
  },
  { initialRouteName: "Splash" }
);

export default createAppContainer(SwitchRoute);
