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
            <h2 className="text-main fw-bold">خدماتنا</h2>
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
                  الوساطة وتقريب وجهات النظر عرض الرأي القانوني والحل الأمثل
                  للنزاع إقناع أطـراف النزاع بقبول الحلول الودية وعدم اللجوء
                  للمحاكم.
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
                  تحصيل الديون المتعثرة والمطالبات المالية ومتابعة تنفيذ
                  الأحكام.
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
                  الترافع والتقاضي، تمثيل العملاء في جميع إجـراءات التقاضـي
                  لكافة أنواع القضايا لدى المحاكم والجهات العدلية وأمام اللجان
                  القضائية وعلي اختلاف أنواعها ودرجاتها القضائية.
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
                  تقديم كافة الخدمات والاستشارات المتعلقة بقطاع الأعمال
                  والمشاريع الناشئة، وتشمـل تأسيـس وإنشاء الشركات بجميع أنواعها
                  وصياغـة وإعداد عقودها وتعديلاتها وتسجيلها وإشهارها وفقا للنظام
                  السعودي.
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
                  للاستشارات القانونيـة دور مهـم وفعال في إرشاد وتقـديم المشورة
                  المطلوبة للعملاء قبل البدء بالإجــراءات القانونية، فقد يقوم
                  المكتب بتقديم فضـــــل الخدمـــات للعمـلاء وذلك عبر خدمـة
                  الاستشارات القانونية التي يقدمها فريق متخصـص ومن خلال مستشارون
                  أكفاء ذو تكوين علمي متميز من خلال أحدث التقنيات سواء على
                  الهاتف، الإنترنت، البريد إلكتروني..
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
                  نقوم بصياغة العقود التجارية المحلية باللغة العربية، تتميز
                  صياغتنا للعقود بالوضوح بهدف استمرار العلاقات التجارية من خلال
                  وضع الاحتمالات الممكنـة للخلاف وإيجاد حلول قانونية من خلال
                  صياغتهـا بشكل صحيح في بنـود العقد وفق أفضل الممارسات العالمية.
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
                  نمثل عملاءنا في جميع القضايا والمنازعات العمالية، ونقوم بدور
                  صاحب العمل ودور العامل، كما نقدم الاستشارة القانونية الصحيحة
                  حول أفضل أساليب حل النزاع العمالية، وتوضيـح الإجراءات الواجب
                  اتباعها في سبيل ذلك.
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
                  التعاقد السنوي مع المنشآت التجارية والذي يتم بموجبه إدارتها
                  قانونيا وإدارة عقودها وقراراتها في مواجهة موظفيها ومواجـهة
                  الجهات الاعتبارية التي تتعامل معها على جميع الأصعدة.
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
