import "../../App.css";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  return (
    <>
      <section id="blogs" className="my-5 py-5">
        <div className="container">
          <div className="head mb-5 text-center">
            <h2 className="text-main fw-bold">المــدونات</h2>
          </div>
          <div
            className="row text-center g-3 justify-content-between"
            dir="rtl"
          >
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="lay cards p-2 rounded m-3">
                <Link
                  to={"/commercial-issues"}
                  className="text-decoration-none"
                >
                  <div className="content-blog mt-2 pb-2">
                    <h5 className="text-main font-bold text-brown">
                      التقاضي في القضايا التجارية
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="lay cards p-2 rounded m-3">
                <Link
                  to={"/astronomical-property"}
                  className="text-decoration-none"
                >
                  <div className="content-blog mt-2 pb-2">
                    <h5 className="text-main font-bold text-brown">
                      أنظمة الملكية الفكرية
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="lay cards p-2 rounded m-3">
                <Link
                  to={"/division-of-estates"}
                  className="text-decoration-none"
                >
                  <div className="content-blog mt-2 pb-2">
                    <h5 className="text-main font-bold text-brown">
                      قضايا تقسيم التركات
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="lay cards p-2 rounded m-3">
                <Link
                  to={"/real-estate-lawsuits"}
                  className="text-decoration-none"
                >
                  <div className="content-blog mt-2 pb-2">
                    <h5 className="text-main font-bold text-brown">
                      الدعاوى العقارية وحقوق التملك
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="lay cards p-2 rounded m-3">
                <Link
                  to={"/commercial-ontracts"}
                  className="text-decoration-none"
                >
                  <div className="content-blog mt-2 pb-2">
                    <h5 className="text-main font-bold text-brown">
                      صياغة العقود التجارية
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="lay cards p-2 rounded m-3">
                <Link
                  to={"/information-issues"}
                  className="text-decoration-none"
                >
                  <div className="content-blog mt-2 pb-2">
                    <h5 className="text-main font-bold text-brown">
                      القضايا المعلوماتية
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
