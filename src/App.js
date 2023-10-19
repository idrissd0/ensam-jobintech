import { Routes,Route } from "react-router-dom";
import Home from "./components/home/PageHome";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import SecComponent from "./components/SeccesComponent/SecComponent.js"
import Formation from "./components/Formation/Formation"
import Navbar from "./components/home/navbar";
import Footer from "./components/home/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        if ()
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/stories" element={<SecComponent/>}/>
        <Route path="/formation" element={<Formation/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
 