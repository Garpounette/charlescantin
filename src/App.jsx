import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Galery from "pages/Galery";
import Services from "pages/Services";
import Contact from "pages/Contact";
import Privacy from "pages/Privacy";
import Condition from "pages/Condition";

import MyNavBar from "./components/MyNavBar";
import MyFooter from "components/MyFooter";

function App() {
  const currentPage = useLocation().pathname;
  return (
    <>
      <header>
        <MyNavBar page={currentPage} />
      </header>
      <main className="flux">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/condition" element={<Condition />} />
        </Routes>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
