import React, { useState } from "react";
import { Input, Button, Card } from "../../components";
import { Container } from "./styled";
import logo from "../../assets/logo.png";
import { usePokemon } from "../../services/pokemon";

type Pokemon = {
  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
  }[];
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
  };
  types: {
    slot: number,
    type: {
      name: string;
    }
  }[];
};

function Main() {
  const [pokemon, setPokemon] = useState("");
  const [initialScreen, setInitialScreen] = useState(true);
  const [details, setDetails] = useState<Pokemon>();
  const [notFound, setNotFound] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
    setPokemon(value);
  };
  const handleClick = () => {
    console.log("setInitialScreen bef:", initialScreen);
    const changeScreen = !initialScreen;
    console.log(changeScreen);
    setInitialScreen(changeScreen);
    console.log("setInitialScreen aft:", initialScreen);
    fn();
  };

  const fn = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      })
      .catch(() => {
        setInitialScreen(false);
        setNotFound(true);
      });
  };

  console.log(details);

  return (
    <Container>
      <img style={{ width: "300px" }} src={logo} />
      {initialScreen && (
        <Input
          type="text"
          placeholder="Digite o pokemon"
          value={pokemon}
          onChange={handleChange}
        />
      )}

      {notFound && (
        <div>
          <span>Pokemon não encontrado!</span>
        </div>
      )}
      {!initialScreen && details && (
        <>
          {/* <div>{details.id}</div> <div>{details.name}</div>{" "}
          {details.abilities.map(({ ability, is_hidden }, id) => (
            <div key={id}>
              {ability.name} {is_hidden}
            </div>
          ))}
          <img src={details.sprites.front_default} />
          <img src={details.sprites.front_shiny} /> */}
          <Card
            title={details.name}
            image={details.sprites.front_default}
            imageShiny={details.sprites.front_shiny}
            abilities={details.abilities}
            types={details.types}
          />
        </>
      )}
      <Button
        text={initialScreen ? "Catch pokemon" : "Catch another pokemon"}
        onClick={handleClick}
        background="#276cb7"
        color="#facc01"
        fontSize="16px"
      />
    </Container>
  );
}

export { Main };
