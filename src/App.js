import { Routes,Route } from "react-router-dom";

import Home from "./components/home/PageHome";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Navbar from "./components/home/navbar";
import Footer from "./components/home/Footer";
import SecComponent from "./components/SeccesComponent/SecComponent.js"
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import Formation from "./components/Formation/Formation"
import Fullstack from "./components/Fullstack/Fullstack";
import FormationSql from "./components/Formation-Sql/Formation"
import React, { useState, useEffect } from "react";

function App() {

  const [loggedIn, setloggedIn] = useState(true);
  const [Test , setTest] = useState('');
  
  const a = onAuthStateChanged(auth, (user) => {
    if (user) {
      setTest(user)
    } else {      
      setTest('false')
    }
  });

  useEffect(() => {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      setloggedIn(true);
    } else {
      setloggedIn(false);
      console.log('User data not found in localStorage');
    }
  }, [a]);


  return (
    <div>
      {loggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/stories" element={<SecComponent/>}/>
        <Route path="/formation-fullstack" element={<Formation/>}/>
        <Route path="/formation-sql" element={<FormationSql/>}/>
        <Route path="/inscrire" element={<Fullstack/>}/>
      </Routes>
      {loggedIn && <Footer />}
    </div>
  );
}

export default App;
 