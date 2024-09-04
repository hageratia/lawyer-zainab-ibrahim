import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const FreeConsultaion = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name Too Short!")
      .max(30, "Name Too Long!")
      .required("Name is Required"),
    email: Yup.string().email("Email not valid").required("Email is required"),
    phone: Yup.string()
      .matches(
        /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/,
        "Invalid Phone Number"
      )
      .required("phone is required"),
    message: Yup.string()
      .min(12, "Message Too Short!")
      .required("Message is Required"),
  });

  const consultaionForm = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      emailjs
        .send(
          "service_lyz1if7",
          "template_mmbs9ja",
          {
            name: values.name,
            phone: values.phone,
            email: values.email,
            message: values.message,
          },
          "S1RW0cXifN8dIjgIs"
        )
        .then(
          () => {
            setIsSubmitted(true); // إظهار الشارة بعد الإرسال
            consultaionForm.resetForm(); // إعادة تعيين النموذج
          },
          (err) => {
            console.error("FAILED...", err);
          }
        );
    },
  });

  const handleOverlayClick = () => {
    window.open(
      "https://maps.app.goo.gl/HN3MJiHQ5fCD6xweA?g_st=com.google.maps.preview.copy",
      "_blank"
    );
  };

  return (
    <>
      <section className="mt-5 py-5" id="free">
        <div className="container">
          <div className="head mb-5 text-white justified-text">
            <h2 className="fw-bold">استشارات قانونية مجانية</h2>
            <p>
              المحامية زينب إبراهيم سترد على <br /> جميع استفسارتكم فقط اترك لنا
            </p>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-sm-12 d-flex justify-content-between align-items-center">
              <div className="map-container">
                <p className="address">CP37+7X Makkah Saudi Arabia</p>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.6613367025125!2d39.71498570000001!3d21.4032355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b837b26db85%3A0x76c7919e9e706888!2z2YXZg9iq2Kgg2KfZhNmF2K3Yp9mF2YrZhyDYstmK2YbYqCDYp9io2LHYp9mH2YrZhQ!5e0!3m2!1sar!2seg!4v1725290351434!5m2!1sar!2seg"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
                <div
                  onClick={handleOverlayClick}
                  className="top-0 end-0 position-absolute w-100 h-100 pointer-event bg-opacity-10"
                ></div>
              </div>
            </div>
            <div className="col-md-6 mt-4 col-sm-12">
              <form
                className="contact-form"
                dir="rtl"
                onSubmit={consultaionForm.handleSubmit}
              >
                <div className="row mb-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="الاسم بالكامل"
                      value={consultaionForm.values.name}
                      onChange={consultaionForm.handleChange}
                      onBlur={consultaionForm.handleBlur}
                    />
                    {consultaionForm.errors.name &&
                    consultaionForm.touched.name ? (
                      <div className="text-danger">
                        {consultaionForm.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="رقم الجوال"
                      value={consultaionForm.values.phone}
                      onChange={consultaionForm.handleChange}
                      onBlur={consultaionForm.handleBlur}
                    />
                    {consultaionForm.errors.phone &&
                    consultaionForm.touched.phone ? (
                      <div className="text-danger">
                        {consultaionForm.errors.phone}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    value={consultaionForm.values.email}
                    onChange={consultaionForm.handleChange}
                    onBlur={consultaionForm.handleBlur}
                  />
                  {consultaionForm.errors.email &&
                  consultaionForm.touched.email ? (
                    <div className="text-danger">
                      {consultaionForm.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    name="message"
                    placeholder="تفاصيل الأستشارة"
                    value={consultaionForm.values.message}
                    onChange={consultaionForm.handleChange}
                    onBlur={consultaionForm.handleBlur}
                  ></textarea>
                  {consultaionForm.errors.message &&
                  consultaionForm.touched.message ? (
                    <div className="text-danger">
                      {consultaionForm.errors.message}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={
                      !(consultaionForm.isValid && consultaionForm.dirty)
                    }
                  >
                    إرسال
                  </button>
                </div>
                {isSubmitted && (
                  <div className="alert alert-success mt-3" role="alert">
                    تم إرسال رسالتك بنجاح!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeConsultaion;
