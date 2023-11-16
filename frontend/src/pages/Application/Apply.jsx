import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Header from "../components/Hearder";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";

function Application() {
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentSecondName, setStudentSecondName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [parentFirstName, setParentFirstName] = useState("");
  const [parentSecondName, setParentSecondName] = useState("");
  const [parentContact, setParentContact] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    let validationErrors = {};

    // Validate student details
    if (validator.isEmpty(studentFirstName)) {
      validationErrors.studentFirstName = "Student first name is required";
    }

    if (validator.isEmpty(studentSecondName)) {
      validationErrors.studentSecondName = "Student second name is required";
    }

    if (validator.isEmpty(studentGrade)) {
      validationErrors.studentGrade = "Student grade is required";
    }

    // Validate parent details
    if (validator.isEmpty(parentFirstName)) {
      validationErrors.parentFirstName = "Parent first name is required";
    }

    if (validator.isEmpty(parentSecondName)) {
      validationErrors.parentSecondName = "Parent second name is required";
    }

    if (validator.isEmpty(parentContact)) {
      validationErrors.parentContact = "Parent contact is required";
    }

    // Validate address details
    if (validator.isEmpty(addressDetails)) {
      validationErrors.addressDetails = "Address details are required";
    }

    // Validate ID number
    if (validator.isEmpty(idnumber)) {
      validationErrors.idnumber = "ID number is required";
    } else if (!/^\d{13}$/.test(idnumber)) {
      validationErrors.idnumber = "Invalid ID number";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:4000/applications",
          {
            email,
            username,
            idnumber,
            dob,
            gender,
            studentFirstName,
            studentSecondName,
            studentGrade,
            parentFirstName,
            parentSecondName,
            parentContact,
            addressDetails,
          },
          {
            withCredentials: true,
          }
        );

        const token = response.data.token;
        setMessage("Registration Successful");

        // Fetch users if needed

        setTimeout(() => {
          navigate("/login");
          localStorage.setItem("token", token);
          setMessage("");
          setEmail("");
          setUsername("");
          setIdnumber("");
          setDob("");
          setGender("");
          setStudentFirstName("");
          setStudentSecondName("");
          setStudentGrade("");
          setParentFirstName("");
          setParentSecondName("");
          setParentContact("");
          setAddressDetails("");
        }, 2000);
      } catch (error) {
        if (error.response && error.response.status === 409) {
          setMessage("ID number already exists");
        } else {
          setMessage("Please provide correct RSA ID Number");
        }

        setTimeout(() => {
          setMessage("");
          setEmail("");
          setUsername("");
          setIdnumber("");
          setDob("");
          setGender("");
          setStudentFirstName("");
          setStudentSecondName("");
          setStudentGrade("");
          setParentFirstName("");
          setParentSecondName("");
          setParentContact("");
          setAddressDetails("");
        }, 5000);
      }
    }
  };

  return (
    <div>
      <Header heading="Application Form" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-2 gap-6">
            {/* Student Details */}
            <div>
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                Student Details
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Student First Name
                </label>
                <input
                  type="text"
                  name="studentFirstName"
                  value={studentFirstName}
                  placeholder="Enter student first name"
                  onChange={(e) => setStudentFirstName(e.target.value)}
                  className="mt-1 p-3 rounded-md w-full border border-stroke focus:outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {errors.studentFirstName && (
                  <p className="text-red-500 text-sm">
                    {errors.studentFirstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Student Second Name
                </label>
                <input
                  type="text"
                  name="studentSecondName"
                  value={studentSecondName}
                  placeholder="Enter student second name"
                  onChange={(e) => setStudentSecondName(e.target.value)}
                  className="mt-1 p-3 rounded-md w-full border border-stroke focus:outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {errors.studentSecondName && (
                  <p className="text-red-500 text-sm">
                    {errors.studentSecondName}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  ID Number
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="idnumber"
                    value={idnumber}
                    placeholder="Enter your id number"
                    onChange={(e) => setIdnumber(e.target.value)}
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  {errors.idnumber && (
                    <p className="text-red-500 text-sm">{errors.idnumber}</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Student Grade
                </label>
                <select
                  name="studentGrade"
                  value={studentGrade}
                  onChange={(e) => setStudentGrade(e.target.value)}
                  className="mt-1 p-3 rounded-md w-full border border-stroke focus:outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                >
                  <option value="" disabled>
                    Select Student Grade
                  </option>
                  <option value="grade1">Grade 1</option>
                  <option value="grade2">Grade 2</option>
                  <option value="grade3">Grade 3</option>
                  <option value="grade8">Grade 8</option>
                  <option value="grade9">Grade 9</option>
                  <option value="grade10">Grade 10</option>
                  <option value="grade11">Grade 11</option>
                  <option value="grade12">Grade 12</option>
                </select>
                {errors.studentGrade && (
                  <p className="text-red-500 text-sm">{errors.studentGrade}</p>
                )}
              </div>
            </div>

            {/* Parent Details */}
            <div>
              <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                Parent Details
              </h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Parent First Name
                </label>
                <input
                  type="text"
                  name="parentFirstName"
                  value={parentFirstName}
                  placeholder="Enter parent first name"
                  onChange={(e) => setParentFirstName(e.target.value)}
                  className="mt-1 p-3 rounded-md w-full border border-stroke focus:outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {errors.parentFirstName && (
                  <p className="text-red-500 text-sm">
                    {errors.parentFirstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Parent Second Name
                </label>
                <input
                  type="text"
                  name="parentSecondName"
                  value={parentSecondName}
                  placeholder="Enter parent second name"
                  onChange={(e) => setParentSecondName(e.target.value)}
                  className="mt-1 p-3 rounded-md w-full border border-stroke focus:outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {errors.parentSecondName && (
                  <p className="text-red-500 text-sm">
                    {errors.parentSecondName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">
                  Parent Contact
                </label>
                <input
                  type="text"
                  name="parentContact"
                  value={parentContact}
                  placeholder="Enter parent contact"
                  onChange={(e) => setParentContact(e.target.value)}
                  className="mt-1 p-3 rounded-md w-full border border-stroke focus:outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {errors.parentContact && (
                  <p className="text-red-500 text-sm">{errors.parentContact}</p>
                )}
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
              Address Details
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Address
              </label>
              <input
                type="text"
                name="addressDetails"
                value={addressDetails}
                placeholder="Enter address details"
                onChange={(e) => setAddressDetails(e.target.value)}
                className="mt-1 p-3 rounded-md w-full border border-stroke focus:outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              {errors.addressDetails && (
                <p className="text-red-500 text-sm">{errors.addressDetails}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-5 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Application;
