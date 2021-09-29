import { Formik, Field, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  ad: Yup.string().min(2, 'Çok kısa').max(50, 'Çok uzun!').required('Lütfen adınızı giriniz!'),
  email: Yup.string().email('Geçersiz email adresi!').required('Lütfen emailinizi giriniz!'),
  mesaj: Yup.string()
    .min(5, 'Çok kısa!')
    .max(250, 'Çok uzun!')
    .required('Lütfen görüşlerinizi bize iletin, bizim için çok değerli!'),
});

// const encode = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&")
// }
function ContactForm() {
  return (
    <div className="form">
      <Formik
        validationSchema={ContactSchema}
        initialValues={{ ad: '', email: '', mesaj: '' }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log(values);
          try {
            setSubmitting(true);
            const response = await fetch('/api/contact', {
              method: 'POST',
              body: JSON.stringify(values),
              type: 'application/json',
            });
            if (response.ok) {
              resetForm();
              alert('Mesajınızı aldık! Yakında sizlere döneceğiz!');
            } else {
              alert(response.statusText);
            }
          } catch (err) {
            console.log(err);
          }
          setSubmitting(false);
          // //make async call
        }}
      >
        {({ isSubmitting, errors, touched }) =>
          isSubmitting ? (
            <div>Mesajınız gönderiliyor, lütfen bekleyiniz!</div>
          ) : (
            <div className="form">
              <Form noValidate className="form">
                <Field name="ad" className="field">
                  {({ field }) => (
                    <div isinvalid={errors.ad && touched.name}>
                      <label htmlFor="isim">Adınız</label>
                      <input {...field} id="ad" placeholder="Adınız" />
                      {errors.ad && touched.ad ? <div className="error">{errors.ad}</div> : null}
                    </div>
                  )}
                </Field>
                <Field name="email" className="field">
                  {({ field }) => (
                    <div isinvalid={errors.email && touched.email}>
                      <label htmlFor="email">Email</label>
                      <input {...field} id="email" placeholder="Email adresiniz" />
                      {errors.email && touched.email ? (
                        <div className="error">{errors.email}</div>
                      ) : null}
                    </div>
                  )}
                </Field>
                <Field name="mesaj" className="field">
                  {({ field }) => (
                    <div isinvalid={errors.mesaj && touched.mesaj}>
                      <label htmlFor="mesaj">Mesaj</label>
                      <textarea
                        {...field}
                        id="mesaj"
                        placeholder="Bize iletmek istediğiniz şeylerden bahsedin"
                      />
                      {errors.mesaj && touched.mesaj ? (
                        <div className="error">{errors.mesaj}</div>
                      ) : null}
                    </div>
                  )}
                </Field>
                <button disabled={isSubmitting} type="submit">
                  Gönder
                </button>
              </Form>
            </div>
          )
        }
      </Formik>
    </div>
  );
}

export default ContactForm;
