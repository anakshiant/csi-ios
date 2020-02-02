import React, { useState, useEffect } from "react";

import { getRecentUsers } from "../../services/article";
import config from "../../config";

export default ({ children }) => {
  const [members, setMembers] = useState([]);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    (async function() {
      const memberResponse = await getRecentUsers();
      if (memberResponse.status) {
        setMembers(memberResponse.data);
        setProcessing(false);
      }
    })();
  }, []);

  return children({ processing, members });
};
