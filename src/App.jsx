import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <>
      <Helmet>
        <title>MohammadPiriyan</title>
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden ">
        <Header />
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
        {/* <div className='h-[4000px]'></div> */}
      </div>
    </>
  );
};

export default App;
