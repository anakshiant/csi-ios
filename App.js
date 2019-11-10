import React from "react";
import AppRoute from "./App.route";

import { AuthContextProvider } from "./Contexts/AuthContext";

export default () => {
  return (
    <AuthContextProvider>
      {({ authenticated, user }) => {
        return <AppRoute screenProps={{ authenticated, user }} />;
      }}
    </AuthContextProvider>
  );
};
