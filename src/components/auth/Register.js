import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Convert the user object to a JSON string
      const userJSON = JSON.stringify(user);
      localStorage.setItem("user", userJSON);
    } else {
      localStorage.removeItem("user");
    }
  });

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;