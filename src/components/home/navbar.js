import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logoimg from "../../assets/ensam-logo-rb.png";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";

function Navbar() {
    
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
    <span class='  position-sticky top-0 '>
        <nav class="navbar navbar-expand-lg shadow-sm bg-light">
            <div class="container-fluid">
                {/* small screen logo */}
                <a class="navbar-brand d-block d-lg-none" href="#" >
                        <img src={logoimg} alt="" srcset=""  id="sitelogo" style={{width: '80px'}} />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0  d-flex align-items-center m-auto">
                        {/* user icon */}
                        <ul class="navbar-nav d-block d-lg-none">
                            <li class="nav-item dropdown">
                                <a  class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">
                                        <a onClick={userSignOut} class="dropdown-item" href="#">Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                A propose
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Qui sommes-nous?
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Nos formations
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/formation">Développement Fullstack PHP</a></li>
                                <li><a class="dropdown-item" href="#">AData SQL Webservices</a></li>
                            </ul>
                        </li>


                        {/* main site logo */}
                        <a class="navbar-brand d-none d-lg-block m-auto" href="/" >
                            <img src={logoimg} alt="" srcset=""  id="sitelogo" style={{width: '100px'}} />
                        </a>
                        
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="/stories">Success Stories</a>
                        </li>
                        
                        <ul class="navbar-nav d-none d-lg-block ">
                            <li class="nav-item dropdown">
                                <a  class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    </svg>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">
                                        <a onClick={userSignOut} class="dropdown-item" href="#">Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p class="navbar-brand d-none d-lg-block m-auto h-1">{email}</p>
                    </ul>
                </div>
            </div>
        </nav>
    </span>

  );
}

export default Navbar;
