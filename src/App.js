import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact"

function App() {

  const [scrollAmount, setScrollAmount] = useState(0)
  window.addEventListener("scroll", () => setScrollAmount(window.scrollY))

  return (
    <>
      <Router>
        <Navbar scrolled={scrollAmount} />
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
