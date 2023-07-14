import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Filter = ({ value, onChange }) => {
  return (
    <StyledLabel>
      Find contacts by name:
      <input type="text" value={value} onChange={onChange} />
    </StyledLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0 auto;
  /* border: solid 2px black; */
  cursor: pointer;
  text-align: center;
  font-size: 20px;
`;
