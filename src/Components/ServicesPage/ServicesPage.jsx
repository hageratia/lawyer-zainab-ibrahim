import "../../App.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../../assets/icons-services/1.png";
import img2 from "../../assets/icons-services/2.png";
import img3 from "../../assets/icons-services/3.png";
import img4 from "../../assets/icons-services/4.png";
import img5 from "../../assets/icons-services/5.png";
import img6 from "../../assets/icons-services/6.png";
import img7 from "../../assets/icons-services/7.png";
import img8 from "../../assets/icons-services/8.png";
const ServicesPage = () => {
  const { ref: img1Ref, inView: img1InView } = useInView();
  const { ref: img2Ref, inView: img2InView } = useInView();
  const { ref: img3Ref, inView: img3InView } = useInView();
  const { ref: img4Ref, inView: img4InView } = useInView();
  const { ref: img5Ref, inView: img5InView } = useInView();
  const { ref: img6Ref, inView: img6InView } = useInView();
  const { ref: img7Ref, inView: img7InView } = useInView();
  const { ref: img8Ref, inView: img8InView } = useInView();

  return (
    <>
      <section id="services" className="my-5 py-5">
        <div className="container">
          <div className="head mb-5 text-center">
            <h2 className="text-main fw-bold">خدامتنا</h2>
          </div>
          <div className="row text-center m-auto justify-content-between">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img1Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={img1} alt="" />
                <h5 className="text-main fw-bold">
                  مفاوضات الصلح والحلول الودية
                </h5>
                <p className="small-paragraph" dir="rtl">
                  الوساطــة وتقريـــب وجهــات النظر عرض الــرأي القانونـــي
                  والحـــل الأمثــل للنزاع إقنــــاع أطـراف النزاع بقبــول
                  الحلــول الودية وعدم اللجوء للمحاكم.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img2Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img2InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={img2} alt="" />
                <h5 className="text-main fw-bold">تحصيل الديون</h5>
                <p className="small-paragraph" dir="rtl">
                  تحصيــل الديـون المتعثــــرة والمطالبات المالية ومتابعة
                  تنفيـــذ الأحكـــام.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img3Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={img3} alt="" />
                <h5 className="text-main fw-bold">الخدمات القانونية</h5>
                <p className="small-paragraph" dir="rtl">
                  الترافع والتقاضي، تمثيل العملاء في جميـــع إجـراءات
                  التقاضــــــي لكافة أنواع القضايا لدى المحاكم والجهــــــات
                  العــدليــــــة وأمــــام اللجان القضائـــية وعلي اختـــــلاف
                  أنواعهــا ودرجاتهـــــا القضائيـــــة.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img4Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img4InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={img4} alt="" />
                <h5 className="text-main fw-bold">الشركات ورواد الأعمال</h5>
                <p className="small-paragraph" dir="rtl">
                  تقديم كافـة الخدمات والاستشارات المتعلقـــــة بقطــــاع
                  الأعمــــــــــــال والمشــاريع الناشئـــة، وتشمــــــــل
                  تأسيـــــــس وإنشــــــــاء الشركــــــات بجميــع
                  أنواعهـــــــــا وصياغــــــــــــة وإعداد عقودهــــــــا
                  وتعديلاتـــــــها وتسجيلهـــا وإشهارهــــــا وفقـــــــا
                  للنظـــــــام السعــــــودي.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img5Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img5InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={img5} alt="" />
                <h5 className="text-main fw-bold">الإستشارات القانونية</h5>
                <p className="small-paragraph" dir="rtl">
                  للاستشارات القانونيـة دور مهــــم وفعــال في إرشــــــاد
                  وتقـديــــــم المشورة المطلوبة للعمــــلاء قبل البدء
                  بالإجــراءات القانونيــــة، فقد يقوم المكتــــب بتقديـــــم
                  فضـــــل الخدمـــات للعمــــــــلاء وذلك عبـــر خدمـة
                  الاستشــــــارات القانونيـــــة التي يقدمـــها فريق
                  متخصــــــــص ومن خلال مستشارون أكفـــاء ذوو تكوين علمي متميز
                  من خلال أحدث التقنيـــات ســـواء على الهاتـــــف،
                  الإنترنـــــــــت، البريــــد إلكترونـــــي..
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img6Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img6InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={img6} alt="" />
                <h5 className="text-main fw-bold">صياغة العقود</h5>
                <p className="small-paragraph" dir="rtl">
                  نقــوم بصياغــة العقــود التجاريـــــــة المحلية باللغة
                  العربية، تتميز صياغتنا للعقود بالوضــوح بهــدف استمـــــرار
                  العلاقات التجارية مــن خـــلال وضـــــع الاحتمالات الممكنـة
                  للخــلاف وإيجــــاد حلـــول قانونيــــة مــن خلال صياغتهـا
                  بشكل صحيح في بنـود العقـــــد وفق أفضــــــل الممارســــات
                  العالميــــــــة.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <motion.div
                ref={img7Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img7InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={img7} alt="" />
                <h5 className="text-main fw-bold">القضايا العمالية</h5>
                <p className="small-paragraph" dir="rtl">
                  نمثل عملاءنا في جميع القضايا والمنازعات العمالية، ونقــــوم
                  بدور صاحــــب العمــــــــــل ودور العامـل، كما نقدم
                  الاستشـــارة القانونيـــــة الصحيحـــــة حــــول أفضــــــل
                  أساليــــب حل النـــــزاع العمالية، وتوضيـح الإجـــــراءات
                  الواجب اتباعها في سبيل ذلك.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <motion.div
                ref={img8Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img8InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <img src={img8} alt="" />
                <h5 className="text-main fw-bold">الإدارة القانونية للمنشآت</h5>
                <p className="small-paragraph" dir="rtl">
                  التعاقد السنوي مع المنشــآت التجاريــة والذي يتم بموجبـــه
                  إدارتها قانونيا وإدارة عقودها وقراراتـــــــها في
                  مواجهـــــــة موظفيها ومواجـهة الجهـــات الاعتبارية التي
                  تتعـامل معــها على جميـــــــــــع الأصعــــــــدة.
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

export default ServicesPage;
