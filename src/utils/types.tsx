import dark from "../assets/images/types/dark.png";
import ice from "../assets/images/types/ice.png";
import normal from "../assets/images/types/normal.png";
import fire from "../assets/images/types/fire.png";
import water from "../assets/images/types/water.png";
import grass from "../assets/images/types/grass.png";
import electric from "../assets/images/types/electric.png";
import fighting from "../assets/images/types/fighting.png";
import poison from "../assets/images/types/poison.png";
import ground from "../assets/images/types/ground.png";
import flying from "../assets/images/types/flying.png";
import psychic from "../assets/images/types/psychic.png";
import bug from "../assets/images/types/bug.png";
import rock from "../assets/images/types/rock.png";
import ghost from "../assets/images/types/ghost.png";
import dragon from "../assets/images/types/dragon.png";
import steel from "../assets/images/types/steel.png";
import fairy from "../assets/images/types/fairy.png";


interface ITypesObj {
  [type: string]: {
    icon: string;
    background: string;
  };
}

const typesObj: ITypesObj = {
  dark: {
    icon: dark,
    background: "#5a5a5a",
  },
  ice: {
    icon: ice,
    background: "#72cbbf",
  },
  normal: {
    icon: normal,
    background: "#989ea5",
  },
  fire: {
    icon: fire,
    background: "##f59951",
  },
  water: {
    icon: water,
    background: "#308cdb",
  },
  grass: {
    icon: grass,
    background: "#18c521",
  },
  electric: {
    icon: electric,
    background: "#ffcf18",
  },
  fighting: {
    icon: fighting,
    background: "#e52b62",
  },
  poison: {
    icon: poison,
    background: "#ac64c1",
  },
  ground: {
    icon: ground,
    background: "#f76c29",
  },
  flying: {
    icon: flying,
    background: "#90addd",
  },
  psychic: {
    icon: psychic,
    background: "#ff6473",
  },
  bug: {
    icon: bug,
    background: "#80c31a",
  },
  rock: {
    icon: rock,
    background: "#cfb87d",
  },
  ghost: {
    icon: ghost,
    background: "#4161ad",
  },
  dragon: {
    icon: dragon,
    background: "#166ac7",
  },
  steel: {
    icon: steel,
    background: "#5594ad",
  },
  fairy: {
    icon: fairy,
    background: "#f590e6",
  },
};

export { typesObj };
