import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";

function ApplicationForm() {
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    let validationErrors = {};

    // Validate student details
    if (validator.isEmpty(studentFirstName)) {
      validationErrors.studentFirstName = "Student first name is required";
    }

    if (validator.isEmpty(studentLastName)) {
      validationErrors.studentLastName = "Student second name is required";
    }

    if (validator.isEmpty(studentGrade)) {
      validationErrors.studentGrade = "Student grade is required";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost:4000/applystudent",
          {
            studentFirstName,
            studentLastName,
            studentGrade,
          },
          {
            withCredentials: true,
          }
        );

        const token = response.data.token;
        setMessage("Registration Successful");

        // Fetch users if needed

        setTimeout(() => {
          navigate("/submit");
          localStorage.setItem("token", token);
          setMessage("");
          setStudentFirstName("");
          setStudentLastName("");
          setStudentGrade("");
        }, 2000);
      } catch (error) {
        if (error.response && error.response.status === 409) {
          setMessage("ID number already exists");
        } else {
          setMessage("Please provide correct RSA ID Number");
        }

        setTimeout(() => {
          setMessage("");
          setStudentFirstName("");
          setStudentLastName("");
          setStudentGrade("");
        }, 5000);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-8">
        <div className="grid grid-cols-2 gap-6">
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
              <p className="text-red-500 text-sm">{errors.studentFirstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
              Student Last Name
            </label>
            <input
              type="text"
              name="studentLastName"
              value={studentLastName}
              placeholder="Enter student last name"
              onChange={(e) => setStudentLastName(e.target.value)}
              className="mt-1 p-3 rounded-md w-full border border-stroke focus:outline-none focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            {errors.studentLastName && (
              <p className="text-red-500 text-sm">{errors.studentLastName}</p>
            )}
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

        <div className="mt-8">
          <button
            type="submit"
            className="w-full py-3 bg-primary text-black rounded-md font-medium text-lg focus:outline-none"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplicationForm;
