import styles from "./ContactList.module.css";

import Contact from "../Contact/Contact";

const { contactList__container, noContacts } = styles;

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={contactList__container}>
      {contacts.length === 0 ? (
        <li className={noContacts}>No contacts available.</li>
      ) : (
        contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactList;
