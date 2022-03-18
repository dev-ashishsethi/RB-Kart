import { v4 as uuid } from "uuid";
import marvelPoster from "../../assets/images/carousel/marvelPoster.webp";
import dragonBall from "../../assets/images/carousel/DragonBall.webp";
import harryPotter from "../../assets/images/carousel/harryPotter.webp";
import rickMorty from "../../assets/images/carousel/rickMorty.webp";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const carousel = [
  {
    _id: uuid(),
    name: "Marvel",
    image:marvelPoster,
  },
  {
    _id: uuid(),
    name: "DragonBall",
    image:dragonBall,
  },
  {
    _id: uuid(),
    name: "Harry Potter",
    image:harryPotter,
  },
  {
    _id: uuid(),
    name: "horror",
    image:rickMorty,
  },
];
