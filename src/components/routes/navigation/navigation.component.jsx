import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.css";
import { ReactComponent as CrwnLogo } from "../../../assets/logo.svg";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="shop-container" to="/shop">
            Shop
          </Link>
          <Link className="sign-in" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
