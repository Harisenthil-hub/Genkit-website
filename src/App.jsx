import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Service } from "./pages/Service";
import { Contact } from "./pages/Contact";

function App() {
  useEffect(() => {
    if (
      document.querySelector(
        'script[src="https://cdn.lordicon.com/lordicon.js"]'
      )
    ) {
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
