import React, { useEffect, useState } from "react";
import { Button, Card } from "../../components";
import { Container } from "./styled";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";

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
    slot: number;
    type: {
      name: string;
    };
  }[];
};

function Pokedex() {
  const [details, setDetails] = useState<Pokemon>();
  const [notFound, setNotFound] = useState(false);
  // const handleClick = () => {
  //   const changeScreen = !initialScreen;
  //   setInitialScreen(changeScreen);
  //   fn();
  // };

  let { pokemon } = useParams();
  console.log(pokemon);

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      })
      .catch(() => {
        setNotFound(true);
      });
  }, []);

  // const fn = () => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDetails(data);
  //     })
  //     .catch(() => {
  //       setNotFound(true);
  //     });
  // };

  // fn();

  console.log(details);

  return (
    <Container>
      <img style={{ width: "300px" }} src={logo} />
      {notFound && (
        <div>
          <span>Pokemon não encontrado!</span>
        </div>
      )}
      {details && (
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
            id={details.id}
            name={details.name}
            image={details.sprites.front_default}
            imageShiny={details.sprites.front_shiny}
            abilities={details.abilities}
            types={details.types}
          />
        </>
      )}
      <Link to="/">
        <Button
          text="Catch another pokemon"
          background="#276cb7"
          color="#facc01"
          fontSize="16px"
        />
      </Link>
    </Container>
  );
}

export { Pokedex };
