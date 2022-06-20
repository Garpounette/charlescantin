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

import ImageList from "components/ImageList";
import ServiceList from "components/ServiceList";

function App() {
  const { name, url, uri, city } = {
    name: "Charles Cantin",
    url: "http://www.charles-cantin.com/",
    uri: "privacy",
    city: "LYON (69)",
  };
  const currentPage = useLocation().pathname;
  const [Filenames, setFilenames] = useState([]);
  const [ImageArray, setImageArray] = useState([]);
  const [ServiceArray, setServiceArray] = useState([]);

  useEffect(() => {
    let data = [];
    const list = require.context("./assets/images", false, /^\..*\.(png|jpe?g|svg)$/);
    list.keys().map((item) => data.push(list(item)));
    setFilenames([...new Set(data)]);
  }, []);

  useEffect(() => {
    ServiceList(setServiceArray);
    return setServiceArray([]);
  }, []);

  useEffect(() => {
    ImageList(setImageArray, Filenames);
    return setImageArray([]);
  }, [Filenames]);
  return (
    <>
      <header>
        <MyNavBar page={currentPage} />
      </header>
      <main className="flux">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home Filenames={Filenames} />} />
            <Route path="/galery" element={<Galery ImageArray={ImageArray} />} />
            <Route path="/services" element={<Services ServiceArray={ServiceArray} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy name={name} url={url} uri={uri} />} />
            <Route path="/condition" element={<Condition name={name} city={city} />} />
          </Routes>
        </ScrollToTop>
      </main>
      <footer>
        <MyFooter page={currentPage} />
      </footer>
    </>
  );
}

export default App;
