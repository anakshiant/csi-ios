import React, { useState, useEffect } from "react";

import { getRecentUsers } from "../services/article";
import config from "../config";

export default ({ children }) => {
  const [members, setMembers] = useState([]);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    (async function() {
      const memberResponse = await getRecentUsers();
      if (memberResponse.status) {
        memberResponse.data = memberResponse.data.map(putImageUrl);
        setMembers(memberResponse.data);
        setProcessing(false);
        console.log(memberResponse.data);
      }
    })();
  }, []);

  const putImageUrl = user => {
    user.picture = user.picture ? `${config.imageBaseUrl}${user.picture}` : "";
    return user;
  };

  return children({ processing, members });
};
