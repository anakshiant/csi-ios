import React, { createContext, useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

const AuthContext = createContext({
  authenticated: false,
  setToken: () => {},
  getToken: () => {},
  user: null
});

export default AuthContext;

export const AuthContextConsumer = AuthContext.Consumer;

export const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem("user");
        let user = JSON.parse(token);
        setAuthenticated(true);
        setUserId(user.userId);
        setUser(user.profile);
      } catch (err) {
        //ignore
      }
    })();
  }, []);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("user");
      return JSON.parse(token);
    } catch (err) {
      console.log(err);
    }
  };

  const setToken = async user => {
    try {
      const token = JSON.stringify({ userId: user.id, profile: user });
      await AsyncStorage.setItem("user", token);
      setUserId(user.id);
      setAuthenticated(true);
      setUser(user);
    } catch (err) {
      //ifnore
    }
  };

  return (
    <AuthContext.Provider
      value={{
        setToken,
        getToken,
        user,
        authenticated
      }}
    >
      {children({ user, authenticated })}
    </AuthContext.Provider>
  );
};
