import React, { FC, InputHTMLAttributes } from 'react';
import { StyledInput } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label?:string;
}

const Input: FC<InputProps> = ({
  ...props
}) => {
  return <StyledInput {...props}/>;
}

export {Input};
