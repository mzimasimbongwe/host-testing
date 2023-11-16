import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password
    if (!password) {
      setError("Password is required");
      return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Call the backend API to update the password
      const response = await axios.post(
        "http://localhost:4000/update-password",
        {
          password,
          confirmPassword,
        }
      );

      if (response.status === 200) {
        setSuccess("Password has been updated successfully");
        // Navigate to the login page
        navigate("/login");
      } else {
        setError("Failed to update the password");
      }
    } catch (error) {
      setError("Failed to update the password");
    }
  };

  return (
    <div className="max-w-md mx-auto py-24">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      {success && (
        <div className="bg-green-100 text-green-800 p-3 mb-4">{success}</div>
      )}
      {error && <div className="bg-red-100 text-red-800 p-3 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium">
            New Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Update Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
