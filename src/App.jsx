import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/menu/Menu";
import Contact from "./components/Contact";
import Footer from "./components/footer/Footer";
import Produk from "./components/produk/Produk";
import ModalBox from "./components/ModalBox";

const App = () => {
  //state untuk mengelola navbar dan overflow
  const [isNavActive, setIsNavActive] = useState(false);
  const handleNav = () => {
    setIsNavActive(!isNavActive);
  };

  //state untuk mengelola search bar
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const handleSearchBar = () => {
    setIsSearchBarActive(!isSearchBarActive);
  };

  //state untuk mengelola shoopind cart
  const [isCartActive, setIsCartActive] = useState(false);

  //state untuk mengelola modal box
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <div className="relative">
      <Navbar
        isNavActive={isNavActive}
        handleNav={handleNav}
        isSearchBarActive={isSearchBarActive}
        handleSearchBar={handleSearchBar}
        setIsSearchBarActive={setIsSearchBarActive}
        setIsNavActive={setIsNavActive}
        isCartActive={isCartActive}
        setIsCartActive={setIsCartActive}
      />
      <Hero />
      <About />
      <Menu />
      <Produk setIsModalActive={setIsModalActive} />
      <Contact />
      <Footer />
      <ModalBox
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
    </div>
  );
};

export default App;
