import ContactForm from "../components/ContactForm/ContactForm";
import style from "../styles/pagesStyles/contactPage.module.scss";

const ContactPage = () => {
  return (
    <div className={style.contact}>
      <h3>
        Please enter your details and message, and we will contact you shortly.
      </h3>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
