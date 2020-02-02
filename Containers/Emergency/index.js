import React, { useState, useEffect } from "react";
import { getEmergencyData } from "../../services/article";

export default ({ children }) => {
  const [emergencyNumber, setEmergencyNumber] = useState("");
  const [processing, setProcessing] = useState(false);

  const getEmergencyNumber = async () => {
    setProcessing(true);
    const emergencyResponse = await getEmergencyData();
    if (emergencyResponse.status) {
      setEmergencyNumber(emergencyResponse.data.emergency_no);
    }
    setProcessing(false);
  };

  useEffect(() => {
    getEmergencyNumber();
  }, []);

  return children({ processing, emergencyNumber });
};
