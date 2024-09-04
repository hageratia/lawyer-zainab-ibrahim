import about from "../../assets/whoweare.jfif";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const AboutPage = () => {
  const { ref: sec1Ref, inView: sec1InView } = useInView();
  const { ref: sec2Ref, inView: sec2InView } = useInView();
  return (
    <>
      <section id="whoweare" className="my-5 py-5">
        <div className="container">
          <div className="head mb-5" dir="rtl">
            <h2 className="text-main font-bold">من نحـــن</h2>
          </div>
          <div className="row about-sec d-flex justify-content-center">
            <div className="col-lg-6 col-md-12 col-sm-12 pe-4 d-flex justify-content-center align-items-center mb-4">
              <motion.div
                ref={sec1Ref}
                initial={{ opacity: 0, x: -100 }}
                animate={sec1InView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="border-brown">
                  <img src={about} className="w-100" alt="" />
                </div>
              </motion.div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 ps-4" dir="rtl">
              <motion.div
                ref={sec2Ref}
                initial={{ opacity: 0, x: 100 }}
                animate={sec2InView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <p className="text-main justified-text font-bold">
                  يعد مكتب المحامية زينب إبراهيـــم من أبرز المكاتب القانونية
                  الرائـدة في المملكـة العربيــة السعودية منذ انطلاقنا، ونحن
                  نلتزم بتقديـــم خدمات قانونيــة شاملـة تشمـل المحامـاة،
                  والاستشــارات الشرعيـــة والقانونية، وأعمال التوثيق، مستنـدون
                  إلى خبرتنـــا الواسعة وعلاقاتنا المتينـــة ونحــرص على
                  تقديـــم حلــول قانونيـــة مبتكـــــرة بمعاييـــر مهنية عالية،
                  تلبي احتياجات الأفراد، والشركات الخاصة، والقطاعات الحكوميـة
                  -على حد ســـواء-. نتميـــز بتوفير قيمــة مضافـــة لعملائنا من
                  خلال مواكبــة أحدث التغيــرات في الأنظمــة القانونيــة
                  وتقديــم نشـــرات دوريـة تواكـــب هــــذه التطــــورات،
                  ممـــــا يعـــــزز مـــن ثقـة عملائنــــا فينـــا
                  كشـركــــــاء استراتيجييــــــن.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="line"></div>
    </>
  );
};

export default AboutPage;
