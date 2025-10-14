import { Link, useNavigate } from "react-router-dom";
import icon from "../../Assets/Images/favicon.ico";
import { UserContext } from "../../UserContext/UserContext";
import { useContext } from "react";


export default function Navbar() {
  let { userToken, setUserToken } = useContext(UserContext);
  let navigate = useNavigate();
  function logout() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/login");
  }
  return (
    <>
      <nav
        className={
          "navbar sticky-top navbar-expand-lg bg-light py-1  d-flex align-items-center"
        }
      >
        <div className="container">
          <a
            className={"navbar-brand fs-3 fw-bold  d-flex align-items-center"}
            href="/"
          >
            <img src={icon} alt="logo" width={40} />
            FreshCart
          </a>
          {userToken !== null ? (
            <button
              className={"navbar-toggler shadow-none"}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#links"
            >
              <span className={"navbar-toggler-icon"}></span>
            </button>
          ) : (
            ""
          )}

          <div className={"collapse navbar-collapse"} id="links">
            {userToken !== null ? (
              <ul className={"navbar-nav me-auto fs-6"}>
                <li className="nav-item">
                  <Link
                    className={`nav-link mx-1 position-relative px-2 ${window.location.pathname === "/" ? "active" : ""}`}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link mx-1 position-relative px-2 ${window.location.pathname === "/products" ? "active" : ""}`}
                    to="products"
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link mx-1 position-relative px-2 ${window.location.pathname === "/categories" ? "active" : ""}`}
                    to="categories"
                  >
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link mx-1 position-relative px-2 ${window.location.pathname === "/brands" ? "active" : ""}`}
                    to="brands">
                    Brands
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
          <div className="social">
            <a
              className="text-black mx-1"
              href="https://www.facebook.com/karim.khalifa.639265"
            >
              <i className="fa-brands fa-facebook-f px-2"></i>
            </a>
            <a className="text-black mx-1" href="https://x.com/Karim69608785">
              <i className="fa-brands fa-x-twitter px-2"></i>
            </a>
            <a
              className="text-black mx-1"
              href="https://www.linkedin.com/in/karimkhalifa98"
            >
              <i className="fa-brands fa-linkedin-in px-2"></i>
            </a>
            <a
              className="text-black mx-1"
              href="https://github.com/KarimKhalifa98"
            >
              <i className="fa-brands fa-github px-2"></i>
            </a>
          </div>
          <div className="register">
            {userToken !== null ? (<>
              <Link className="position-relative px-2" to="wishlist">
                    <i className="fa-solid fa-heart fa-lg main-color"></i>
                  </Link>
              <Link className="position-relative px-2" to="cart">
                    <i className="fa-solid fa-cart-shopping fa-lg main-color"></i>
                  </Link>
              <span className="btn main-color cursor-pointer" onClick={() => logout()}>
                Logout
              </span>
            </>
            ) : (
              <>
                
                <Link className="btn main-color mx-2" to="login">
                  Login
                </Link>
                <Link className="btn btn-outline-success" to="register">
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
