import React from 'react';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name} : {number}
            <button onClick={() => onDeleteContact(id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
