import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import initialContacts from "./data/contacts.json";

import {
  ContactForm,
  ContactList,
  SearchBox,
} from "./components/features/contact";

const STORAGE_KEY = "contacts";

const safeParseJSON = (value, fallback) => {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return safeParseJSON(saved, initialContacts);
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const normalizedName = name.trim().toLowerCase();
    const normalizedNumber = number.trim();

    const isExist = contacts.some(
      (contact) =>
        contact.name.trim().toLowerCase() === normalizedName &&
        contact.number.trim() === normalizedNumber
    );

    if (isExist) {
      alert(`${name} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    setContacts((prev) => [newContact, ...prev]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div className="app__container">
      <h1>Phonebook</h1>

      <ContactForm addContact={addContact} />

      <SearchBox value={filter} onChange={setFilter} />

      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
