import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "pages/Home";
import Galery from "pages/Galery";
import Services from "pages/Services";
import Contact from "pages/Contact";
import Privacy from "pages/Privacy";
import Condition from "pages/Condition";

import MyNavBar from "./components/MyNavBar";
import MyFooter from "components/MyFooter";
import ScrollToTop from "components/ScrollToTop";

function App() {
  const { name, url, uri, city } = {
    name: "Charles Cantin",
    url: "http://www.charles-cantin.com/",
    uri: "privacy",
    city: "LYON (69)",
  };
  const currentPage = useLocation().pathname;
  const [Filenames, setFilenames] = useState([]);

  useEffect(() => {
    let data = [];
    const list = require.context("./assets/images", false, /^\..*\.(png|jpe?g|svg)$/);
    list.keys().map((item) => data.push(list(item)));
    setFilenames([...new Set(data)]);
  }, []);

  return (
    <>
      <header>
        <MyNavBar page={currentPage} />
      </header>
      <main className="flux">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home Filenames={Filenames} />} />
            <Route path="/galery" element={<Galery Filenames={Filenames} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy name={name} url={url} uri={uri} />} />
            <Route path="/condition" element={<Condition name={name} city={city} />} />
          </Routes>
        </ScrollToTop>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
