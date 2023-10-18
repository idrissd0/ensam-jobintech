import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import './Login.css'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Convert the user object to a JSON string
      const userJSON = JSON.stringify(user);
      localStorage.setItem("user", userJSON);
    } else {
      localStorage.removeItem("user");
    }
  });
  

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div class="wrapper">
    <form class="form-signin" onSubmit={signIn}>       
      <h2 class="form-signin-heading">Connectez-vous à votre compte</h2>
      <input type="email" class="form-control" name="username" placeholder="Enter your email"
          value={email}
         onChange={(e) => setEmail(e.target.value)} required="" autofocus="" />
      <input type="password" class="form-control" name="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required=""/>      
      <label class="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
        <p>Vous n'êtes pas membre ?<Link to="/register">Register</Link></p>
      </label>

      <button class="btn btn-success btn-block w-100" type="submit">Login</button>   
    </form>
  </div>
    // </div>
  );
};

export default Login;