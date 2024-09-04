import logo from "../../assets/logo-footer.png";

const FooterPage = () => {
  return (
    <>
      <footer className=" py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center my-4">
              <h4 className="text-brown">مواعيـد العمـــل </h4>
              <p className="text-main">
                من الأحد الى الخميس <br /> من 9 صباحاً وحتى 5 مساءً
              </p>
              <a
                href="mailto:lawyerzainabsa@gmail.com"
                className="text-main font-bold text-decoration-none"
              >
                lawyerzainabsa@gmail.com
              </a>
            </div>
            <div className="col-md-4 text-center">
              <div className="img-container">
                <img src={logo} alt="" />
              </div>
              <div className="social-media">
                <ul className="d-flex justify-content-center list-unstyled mt-2">
                  <li className="me-2 d-flex justify-content-center align-items-center">
                    <a
                      href="https://x.com/Zebrahim20?t=uMqEtZuft9ib1mF3E4GlpA&s=09"
                      className="text-decoration-none text-white"
                    >
                      <i className="fa-brands fa-x-twitter p-2"></i>
                    </a>
                  </li>
                  <li className="me-2 d-flex justify-content-center align-items-center">
                    <a
                      href="https://www.instagram.com/lawyerzainab.ksa?igsh=Ymdtazc3YWJ3N2tv"
                      className="text-decoration-none text-white"
                    >
                      <i className="fa-brands fa-instagram p-2"></i>
                    </a>
                  </li>
                  <li className="me-2 d-flex justify-content-center align-items-center">
                    <a
                      href="mailto:lawyerzainabsa@gmail.com"
                      className="text-decoration-none text-white"
                    >
                      <i className="fa-solid fa-inbox p-2"></i>
                    </a>
                  </li>
                  <li className="me-2 d-flex justify-content-center align-items-center">
                    <a
                      href="https://wa.me/966546519560"
                      className="text-decoration-none text-white"
                    >
                      <i className="fa-brands fa-whatsapp p-2"></i>
                    </a>
                  </li>
                  <li className="me-2 d-flex justify-content-center align-items-center">
                    <a
                      href="tel:966546519560"
                      className="text-decoration-none text-white"
                    >
                      <i className="fa-solid fa-phone p-2"></i>
                    </a>
                  </li>
                  <li className="me-2 d-flex justify-content-center align-items-center">
                    <a
                      href="https://snapchat.com/t/EsncGJFC"
                      className="text-decoration-none text-white"
                    >
                      <i className="fa-brands fa-snapchat p-2"></i>
                    </a>
                  </li>
                  <li className="me-2 d-flex justify-content-center align-items-center">
                    <a
                      href="https://www.linkedin.com/in/lawyer-zainab-ibrahim-337a03325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      className="text-decoration-none text-white"
                    >
                      <i className="fa-brands fa-linkedin-in p-2"></i>
                    </a>
                  </li>
                  <li className="me-2 d-flex justify-content-center align-items-center">
                    <a
                      href="https://www.tiktok.com/@zebrahim20?_t=8pQcuxvepow&_r=1"
                      className="text-decoration-none text-white"
                    >
                      <i className="fa-brands fa-tiktok p-2"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 text-center mt-3">
              <h4 className="text-brown">العنوان</h4>
              <p className="text-main">
                مكــة المكــرمـــــــة
                <br /> الزايدي - خلف مطعم خيال
              </p>
              <a
                href="tel:966546519560"
                className="text-main font-bold text-decoration-none"
              >
                966546519560
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterPage;
