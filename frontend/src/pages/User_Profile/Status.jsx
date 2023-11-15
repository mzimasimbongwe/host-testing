import React, { useState } from "react";

const StatusStudent = () => {
  const [applicationNumber, setApplicationNumber] = useState("");
  const [status, setStatus] = useState(null);

  const handleCheckStatus = () => {
    setStatus("Your application is under review.");
  };

  return (
    <div>
      <h1>Check Application Status</h1>
      <p>Enter your application number to check your application status.</p>
      <input
        type="text"
        placeholder="Application Number"
        value={applicationNumber}
        onChange={(e) => setApplicationNumber(e.target.value)}
      />
      <button onClick={handleCheckStatus}>Check Status</button>

      {status && (
        <div>
          <h2>Your Application Status:</h2>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default StatusStudent;
