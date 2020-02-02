import { useState } from "react";
import { signupService } from "../../services/account";

export default ({ children, action = () => {} }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");

  const signUp = async () => {
    try {
      setProcessing(true);
      const response = await signupService({
        email,
        password,
        firstName,
        lastName
      });
      setProcessing(false);
      if (response.status === true) {
        action();
      } else {
        setError(response.message);
        alert(response.message);
      }
    } catch (err) {
      setError("Some Error occured");
    }
  };

  return children({
    email,
    setEmail,
    password,
    setPassword,
    signUp,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    processing,
    error
  });
};
