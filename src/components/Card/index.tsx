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
} from "./styled";
import {
  BsStars,
  BsFillBarChartFill,
  BsCheck2Circle,
  BsFillEyeSlashFill,
} from "react-icons/bs";

interface CardProps {
  title?: string;
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
const Card: FC<CardProps> = ({
  title,
  image,
  imageShiny,
  abilities,
  types,
}) => {
  const [isShiny, setShiny] = useState(false);
  const handleShiny = () => {
    setShiny(!isShiny);
  };
  return (
    <Container>
      <Header>
        {title && <Title>{title}</Title>}
        <Button
          text="Shiny"
          onClick={handleShiny}
          icon={<BsStars />}
          background="#66a2b3"
          color="#fff"
          fontSize="12px"
        />
      </Header>
      <Content>
        {image && <Image src={isShiny ? imageShiny : image} />}
        <Row>
          <Category>
            <Subtitle>
              <IconLeft>
                <BsFillBarChartFill />
              </IconLeft>
              Types
            </Subtitle>
            <List>
              {types.map(({ type }, id) => (
                <ItemList key={id}>
                  <IconLeft>
                    <BsCheck2Circle />
                  </IconLeft>
                  {type.name}
                </ItemList>
              ))}
            </List>
          </Category>
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
