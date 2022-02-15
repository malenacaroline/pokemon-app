import React, { useState } from "react";
import { Input, Button } from "../../components";
import { Container } from "./styled";
import logo from "../../assets/logo.png";
import pokeball from "../../assets/pokeball.png";

function Main() {
  const [pokemon, setPokemon] = useState("");
  const [details, setDetails] = useState({});
  const [notFound, setNotFound] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    setPokemon(value);
  };
  const handleClick = () => {
    console.log("got pokemon:", pokemon);
    fn();
  }

const fn=   () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      setDetails(data);
    })
    .catch(()=> {
      setNotFound(true);
    })
}

  
  return (
    <Container>
      <img style={{ width: "300px" }} src={logo} />
      <Input
        type="text"
        placeholder="Digite o pokemon"
        value={pokemon}
        onChange={handleChange}
      />
      <Button text="Catch the pokemon" onClick={handleClick}>
        <img style={{ width: "30px", height: "30px" }} src={pokeball} />
      </Button>
      {notFound && (
        <div>
          <span>Pokemon não encontrado!</span>
        </div>
      )}
    </Container>
  );
};

export { Main };
