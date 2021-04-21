import style from "./contactform.module.scss";

const Form = () => {
  return (
    <form className={style.contactForm}>
      <label>Full name</label>
      <input type="text" name="user-name" />
      <label>Email address</label>
      <input type="text" name="user-email" />
      <label>Phone number</label>
      <input type="text" name="user-phonenumber" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea type="text" name="message" rows={5} />
      <input type="submit" value="Submit Message" />
    </form>
  );
};

export default Form;
