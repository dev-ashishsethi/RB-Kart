import { v4 as uuid } from "uuid";
import { DBImages } from "../../assets/images/products/DB";
import { MarvelImages } from "../../assets/images/products/Marvel";
import { HPImages } from "../../assets/images/products/Harry potter";
import { RMImages } from "../../assets/images/products/Rick and morty";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Goku Evolution T-Shirt",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: DBImages.DBTshirt1,
    price: "549.00",
    categoryName: "T-Shirt",
    rating: "3",
    genre: "DragonBall",
  },
  {
    _id: uuid(),
    title: "The Little Saiyan T-Shirt",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: DBImages.DBTshirt2,
    price: "699.00",
    categoryName: "T-Shirt",
    rating: "4",
    genre: "DragonBall",
  },
  {
    _id: uuid(),
    title: "Saiyan Prince Silhouette - Badge",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: DBImages.DBbadge2,
    price: "60.00",
    categoryName: "Badge",
    rating: "3",
    genre: "DragonBall",
  },
  {
    _id: uuid(),
    title: "Kakarot Silhouette - Badge",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: DBImages.DBbadge,
    price: "60.00",
    categoryName: "Badge",
    rating: "3",
    genre: "DragonBall",
  },
  {
    _id: uuid(),
    title: "Three Star Dragon Ball - Dragon Ball Z",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: DBImages.DBSticker2,
    price: "60.00",
    categoryName: "Sticker",
    rating: "2",
    genre: "DragonBall",
  },
  {
    _id: uuid(),
    title: "Buu - Dragon Ball Z Official Sticker",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: DBImages.DBSticker,
    price: "70.00",
    categoryName: "Sticker",
    rating: "4",
    genre: "DragonBall",
  },
  {
    _id: uuid(),
    title: "Gohan Pop Animation Collectible Figurine",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: DBImages.DBBobbleHead,
    price: "500.00",
    categoryName: "Bobble head",
    rating: "5",
    genre: "DragonBall",
  },
  {
    _id: uuid(),
    title: "Majin Buu  Pop Animation Collectible Figurine",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: DBImages.DBBobbleHead2,
    price: "999.00",
    categoryName: "Bobble head",
    rating: "1",
    genre: "DragonBall",
  },
  {
    _id: uuid(),
    title: "Master Of Mischief - Marvel Official T-Shirt",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: MarvelImages.MarvelTshirt2,
    price: "649.00",
    categoryName: "T-Shirt",
    rating: "3",
    genre: "Marvel",
  },
  {
    _id: uuid(),
    title: "Spider-Man: Logo - Marvel Official T-Shirt",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: MarvelImages.MarvelTshirt,
    price: "549.00",
    categoryName: "T-Shirt",
    rating: "4",
    genre: "Marvel",
  },
  {
    _id: uuid(),
    title: "Deadpool Stance - Marvel Official Badge",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: MarvelImages.Marvelbadge2,
    price: "39.00",
    categoryName: "Badge",
    rating: "5",
    genre: "Marvel",
  },
  {
    _id: uuid(),
    title: "The Infinity Gauntlet - Marvel Official Badge",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: MarvelImages.Marvelbadge,
    price: "69.00",
    categoryName: "Badge",
    rating: "2",
    genre: "Marvel",
  },
  {
    _id: uuid(),
    title: "Deadpool I Have Issues - Marvel Official Sticker",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: MarvelImages.MarvelSticker2,
    price: "79.00",
    categoryName: "Sticker",
    rating: "1",
    genre: "Marvel",
  },
  {
    _id: uuid(),
    title: "Mjolnir - Marvel Official Sticker",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: MarvelImages.MarvelSticker,
    price: "59.00",
    categoryName: "Sticker",
    rating: "3",
    genre: "Marvel",
  },
  {
    _id: uuid(),
    title: "Blank Panther Collectible Figurine",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: MarvelImages.MarvelBobbleHead2,
    price: "549.00",
    categoryName: "Bobble head",
    rating: "4",
    genre: "Marvel",
  },
  {
    _id: uuid(),
    title: "Groot Collectible Figurine",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: MarvelImages.MarvelBobbleHead,
    price: "499.00",
    categoryName: "Bobble head",
    rating: "5",
    genre: "Marvel",
  },
  //Harry Potter starts
  {
    _id: uuid(),
    title: "Harry Potter: Alumni Pride - Harry Potter Official T-Shirt",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: HPImages.HPTshirt,
    price: "549.00",
    categoryName: "T-Shirt",
    rating: "3",
    genre: "HarryPotter",
  },
  {
    _id: uuid(),
    title: "Harry's Patronus - Harry Potter Official T-Shirt",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: HPImages.HPTshirt2,
    price: "699.00",
    categoryName: "T-Shirt",
    rating: "3",
    genre: "HarryPotter",
  },
  {
    _id: uuid(),
    title: "Quidditch - Harry Potter Official Badge",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: HPImages.HPbadge,
    price: "69.00",
    categoryName: "Badge",
    rating: "4",
    genre: "HarryPotter",
  },
  {
    _id: uuid(),
    title: "Hogwarts House Crest - Harry Potter Official Badge",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: HPImages.HPbadge2,
    price: "79.00",
    categoryName: "Badge",
    rating: "5",
    genre: "HarryPotter",
  },
  {
    _id: uuid(),
    title: "Sorted - Harry Potter Official Sticker",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: HPImages.HPSticker,
    price: "89.00",
    categoryName: "Sticker",
    rating: "3",
    genre: "HarryPotter",
  },
  {
    _id: uuid(),
    title: "Harry Potter - Official Harry Potter Sticker",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: HPImages.HPSticker2,
    price: "119.00",
    categoryName: "Sticker",
    rating: "2",
    genre: "HarryPotter",
  },
  {
    _id: uuid(),
    title: "Harry Potter Collectible Figurine",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: HPImages.HPBobbleHead2,
    price: "799.00",
    categoryName: "Bobble head",
    rating: "5",
    genre: "HarryPotter",
  },
  {
    _id: uuid(),
    title: "Harry Potter Quidditch Collectible Figurine",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: HPImages.HPBobbleHead,
    price: "999.00",
    categoryName: "Bobble head",
    rating: "4",
    genre: "HarryPotter",
  },
  //Rick and morty starts
  {
    _id: uuid(),
    title: "I'm Not Arguing - Rick And Morty Official T-Shirt",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: RMImages.RMTshirt2,
    price: "699.00",
    categoryName: "T-Shirt",
    rating: "5",
    genre: "RickMorty",
  },
  {
    _id: uuid(),
    title: "Space Cruiser - Rick And Morty Official T-Shirt",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: RMImages.RMTshirt,
    price: "899.00",
    categoryName: "T-Shirt",
    rating: "3",
    genre: "RickMorty",
  },
  {
    _id: uuid(),
    title: "Rick Head - Rick And Morty Official Badge",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: RMImages.RMbadge2,
    price: "99.00",
    categoryName: "Badge",
    rating: "4",
    genre: "RickMorty",
  },
  {
    _id: uuid(),
    title: "Morty Head - Rick And Morty Official Badge",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: RMImages.RMbadge,
    price: "59.00",
    categoryName: "Badge",
    rating: "2",
    genre: "RickMorty",
  },
  {
    _id: uuid(),
    title: "Ricksy Business - Rick And Morty Official Sticker",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: RMImages.RMSticker2,
    price: "59.00",
    categoryName: "Sticker",
    rating: "3",
    genre: "RickMorty",
  },
  {
    _id: uuid(),
    title: "Shapeshifter Rick - Rick And Morty Official Sticker",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: RMImages.RMSticker,
    price: "69.00",
    categoryName: "Sticker",
    rating: "3",
    genre: "RickMorty",
  },
  {
    _id: uuid(),
    title: "Rick Collectible Figurine",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: RMImages.RMBobbleHead2,
    price: "699.00",
    categoryName: "Bobble head",
    rating: "4",
    genre: "RickMorty",
  },
  {
    _id: uuid(),
    title: "Morty Collectible Figurine",
    description:
      "The artwork will be screen printed to perfection on our premium, regular fit 100% Cotton Redwolf branded tees that you know and love.",
    image: RMImages.RMBobbleHead,
    price: "899.00",
    categoryName: "Bobble head",
    rating: "5",
    genre: "RickMorty",
  },
];
