import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import IconFacebook from "../../multimedia/imagenes/Vector_facebook.png";
import IconInstagram from "../../multimedia/imagenes/Vector_instagram.png";
import IconMaps from "../../multimedia/imagenes/Vector_maps.png";
import IconWats from "../../multimedia/imagenes/Vector_whatsapp.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <Link to="https://www.google.com.uy/maps">
            <img src={IconMaps} alt="Icono Maps" />
          </Link>

          <Link to="https://www.whatsapp.com/?lang=es">
            <img src={IconWats} alt="Icono whatsapp" />
          </Link>

          <Link to="https://www.instagram.com/">
            <img src={IconInstagram} alt="Icono Instagram" />
          </Link>
          <Link to="https://www.google.com/intl/es/gmail/about/#">
            <img src={IconInstagram} alt="Icono Email" />
          </Link>

          <Link to="https://es-la.facebook.com/">
            <img src={IconFacebook} alt="Icono Facebook" />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
