import React, { useState } from "react";
import Logo from "../assets/logo.png";
import ContactModal from "./modals/ContactModal";

const Header = () => {
  const [contactModal, setCotactModal] = useState(false);
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <button className="btn btn-sm" onClick={() => setCotactModal(true)}>Work with me</button>
        </div>
      </div>
      {contactModal && <ContactModal contactModal={contactModal} setCotactModal={setCotactModal}/>}
    </header>
  );
};

export default Header;
