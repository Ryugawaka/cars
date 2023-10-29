import { Car } from "../types";

export const cars: Car[] = [
  {
    id: 1,
    img: "https://cdn.kia.ru/resize/445x250/cars-data/used-cars/2023-08-11/b8c76d3f-1c1d-4583-a4d7-7ac39baa1f91.jpg",
    brand: "KIA",
    model: "RIO",
    color: "Белый",
    year: 2013,
    price: 160000,
    engine: "disel",
    transmission: "automatic",
  },
  {
    id: 2,
    img: "https://images.perthnow.com.au/publication/C-10632300/9724ef5cbade101220d6523871ad088f70d17dfc-16x9-x0y75w1441h811.jpg?imwidth=668&impolicy=pn_v3",
    brand: "Tesla",
    model: "Model 3",
    color: "Красный",
    year: 2018,
    price: 1200000,
    engine: "electric",
    powerReserve: 100,
  },
];
