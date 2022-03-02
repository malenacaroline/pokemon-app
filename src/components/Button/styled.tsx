import styled from "styled-components";

const StyledButton = styled.button<{
  background: string;
  color: string;
  fontSize: string;
}>`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  display: flex;
  align-items: flex;
  padding: ${({ fontSize }) => (fontSize === '12px' ? '4px' : '8px')};
  border-radius: 4px;
  border: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
`;

const Icon = styled.span`
  margin-left: 8px;
`

export { StyledButton, Icon };
