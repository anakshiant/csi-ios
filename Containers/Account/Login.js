import React, { useState, useContext } from "react";
import { loginService } from "../../services/account";

import AuthContext from "../../Contexts/AuthContext";

export default ({ children, action = () => {} }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(AuthContext);

  const login = async () => {
    try {
      const response = await loginService(email, password);
      if (response.status === true) {
        setToken(response.data);
        action();
      }
    } catch (err) {
      //ifnore
      alert(err);
    }
  };

  return children({ email, setEmail, password, setPassword, login });
};
