import React, { useState } from "react";
import ContactList from "./ContactList";

const Form = () => {
  const [contactName, setContactName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const [allContacts, setAllContacts] = useState([]);
  function preventHandler(e) {
    e.preventDefault();

    setAllContacts((prevContacts) => [
      ...prevContacts,
      { contactName, contact, email },
    ]);
    setContactName("");
    setContact("");
    setEmail("");
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        onSubmit={(e) => {
          preventHandler(e);
        }}
        className="w-[30%] flex flex-col items-center justify-center gap-3"
      >
        <h1 className="text-3xl font-medium">Save Contact</h1>
        <input
          value={contactName}
          onChange={(e) => {
            setContactName(e.target.value);
          }}
          type="text"
          placeholder="Enter Name"
        />
        <input
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
          class="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
          type="number"
          placeholder="Enter Mobile No"
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Enter Email"
        />
        <button className="w-full h-10 font-medium cursor-pointer rounded-md text-2xl bg-blue-800 active:scale-98">
          Save
        </button>
      </form>
      <ContactList allContacts={allContacts} />
    </div>
  );
};

export default Form;
