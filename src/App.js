import React from "react";
import Home from "./components/Home";
import SignIn from "./components/login/SignIn";

import "./App.css";
import { useContext } from "react";
import { Context } from "./Context";

function App() {
  const { user } = useContext(Context);

  return <>{user ? <Home /> : <SignIn />}</>;
}

export default App;
