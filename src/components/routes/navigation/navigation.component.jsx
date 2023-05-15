import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.styles.css";
import { ReactComponent as CrwnLogo } from "../../../assets/logo.svg";
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";
import { userSignOut } from "../../../utils/firebase.utils.js";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser);

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

          {currentUser ? (
            <span className="nav-link" onClick={userSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="sign-in" to="/sign-in">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
