import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
function Inscrire() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userJSON = localStorage.getItem("user");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      setEmail(user.email);
    } else {
      console.log("User data not found in localStorage");
      navigate("/Login");
    }
  }, []);

  const [age, setage] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [city, setcity] = useState("");
  const [sex, setsex] = useState("");
  const [tel, settel] = useState("");
  const [formation, setformation] = useState("");
  const userCollection = collection(db, "users");
  const handleRadioChange = (event) => {
    setsex(event.target.value);
  };
  const createuser = async (e) => {
    e.preventDefault();
    await addDoc(userCollection, {
      fname: fname,
      lname: lname,
      age: age,
      email: email,
      sex: sex,
      city: city,
      formation: formation,
      phone: tel,
    });
    console.log(userCollection);
    navigate("/");
  };
  return (
    <div class="wrapper">
      <form class="form-signin" onSubmit={(e) => createuser(e)}>
        <h2 class="form-signin-heading">Créer un compte</h2>
        <input
          type="text"
          class="form-control"
          name="username"
          placeholder="Enter your first name"
          value={fname}
          onChange={(e) => setfname(e.target.value)}
          required="true"
          autofocus=""
        />
        <input
          type="text"
          class="form-control"
          name="username"
          placeholder="Enter your last name"
          value={lname}
          onChange={(e) => setlname(e.target.value)}
          required="true"
          autofocus=""
        />
        <input
          type="number"
          class="form-control"
          name="age"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setage(e.target.value)}
          required="true"
          autofocus=""
        />
        <input
          type="tel"
          class="form-control"
          name="tel"
          placeholder="Enter your phone number"
          value={tel}
          onChange={(e) => settel(e.target.value)}
          required="true"
          autofocus=""
        />
        <input
          type="text"
          class="form-control"
          name="city"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          required="true"
        />
        <select
          class="form-select mt-2 ms-1"
          id="floatingSelect"
          aria-label="Floating label select example"
          value={formation}
          onChange={(e) => setformation(e.target.value)}
        >
          <option selected>choisir votre formation</option>
          <option value="fullstack">fullstack</option>
          <option value="java">java</option>
        </select>

        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="sex"
            id="flexRadioDefault1"
            value="male"
            checked={sex === "male"}
            onChange={handleRadioChange}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Male
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="sex"
            id="flexRadioDefault2"
            value="male"
            checked={sex === "female"}
            onChange={handleRadioChange}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Female
          </label>
        </div>

        <button class="btn btn-success btn-block w-100" type="submit">
          send
        </button>
      </form>
    </div>
  );
}

export default Inscrire;
