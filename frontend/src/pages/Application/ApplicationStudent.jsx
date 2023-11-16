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

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    let validationError = null;

    switch (name) {
      case "email":
        if (validator.isEmpty(value)) {
          validationError = "Email is required";
        } else if (!validator.isEmail(value)) {
          validationError = "Invalid email address";
        } else {
          try {
            const response = await axios.get(
              `http://localhost:4000/check-email/${value}`
            );
            if (response.data.exists) {
              validationError = "Email already exists";
            }
          } catch (error) {
            console.error("Error checking email:", error);
          }
        }
        break;

      case "idnumber":
        if (validator.isEmpty(value)) {
          validationError = "ID number is required";
        } else if (!/^\d{13}$/.test(value)) {
          validationError = "Invalid ID number";
        } else {
          try {
            const response = await axios.get(
              `http://localhost:4000/check-idnumber/${value}`
            );
            if (response.data.exists) {
              validationError = "ID number already exists";
            }
          } catch (error) {
            console.error("Error checking ID number:", error);
          }
        }
        break;

      case "dateOfBirth":
        if (validator.isEmpty(value)) {
          validationError = "Date of birth is required";
        } else {
          // Add your custom validation logic for dateOfBirth if needed
        }
        break;

      case "firstName":
        if (validator.isEmpty(value)) {
          validationError = "First name is required";
        } else {
          // Add your custom validation logic for firstName if needed
        }
        break;

      case "lastName":
        if (validator.isEmpty(value)) {
          validationError = "Last name is required";
        } else {
          // Add your custom validation logic for lastName if needed
        }
        break;

      case "street":
        if (validator.isEmpty(value)) {
          validationError = "Street is required";
        } else {
          // Add your custom validation logic for street if needed
        }
        break;

      case "city":
        if (validator.isEmpty(value)) {
          validationError = "City is required";
        } else {
          // Add your custom validation logic for city if needed
        }
        break;

      case "state":
        if (validator.isEmpty(value)) {
          validationError = "State is required";
        } else {
          // Add your custom validation logic for state if needed
        }
        break;

      case "zip":
        if (validator.isEmpty(value)) {
          validationError = "ZIP code is required";
        } else {
          // Add your custom validation logic for zip if needed
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationError,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formIsValid = Object.values(errors).every((error) => error === null);

    if (formIsValid) {
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:4000/apply-student",
          {
            email,
            idnumber,
            dateOfBirth,
            firstName,
            lastName,
            street,
            city,
            state,
            zip,
          }
        );

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
                        onBlur={handleInputChange}
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
                        onBlur={handleInputChange}
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
                      onBlur={handleInputChange}
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
                      onBlur={handleInputChange}
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
                      onBlur={handleInputChange}
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
