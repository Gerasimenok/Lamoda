import Chance from "chance";

const chance = new Chance();

const colors = ["красный", "зеленый", "синий", "желтый", "фиолетовый"];
const images = [
  "/images/product1.jpg",
  "/images/product2.jpg",
  "/images/product3.jpg",
  "/images/product4.jpg",
  "/images/product5.jpg",
];

export const generateProducts = (num) => {
  return Array.from({ length: num }, () => ({
    id: chance.guid(),
    name: chance.word(),
    description: chance.sentence({ words: 5 }),
    color: chance.pickone(colors),
    price: chance.integer({ min: 10, max: 9999 }),
    rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
    imageUrl: chance.pickone(images),
  }));
};
