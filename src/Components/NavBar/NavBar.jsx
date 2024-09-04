import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../App.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg top-0  text-white d-flex align-items-center justify-content-between"
        dir="rtl"
      >
        <div className="container">
          <Link className="navbar-brand logo pt-4" to="/">
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
            <ul className="navbar-nav m-auto mb-lg-0 d-flex align-items-lg-center">
              <li className="nav-item">
                <a
                  href="#home"
                  className={`nav-link font-bold ${
                    activeSection === "home" ? "active" : ""
                  }`}
                >
                  الرئيسية
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#whoweare"
                  className={`nav-link font-bold ${
                    activeSection === "whoweare" ? "active" : ""
                  }`}
                >
                  من نحن
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#services"
                  className={`nav-link font-bold ${
                    activeSection === "services" ? "active" : ""
                  }`}
                >
                  خدماتنا
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#certificates"
                  className={`nav-link font-bold ${
                    activeSection === "certificates" ? "active" : ""
                  }`}
                >
                  شهادتنا
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#features"
                  className={`nav-link font-bold ${
                    activeSection === "features" ? "active" : ""
                  }`}
                >
                  ما نتميز به
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#blogs"
                  className={`nav-link font-bold ${
                    activeSection === "features" ? "active" : ""
                  }`}
                >
                  المـدونات
                </a>
              </li>
              <li className="nav-item mb-1  border rounded rounded-5 border-white">
                <a href="#free" className={`nav-link text-white font-bold`}>
                  استشارتك المجانية
                </a>
              </li>
              <li className="nav-item">
                <div className="nav-link text-white font-bold text-center bg-brown p-2">
                  مواعيد العمل من الأحد الى الخميس <br /> من 9 صباحاً الى 5
                  مساءاً
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
