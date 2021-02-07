import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Salim NEDJAM</h2>
        <button
          className="skillbutton-active"
          type="button"
        >
          <a href="/resume.pdf" download="SALIM_NEDJAM_CV.pdf">Télécharger le cv </a>
        </button>
        <br />
        <br />
        <p><a href="mailto:nedjam.t.salim@gmail.com">nedjam.t.salim@gmail.com</a></p>
      </header>
      <ContactIcons />
    </section>
    <section id="footer">
      {/* <p className="copyright">&copy; Salim Nedjam.</p> */}
    </section>
  </section>
);

export default SideBar;
