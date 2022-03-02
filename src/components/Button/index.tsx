import React, { FC } from "react";
import { StyledButton, Icon } from "./styled";

interface ButtonProps {
  text: string;
  onClick?: (value: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: JSX.Element;
  background: string;
  color: string;
  fontSize: string;
}
const Button: FC<ButtonProps> = ({ ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('teste');
    props.onClick?.(e);
  };

  return (
    <StyledButton
      background={props.background}
      color={props.color}
      fontSize={props.fontSize}
      onClick={handleClick}
    >
      {props.text}
      <Icon>{props.icon}</Icon>
    </StyledButton>
  );
};

export { Button };
