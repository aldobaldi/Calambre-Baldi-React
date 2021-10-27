import React, { Fragment } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../multimedia/svg_iconos/logosvg.svg";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "../../Context/CartContext";
import { useUser } from "../../Context/UserContext";

export const NavBar = () => {
  const { cart } = useCart();
  const { user, setUser, register } = useUser();

  if (cart.length === 0) {
    return (
      <Fragment>
        <nav className="navbar">
          <Link to="/">
            <img src={logo} alt="Logo Empresa" height="80" width="150"></img>
          </Link>
          <div className="log-cart">
            <span>
              <PersonIcon /> Ingresa
            </span>
          </div>
        </nav>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <nav className="navbar">
          <Link to="/">
            <img src={logo} alt="Logo Empresa" height="80" width="150"></img>
          </Link>
          <div className="log-cart">
            <span>
              <PersonIcon />
            </span>
            <span>
              <Link
                to="/Cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <ShoppingCartIcon /> {cart.length}
              </Link>
            </span>
          </div>
        </nav>
      </Fragment>
    );
  }
};

export default NavBar;
