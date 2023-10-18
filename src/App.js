import { Routes,Route } from "react-router-dom";
import Home from "./components/home/PageHome";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import SecComponent from "./components/SeccesComponent/SecComponent.js"
import Formation from "./components/Formation/Formation"
function App() {
  return (
    <div>
      <Routes>
        if ()
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/storys" element={<SecComponent/>}/>
      <Route path="/formation" element={<Formation/>}/>
      </Routes>
    </div>
  );
}

export default App;
