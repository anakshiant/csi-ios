import React, { useContext } from "react";
import AppLayout from "./AppLayout";

import ThemeContext from "../Contexts/ThemeContext";
import AuthContext from "../Contexts/AuthContext";

export const withLayout = Component => {
  return props => {
    const theme = useContext(ThemeContext);
    const auth = useContext(AuthContext);
    return (
      <AppLayout>
        <Component {...props} theme={theme} auth={auth} />
      </AppLayout>
    );
  };
};
