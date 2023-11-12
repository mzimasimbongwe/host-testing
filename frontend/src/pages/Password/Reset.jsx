import React, { useState } from "react";
import { Link } from "react-router-dom";
import { id } from "../../assets";

// ...

function Reset() {
  const [idNumber, setIdNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="mb-2.5 block font-medium text-black dark:text-white">
          ID Number
        </label>
        <div className="relative flex items-center">
          <input
            type="text"
            name="idnumber"
            value={idNumber}
            placeholder="Enter your ID number"
            onChange={(e) => setIdNumber(e.target.value)}
            className="w-1/2 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          {errors.idnumber && (
            <span className="error text-red-600">{errors.idnumber}</span>
          )}
          <span className="absolute right-4 top-4">
            <img
              src={id}
              className="fill-current bg-transparent opacity-40"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            />
          </span>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
          >
            Reset Password
          </button>
        </div>
      </div>
    </form>
  );
}

export default Reset;
