import React,{useState,useEffect} from "react";
import Home from "./components/Home"
import fire from "./config/fire"
import SignIn from "./components/login/SignIn"

import "./App.css";

function App() { 
  const [user,setUser] = useState({});

  function authListener(){
      fire.auth().onAuthStateChanged(user=>{
          if(user){
              setUser(user);
          }else{
              setUser(null);
          }
      });
  }

  useEffect(()=>{
      authListener();
  },[]);

  return <>{user?<Home/>:<SignIn/>}</>;
}

export default App;
