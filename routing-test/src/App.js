import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Navbar from "../src/components/Navbar";
import "./App.css";
import Admin from "./components/Admin";
import Protected from "./components/Protected";
import SinglePerson from "./components/SinglePerson";
import User from "./components/User";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log in</button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:title" element={<SinglePerson />} />
        <Route path="/user" element={<User />} />
        <Route
          path="/admin"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Admin />
            </Protected>
          }
        />
      </Routes>
      {/* <Route path="/*" element={<Error />} /> */}
    </BrowserRouter>
  );
}

export default App;
