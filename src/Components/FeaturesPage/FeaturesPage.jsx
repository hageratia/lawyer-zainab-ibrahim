import img1 from "../../assets/features/12 1.png";
import img2 from "../../assets/features/11 1.png";
import img3 from "../../assets/features/10 1.png";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const PercentageCounter = ({ target, duration, showPercentage }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);
  const increment = target / (duration / 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= target) {
          clearInterval(interval);
          return target;
        }
        return prevCount + increment;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [hasStarted, target, duration]);

  return (
    <h2 ref={counterRef} className="text-main bolder">
      {Math.floor(count)}
      {showPercentage ? "%" : ""}
    </h2>
  );
};

PercentageCounter.propTypes = {
  target: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  showPercentage: PropTypes.bool,
};

PercentageCounter.defaultProps = {
  showPercentage: false,
};

const FeaturesPage = () => {
  return (
    <>
      <section id="features" className="my-5 py-5">
        <div className="container">
          <div className="head mb-5 text-center">
            <h2 className="text-main fw-bold">ما نتميز به</h2>
          </div>
          <div className="row text-center m-auto justify-content-between g-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="img-feature position-relative">
                <img src={img1} className="w-100" alt="معتمدة" />
                <div className="content position-absolute top-50 start-50 translate-middle">
                  <h3 className="text-white font-bold">
                    معتمــدة وموثوقة قانونيًــــا
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="img-feature position-relative">
                <img src={img2} className="w-100" alt="دفاع شخصي" />
                <div className="content position-absolute top-50 start-50 translate-middle">
                  <h3 className="text-white font-bold">
                    دفاع شخصي وتمثيل كامل
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="img-feature position-relative">
                <img src={img3} className="w-100" alt="استشارات قانونية" />
                <div className="content position-absolute top-50 start-50 translate-middle">
                  <h3 className="text-white font-bold">
                    استشارات قانونيــــة مجانيــــــة
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="head my-3 pt-5 text-center">
            <h2 className="text-main fw-bold">حقائق</h2>
          </div>
          <div className="row text-center m-auto justify-content-between g-5">
            <div className="col-lg-12">
              <PercentageCounter
                target={97}
                duration={2500}
                showPercentage={true}
              />
              <p className="text-main fw-normal">
                نسبة تحقيق الأعمال لصالح عملائنا
              </p>
            </div>
            <div className="col-lg-12">
              <p className="text-main">اكثر من</p>
              <PercentageCounter target={74} duration={2500} />
              <p className="text-main fw-normal">معاملة قانونية خلال مسيرتنا</p>
            </div>
          </div>
        </div>
      </section>
      <div className="line"></div>
    </>
  );
};

export default FeaturesPage;
