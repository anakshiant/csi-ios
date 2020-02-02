import React, { useState, useEffect, useContext } from "react";

import AuthContext from "../../Contexts/AuthContext";
import config from "../../config";

export default ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [processing, setProcessing] = useState(true);
  const { getToken } = useContext(AuthContext);

  useEffect(() => {
    (async function() {
      const auth = await getToken();
      setProfile(putImageUrl(auth.profile));
      setProcessing(false);
    })();
  }, []);

  const putImageUrl = profile => {
    profile.picture = `${config.imageBaseUrl}${profile.picture}`;
    return profile;
  };

  return children({ profile, processing });
};
