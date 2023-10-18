import React, { useState, useEffect } from 'react';
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from './navbar.js';
import Footer from './Footer';

function PageHome() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userJSON = localStorage.getItem('user');
    if (userJSON) {
      const user = JSON.parse(userJSON);
      setEmail(user.email);
    } else {
      console.log('User data not found in localStorage');
      navigate('/Login')
    }
  }, []);




  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default PageHome;
