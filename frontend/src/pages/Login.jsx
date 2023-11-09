import React from "react";
import Header from "../components/Hearder";

function Login() {
  return (
    <div>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
    </div>
  );
}

export default Login;
