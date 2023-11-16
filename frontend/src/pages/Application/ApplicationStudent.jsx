import React, { useState } from "react";
import axios from "axios";
import validator from "validator";

const ApplicationForm = () => {
  const [email, setEmail] = useState("");
  const [idnumber, setIdNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (validator.isEmpty(email)) {
      errors.email = "Email is required";
    } else if (!validator.isEmail(email)) {
      errors.email = "Invalid email address";
    }

    if (validator.isEmpty(idnumber)) {
      errors.idnumber = "ID number is required";
    } else if (!/^\d{13}$/.test(idnumber)) {
      errors.idnumber = "Invalid ID number";
    }

    if (validator.isEmpty(firstName)) {
      errors.firstName = "First name is required";
    }

    if (validator.isEmpty(lastName)) {
      errors.lastName = "Last name is required";
    }

    if (validator.isEmpty(street)) {
      errors.street = "Street is required";
    }

    if (validator.isEmpty(city)) {
      errors.city = "City is required";
    }

    if (validator.isEmpty(state)) {
      errors.state = "State is required";
    }

    if (validator.isEmpty(zip)) {
      errors.zip = "ZIP code is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/apply-student", {
        email,
        idnumber,
        dateOfBirth,
        firstName,
        lastName,
        street,
        city,
        state,
        zip,
      });

      setMessage("Application submitted successfully");
      setTimeout(() => {
        setMessage("");
        setEmail("");
        setIdNumber("");
        setDateOfBirth("");
        setFirstName("");
        setLastName("");
        setStreet("");
        setCity("");
        setState("");
        setZip("");
      }, 5000);

      console.log("Application submitted successfully:", response.data);
    } catch (error) {
      setMessage("Error submitting application");
      console.error("Error submitting application:", error);
    }
  };

  return (
    <div className="w-full bg-[#F5F5F5] py-24 py-6 md:py-24">
      <div className="md:max-w-[1480px] max-w-[1390px] mx-auto w-full h-full flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="container mx-auto">
          {message && (
            <div
              className={`flex justify-center p-4 mb-4 font-bold ${
                message.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </div>
          )}
          <h2 className="text-lg font-bold mb-4">Application Form</h2>
          <form onSubmit={handleSubmit} className="mx-auto">
            <div className="form-group">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="w-full md:w-1/2 pr-2">
                  <h3>Student Details</h3>
                  <div className="flex mb-4">
                    <div className="w-1/2 pr-2">
                      <label className="block mb-1">First Name:</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full border border-gray-300 px-2 py-1 rounded"
                        required
                      />
                      {errors.firstName && (
                        <div className="text-red-500">{errors.firstName}</div>
                      )}
                    </div>
                    <div className="w-1/2 pl-2">
                      <label className="block mb-1">Last Name:</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full border border-gray-300 px-2 py-1 rounded"
                        required
                      />
                      {errors.lastName && (
                        <div className="text-red-500">{errors.lastName}</div>
                      )}
                    </div>
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
                    {errors.idnumber && (
                      <div className="text-red-500">{errors.idnumber}</div>
                    )}
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
                  <div className="mb-4">
                    <label className="block mb-1">Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 px-2 py-1 rounded"
                      required
                    />
                    {errors.email && (
                      <div className="text-red-500">{errors.email}</div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-1/2 pl-2">
                  <h3>Address</h3>
                  <div className="mb-4">
                    <label className="block mb-1">Street:</label>
                    <input
                      type="text"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      className="w-full border border-gray-300 px-2 py-1 rounded"
                      required
                    />
                    {errors.street && (
                      <div className="text-red-500">{errors.street}</div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">City:</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full border border-gray-300 px-2 py-1 rounded"
                      required
                    />
                    {errors.city && (
                      <div className="text-red-500">{errors.city}</div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">State:</label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full border border-gray-300 px-2 py-1 rounded"
                      required
                    />
                    {errors.state && (
                      <div className="text-red-500">{errors.state}</div>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1">Zip:</label>
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="w-full border border-gray-300 px-2 py-1 rounded"
                      required
                    />
                    {errors.zip && (
                      <div className="text-red-500">{errors.zip}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
