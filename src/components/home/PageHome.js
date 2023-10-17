import React, { useState, useEffect } from 'react';
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"

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
    }
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        localStorage.removeItem('user')
        navigate('/login')
      })
      .catch((error) => console.log(error));
  };


  return (
    <div><p>{email}</p>
    <button onClick={userSignOut} >LogOut</button>
    </div>
  );
}

export default PageHome;
