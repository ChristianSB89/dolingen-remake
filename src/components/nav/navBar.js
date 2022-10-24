import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "../home/LandingPage";
import Innenriks from "../innenriks/Innenriks";
import Utenriks from "../utenriks/Utenriks";
import Sport from "../sport/Sport";
import Meiningar from "../meiningar/Meiningar";
import Abonnent from "../abonnent/Abonnent";

import Logo from "../../assets/logo.png";

import { LiFix, Link, LinkFlex, NavWrapper } from "./navBarStyle";

function NavBar() {
  return (
    <Router>
      <NavWrapper>
        <div>
          <img src={Logo} />
        </div>

        <LinkFlex>
          <LiFix>
            <Link exact to="/" end>
              Heim
            </Link>
          </LiFix>
          <LiFix>
            <Link to="/innenriks">Innanbygds</Link>
          </LiFix>
          <LiFix>
            <Link to="/utenriks">Utanbygds</Link>
          </LiFix>
          <LiFix>
            <Link to="/sport">Sport</Link>
          </LiFix>
          <LiFix>
            <Link to="/meiningar">Meiningar</Link>
          </LiFix>
          <LiFix>
            <Link to="/abonnent">Bli Abonnent</Link>
          </LiFix>
        </LinkFlex>
      </NavWrapper>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/innenriks" element={<Innenriks />} />
        <Route path="/utenriks" element={<Utenriks />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/meiningar" element={<Meiningar />} />
        <Route path="/abonnent" element={<Abonnent />} />
      </Routes>
    </Router>
  );
}

export default NavBar;
