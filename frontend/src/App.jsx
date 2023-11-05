import React from "react";
import { Hero, Navbar, SignUp } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SignUp />
    </div>
  );
};

export default App;
