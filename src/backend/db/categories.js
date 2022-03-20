import { v4 as uuid } from "uuid";
import marvelPoster from "../../assets/images/categories/marvelPoster.webp";
import dragonBall from "../../assets/images/categories/DragonBall.webp";
import harryPotter from "../../assets/images/categories/harryPotter.webp";
import rickMorty from "../../assets/images/categories/rickMorty.webp";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Marvel",
    image:marvelPoster,
    link:"./ProductListing/Marvel"
  },
  {
    _id: uuid(),
    categoryName: "DragonBall",
    image:dragonBall,
    link:"./ProductListing/DragonBall"
  },
  {
    _id: uuid(),
    categoryName: "Harry Potter",
    image:harryPotter,
    link:"./ProductListing/HarryPotter"
  },
  {
    _id: uuid(),
    categoryName: "Rick and Morty",
    image:rickMorty,
    link:"./ProductListing/RickMorty"
  },
];

