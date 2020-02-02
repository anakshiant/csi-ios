import React, { createContext } from "react";
import theme from "../theme.json";

const ThemeContext = createContext({
  PrimaryColor: theme.primary,
  SuccessColor: theme.success,
  DangerColor: theme.danger,
  InfoColor: theme.info
});

export const ThemeContextProvider = ThemeContext.Provider;

export const ThemeContextConsumer = ThemeContext.Consumer;

export default ThemeContext;