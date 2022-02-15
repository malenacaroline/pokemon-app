import React, { FC } from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
  text: string;
  onClick?: (value: React.MouseEventHandler<HTMLButtonElement>) => void;
}
const Button: FC<ButtonProps> = ({ text }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('teste');
  };

  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export { Button };
