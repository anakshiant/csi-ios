import React from "react";
import { AppLayout } from "./AppLayout";

export const withLayout = Component => {
  return props => {
    return (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    );
  };
};
