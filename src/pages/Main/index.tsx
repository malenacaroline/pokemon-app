import React, { useState } from "react";
import { Input, Button } from "../../components";
import { Container } from "./styled";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Main() {
  const [pokemon, setPokemon] = useState("");
  const [notFound, setNotFound] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPokemon(value);
  };
  const url = `/pokemon/${pokemon}`;

  return (
    <Container>
      <img style={{ width: "300px" }} src={logo} />
      <Input
        type="text"
        placeholder="Digite o pokemon"
        value={pokemon}
        onChange={handleChange}
      />

      {notFound && (
        <div>
          <span>Pokemon não encontrado!</span>
        </div>
      )}
      <Link to={url}>
        <Button
          text="Catch pokemon"
          // onClick={handleClick}
          background="#276cb7"
          color="#facc01"
          fontSize="16px"
        />
      </Link>
    </Container>
  );
}

export { Main };
