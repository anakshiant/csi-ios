import React, { createContext, useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import { loginService } from "../services/account";

const AuthContext = createContext({
  authenticated: false,
  userId: 0,
  profile: null
});

export default AuthContext;

export const AuthContextConsumer = AuthContext.Consumer;

export const AuthContextProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState(0);
  const [profile, setProfile] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await loginService(username, password);
      if (response.status === true) {
        setAuthenticated(true);
        setUserId(response.data.id);
        setProfile(response.data);
        await AsyncStorage.setItem("user", { authenticated, userId, profile });
      }
    } catch (error) {}
  };

  const checkLogin = async () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem("user", (err, res) => {
        if (err) reject(false);
        if (res) {
          setAuthenticated(res.authenticated);
          setUserId(res.userId);
          setProfile(res.profile);
          resolve(true);
        }
        resolve(false);
      });
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: authenticated,
        userId: userId,
        profile: profile,
        login: login,
        checkLogin: checkLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
