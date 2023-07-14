import styled from 'styled-components';

export const StyledUl = styled.ul`
  list-style: none;
  width: 300px;
  margin: 20px auto;
  padding-left: 0;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  border: solid 2px black;
  width: 300px;
  font-size: 16px;
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
