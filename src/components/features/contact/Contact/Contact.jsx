import styles from "./Contact.module.css";

import { IoMdContact } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";

const { contact__container, contact__info, contact__icon, contact__button } =
  styles;

const Contact = ({ contact, onDelete }) => {
  const { name, number } = contact;

  return (
    <div className={contact__container}>
      <div className={contact__info}>
        <span>
          <IoMdContact className={contact__icon} /> {name}
        </span>
        <span>
          <BsTelephoneFill className={contact__icon} /> {number}
        </span>
      </div>

      <button onClick={() => onDelete(contact.id)} className={contact__button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
