import { Routes,Route } from "react-router-dom";
import Home from "./components/home/home"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
