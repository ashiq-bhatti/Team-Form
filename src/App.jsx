import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUp from "./Pages/SingUp";
import Singin from "./Pages/Singin";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/signin" element={<Singin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App; 
