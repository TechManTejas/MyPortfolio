import { useState } from "react";
import { useEffect } from "react";
import Home from "./Home/Home"
import Navbar from "./Components/Navbar/Navbar"

function App() {

  const [scrollAmount, setScrollAmount] = useState(0)
  window.addEventListener("scroll", () => setScrollAmount(window.scrollY))

  return (
    <>
      <Navbar scrolled={scrollAmount}/>
      <Home/>
    </>
  );
}

export default App;
