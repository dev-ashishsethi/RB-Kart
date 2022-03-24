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
    link:"./ProductListing"
  },
  {
    _id: uuid(),
    categoryName: "DragonBall",
    image:dragonBall,
    link:"./ProductListing"
  },
  {
    _id: uuid(),
    categoryName: "HarryPotter",
    image:harryPotter,
    link:"./ProductListing"
  },
  {
    _id: uuid(),
    categoryName: "RickMorty",
    image:rickMorty,
    link:"./ProductListing"
  },
];

