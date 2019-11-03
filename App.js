import React from "react";
import AppRoute from "./App.route";

import { AuthContextProvider } from "./Contexts/AuthContext";

export default () => {
  return (
    <AuthContextProvider>
      <AppRoute />
    </AuthContextProvider>
  );
};
