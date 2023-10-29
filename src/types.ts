type Engine = "petrol" | "electric" | "disel";
type Transmission = "automatic" | "manual" | "robotic";

export type Car = {
  id: number;
  img: string;
  brand: string;
  model: string;
  color: string;
  price: number;
  year: number;
  engine: Engine;
  transmission?: Transmission;
  powerReserve?: number;
};
