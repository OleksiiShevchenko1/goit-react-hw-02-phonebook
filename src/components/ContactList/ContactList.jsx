import React from 'react';
import PropTypes from 'prop-types';
import { StyledUl, StyledLi, StyledButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <StyledUl>
        {contacts.map(({ name, number, id }) => (
          <StyledLi key={id}>
            {name} : {number}
            <StyledButton onClick={() => onDeleteContact(id)} type="button">
              Delete
            </StyledButton>
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};
