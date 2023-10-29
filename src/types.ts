type Engine = "Бензиновый" | "Электрический" | "Дизельный";
type Transmission = "Автоматическая" | "Ручная" | "Роботизированая";

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
