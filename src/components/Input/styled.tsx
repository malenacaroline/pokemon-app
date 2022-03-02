import styled from "styled-components";

const StyledInput = styled.input`
  padding: 16px;
  width: 400px;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 32px;
  background-color: #ffffffdb;
  outline: 0;
  margin-bottom: 24px;
  &:focus {
    background-color: #fff;
  }
`;

export { StyledInput };