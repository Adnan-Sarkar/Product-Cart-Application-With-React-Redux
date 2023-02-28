import logo from "../assets/images/logo.png";
import { useSelector } from "react-redux";

const Navbar = ({ changePageHandler }) => {
  const cartItems = useSelector((state) => state.cart);

  const togglePageHandler = () => {
    changePageHandler(true);
  };

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="#home" onClick={() => changePageHandler(false)}>
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            href="#home"
            className="navHome"
            id="lws-home"
            onClick={() => changePageHandler(false)}
          >
            {" "}
            Home{" "}
          </a>
          <a
            href="#cart"
            className="navCart"
            id="lws-cart"
            onClick={togglePageHandler}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">
              {cartItems.reduce(
                (total, current) => total + current.quantity,
                0
              )}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
