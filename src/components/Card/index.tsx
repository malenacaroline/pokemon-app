import React, { FC, useState } from "react";
import { Button } from "../../components";
import {
  Container,
  Header,
  Title,
  Image,
  Content,
  Subtitle,
  List,
  ItemList,
  IconLeft,
  IconRight,
  Category,
  Row,
  Chip,
  ListGrid,
  TypeIcon,
} from "./styled";
import {
  BsStars,
  BsFillBarChartFill,
  BsCheck2Circle,
  BsFillEyeSlashFill,
} from "react-icons/bs";

import { typesObj } from "../../utils/types";

interface CardProps {
  id: number;
  name?: string;
  image: string;
  imageShiny: string;
  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
  }[];
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

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

const Card: FC<CardProps> = ({ name, image, imageShiny, abilities, types }) => {
  const [isShiny, setShiny] = useState(false);
  const handleShiny = () => {
    setShiny(!isShiny);
  };

  return (
    <Container>
      <Header>
        {name && <Title>{name}</Title>}
        <Button
          text="Shiny"
          onClick={handleShiny}
          icon={<BsStars />}
          background="#66a2b3"
          color="#fff"
          fontSize="12px"
        />
      </Header>
      <ListGrid>
        {types.map(({ type }, id) => (
          <ItemList key={id}>
            <Chip background={typesObj[type.name].background}>
              <TypeIcon src={typesObj[type.name].icon} />
              {type.name}
            </Chip>
          </ItemList>
        ))}
      </ListGrid>
      <Content>
        {image && <Image src={isShiny ? imageShiny : image} />}
        <Row>
          <Category>
            <Subtitle>
              <IconLeft>
                <BsFillBarChartFill />
              </IconLeft>
              Abilities
            </Subtitle>
            <List>
              {abilities.map(({ ability, is_hidden }, id) => (
                <ItemList key={id}>
                  <IconLeft>
                    <BsCheck2Circle />
                  </IconLeft>
                  {ability.name}{" "}
                  {is_hidden ? (
                    <IconRight>
                      <BsFillEyeSlashFill />
                    </IconRight>
                  ) : (
                    ""
                  )}
                </ItemList>
              ))}
            </List>
          </Category>
        </Row>
      </Content>
    </Container>
  );
};

export { Card };
