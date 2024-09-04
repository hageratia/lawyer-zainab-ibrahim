import "../../App.css";
import About from "../AboutPage/AboutPage";
import Home from "../Components/Home/Home";
import NavBar from "../Components/NavBar/NavBar";
import Services from "../Components/Services/Services";
import Certificates from "../Components/Certificates/Certificates";
import Features from "../Components/Features/Features";
import FreeConsultaion from "../Components/FreeConsultaion/FreeConsultaion";
import Footer from "../Components/Footer/Footer";

export const LayoutPage = () => {
  return (
    <>
      <section className="home pt-5" id="home">
        <div className="layout">
          <NavBar />
          <Home />
        </div>
      </section>
      <About />
      <Services />
      <Certificates />
      <Features />
      <FreeConsultaion />
      <Footer />
    </>
  );
};
