import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
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
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="wrapper">
      <form class="form-signin" onSubmit={signUp}>
        <h2 class="form-signin-heading">créer un compte</h2>
        <input
          type="text"
          class="form-control"
          name="username"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required="true"
          autofocus=""
        />
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required="true"
          autofocus=""
        />
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required="true"
        />
        <label class="checkbox">
          <input
            type="checkbox"
            value="remember-me"
            id="rememberMe"
            name="rememberMe"
          />{" "}
          Remember me
          <p>
            déjà membre ?<Link to="/login">Register</Link>
          </p>
        </label>
        <button class="btn btn-success btn-block w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
