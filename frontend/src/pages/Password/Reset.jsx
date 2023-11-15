import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      // Call the backend API to send the password reset request
      const response = await axios.post(
        "http://localhost:4000/password/reset",
        {
          email,
        }
      );

      if (response.status === 200) {
        setSuccess("Password reset link has been sent to your email address");
      } else {
        setError("Failed to send the password reset link");
      }
    } catch (error) {
      setError("Failed to send the password reset link");
    }
  };

  const handleBlur = () => {
    // Clear success and error messages when the email field loses focus
    setSuccess("");
    setError("");
  };

  return (
    <div className="max-w-md mx-auto py-24">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      {success && (
        <div className="bg-green-100 text-green-800 p-3 mb-4">{success}</div>
      )}
      {error && <div className="bg-red-100 text-red-800 p-3 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleBlur} // Handle onBlur event
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
