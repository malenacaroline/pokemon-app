import styled from "styled-components";

const StyledInput = styled.input`
  padding: 16px;
  width: 400px;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 32px;
  background-color: #ffffffdb;
  outline: 0;
  &:focus {
    background-color: #fff;
  }
`;

export { StyledInput };