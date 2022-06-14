import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Galery from "pages/Galery";
import Services from "pages/Services";
import Contact from "pages/Contact";

import MyNavBar from "./components/MyNavBar";

function App() {
  const currentPage = useLocation().pathname;
  return (
    <>
      <MyNavBar page={currentPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
