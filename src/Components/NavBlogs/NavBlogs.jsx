import { Link } from "react-router-dom";
import logo from "../../assets/logo-bg.jpg";
import "../../App.css";

const NavBlogs = () => {
  return (
    <div>
      {/* <nav
        className="navbar navbar-expand-lg top-0 bg-main  text-white d-flex align-items-center justify-content-between"
        dir="rtl"
      >
        <div className="container">
          <Link className="navbar-brand logo pt-4" to="/">
            <img src={logo} alt="" className="w-25" />
          </Link>
          <button
            className="navbar-toggler text-white me-auto border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 d-flex align-items-lg-center m-auto">
              <li className="nav-item">
                <Link to={"/"} className={`nav-link font-bold `}>
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link text-white font-bold text-center bg-brown p-2">
                  مواعيد العمل من الاحد الى الخميس <br /> من 9 صباحاً الى 5
                  مساءً
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <nav
        className="navbar bg-main navbar-expand-lg top-0  text-white d-flex align-items-center justify-content-between"
        dir="rtl"
      >
        <div className="container">
          <Link className="navbar-brand logo pt-2" to="/">
            <img src={logo} alt="" className="navbar-logo" />
          </Link>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0 d-flex align-items-lg-center">
              <li className="nav-item">
                <Link to={"/"} className={`nav-link font-bold`}>
                  الرئيسية
                </Link>
              </li>

              <li className="nav-item">
                <div className="nav-link text-white font-bold text-center bg-brown p-2">
                  مواعيد العمل من الاحد الى الخميس <br /> من 9 صباحاً الى 5
                  مساءً
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBlogs;
