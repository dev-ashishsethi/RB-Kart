import marvelSlider from "../../assets/images/carousel/marvelSlider.webp";
import dragonBallSlider from "../../assets/images/carousel/AnimeSlider.webp";
import harryPotterSlider from "../../assets/images/carousel/haryyPotterSlider.webp";
import rickMortySlider from "../../assets/images/carousel/rickMortySlider.webp";
import { v4 as uuid } from "uuid";

export const carousel = [
    {
      _id: uuid(),
      name: "Marvel",
      image:marvelSlider,
    },
    {
      _id: uuid(),
      name: "DragonBall",
      image:dragonBallSlider,
    },
    {
      _id: uuid(),
      name: "Harry Potter",
      image:harryPotterSlider,
    },
    {
      _id: uuid(),
      name: "horror",
      image:rickMortySlider,
    },
  ];
  