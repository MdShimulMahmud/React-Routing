import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Navbar from "../src/components/Navbar";
import "./App.css";
import SinglePerson from "./components/SinglePerson";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:title" element={<SinglePerson />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
