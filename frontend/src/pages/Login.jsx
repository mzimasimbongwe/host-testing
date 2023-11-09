import React from "react";
import Header from "../components/Hearder";
import SignIn from "../components/Login";

function Login() {
  return (
    <div>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <SignIn />
    </div>
  );
}

export default Login;
