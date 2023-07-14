import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-left: 5px;
  width: 300px;
  gap: 10px;
  border: solid 2px black;
  padding: 10px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 300px;
  font-size: 20px;
`;

export const StyledButton = styled.button`
  background-color: tomato;
  color: darkblue;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  &:hover {
    background-color: orange;
    color: blue;
  }
`;
