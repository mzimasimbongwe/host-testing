import React, { useState } from "react";
import axios from "axios";

const ApplicationForm = () => {
  const [email, setEmail] = useState("");
  const [idnumber, setIdNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/apply-student", {
        email,
        idnumber,
        dateOfBirth,
        firstName,
        lastName,
      });

      console.log("Application submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-lg font-bold mb-4">Application Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label className="block mb-1">First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 px-2 py-1 rounded"
              required
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block mb-1">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 px-2 py-1 rounded"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-2 py-1 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">ID Number:</label>
          <input
            type="text"
            value={idnumber}
            onChange={(e) => setIdNumber(e.target.value)}
            className="w-full border border-gray-300 px-2 py-1 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Date of Birth:</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full border border-gray-300 px-2 py-1 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
