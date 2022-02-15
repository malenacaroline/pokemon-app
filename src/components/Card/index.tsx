import React, { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  type: string;
}
const Card: FC<CardProps> = ({title, description, type}) => {
  return(
    <h1>Hello world</h1>
  );
};

export { Card };
