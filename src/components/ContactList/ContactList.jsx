import React from 'react';
import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};
