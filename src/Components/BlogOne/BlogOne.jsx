import "../../App.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import adl from "../../assets/certificates/وزارة العدل 1.png";
import hy2a from "../../assets/certificates/الهيئة السعودية للمحامين 1.png";
import hebra from "../../assets/certificates/خبرة 1.png";
import mwsk from "../../assets/certificates/الموثق 1.png";

import icon1 from "../../assets/certificates/1.png";
import icon2 from "../../assets/certificates/2.png";
import icon3 from "../../assets/certificates/3.png";
import icon4 from "../../assets/certificates/4.png";
import icon5 from "../../assets/certificates/5.png";
import icon6 from "../../assets/certificates/6.png";
import icon7 from "../../assets/certificates/7.png";

const CertificatesPage = () => {
  const { ref: adlRef, inView: adlInView } = useInView();
  const { ref: hy2aRef, inView: hy2aInView } = useInView();
  const { ref: hebraRef, inView: hebraInView } = useInView();
  const { ref: mwskRef, inView: mwskInView } = useInView();

  const { ref: icon1Ref, inView: icon1InView } = useInView();
  const { ref: icon2Ref, inView: icon2InView } = useInView();
  const { ref: icon3Ref, inView: icon3InView } = useInView();
  const { ref: icon4Ref, inView: icon4InView } = useInView();
  const { ref: icon5Ref, inView: icon5InView } = useInView();
  const { ref: icon6Ref, inView: icon6InView } = useInView();
  const { ref: icon7Ref, inView: icon7InView } = useInView();
  return (
    <>
      <section id="certificates" className="my-5 py-5">
        <div className="container">
          <div className="head mb-5 text-center">
            <h2 className="text-main fw-bold">محامون و موثقون معتمدون لدى</h2>
          </div>
          <div className="row text-center m-auto justify-content-between">
            <div className="col-lg-6 col-md-12 col-sm-6">
              <motion.div
                ref={adlRef}
                initial={{ opacity: 0, x: -100 }}
                animate={adlInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={adl} alt="وزارة العدل" />
                <p className="small-paragraph" dir="rtl">
                  محامية موثقة ومعتمدة لــدى وزارة العـــــــــدل
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <motion.div
                ref={hy2aRef}
                initial={{ opacity: 0, x: 100 }}
                animate={hy2aInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={hy2a} alt="الهيئة السعودية للمحامين" />
                <p className="small-paragraph" dir="rtl">
                  عضو أساسي بالهيئة السعودية للمحاميـن
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <motion.div
                ref={hebraRef}
                initial={{ opacity: 0, x: -100 }}
                animate={hebraInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={hebra} alt="خبرة" />
                <p className="small-paragraph" dir="rtl">
                  تعد المحامية زينب موثقة ومعتمدة لدى منصة خبرة وهذه المنصة
                  تعتبر جزءا من الجهود المستمــرة في المملكة العربية السعودية
                  لتحديث وتحسـين القطاع القضائي، وتعزيز الثقة في عمليات التحكيم
                  وتسوية النزاعــات من خلال توفير خبـرات موثـوقة ومتميــزة.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <motion.div
                ref={mwskRef}
                initial={{ opacity: 0, x: 100 }}
                animate={mwskInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={mwsk} alt="الموثق" />
                <p className="small-paragraph" dir="rtl">
                  تُعد المحامية زينب إبراهيم موثقة ومعتمدة لدى منصة الموثق، وهي
                  خدمة إلكترونية تمكن الأفراد والشركات من الحصول على خدمات
                  التوثيق العدلي وتوثيق معاملاتهم القانونية في أي وقت وأي مكان.
                </p>
              </motion.div>
            </div>
          </div>
          <div
            className="row text-center m-auto justify-content-between mt-2 icons"
            dir="rtl"
          >
            <div className="col-lg-3 col-md-4 col-sm-6">
              <motion.div
                ref={icon1Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={icon1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="img-position overflow-hidden">
                  <img src={icon1} alt="" />
                </div>
                <p className="text-center">
                  نضمــــن لك إجـــــــــراءات سلســـــــة وسريـعـــــــــة
                  لإفراغ عقاراتك ،مع ضمان حقوقـــــــك القانونيـــــة.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <motion.div
                ref={icon2Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={icon2InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="img-position overflow-hidden">
                  <img src={icon2} alt="" />
                </div>
                <p className="text-center">
                  نقدم لك حلــولًا قانونيــــة شاملـــــة لإدارة ديونـــــك،
                  سواء كنت مقرضًا أو مدينًا.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <motion.div
                ref={icon3Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={icon3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="img-position overflow-hidden">
                  <img src={icon3} alt="" />
                </div>
                <p className="text-center">
                  هل تحتـاج إلى توثيـــــق أو فســــــــخ وكالـــــــــة؟ نحن
                  نوفـــــر لك خدمـــــة سلســــــة وموثوقــــــــة لإدارة
                  وكالاتك القانونية.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <motion.div
                ref={icon4Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={icon4InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="img-position overflow-hidden">
                  <img src={icon4} alt="" />
                </div>
                <p className="text-center">
                  نضمـن لك توثيـقًا قانونـيًا دقيــــقًا وسريعًا لجميــــع
                  معامـلاتـــــك، بـــدءًا مــــن العقــــــــود البسيـطــــــة
                  حتى المعاملات المعقدة.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <motion.div
                ref={icon5Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={icon5InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="img-position overflow-hidden">
                  <img src={icon5} alt="" />
                </div>
                <p className="text-center">
                  نساعدك في تأسيس شركتك بكل سهولـــة وسرعــة، من خـــــــلال
                  إعداد العقود اللازمـة وتسجيـــــل الشركــــة.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <motion.div
                ref={icon6Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={icon6InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="img-position overflow-hidden">
                  <img src={icon6} alt="" />
                </div>
                <p className="text-center">
                  هل ترغب في فك رهن عقارك؟ نحـــن نقــــــدم لك الإجــــــراءات
                  القانونيـــة اللازمــــــة لإتمـــــام هذه العـمليــــــة
                  بسهـولـــــــة.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <motion.div
                ref={icon7Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={icon7InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="img-position overflow-hidden">
                  <img src={icon7} alt="" />
                </div>
                <p className="text-center">
                  نقدم لك خدمات الرهن العقـــاري المتكاملـــة، لمساعدتك في تحقيق
                  أهدافـــك الاستثمـارية.
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

export default CertificatesPage;
