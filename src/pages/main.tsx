import React, { useState } from "react";
import { cars } from "../mocks/cars";
import RowElement from "../components/RowElement";
import axios from "axios";
import { Link } from "react-router-dom";
import { Car } from "../types";

const colors = new Set(cars.map((c) => c.color));
const brands = new Set(cars.map((c) => c.brand));

const MainPage: React.FC = () => {
  // const data: Promise<Car[]> = axios
  //   .get("https://api.jsonbin.io/v3/b/653e46a90574da7622bf30f0", {
  //     headers: {
  //       "X-Master-Key":
  //         "$2a$10$l5dwRYFJzaOPyRjLzwRFPOMr17BPj1UDafxQFoVonPiD7J71gNqBe",
  //     },
  //   })
  //   .then((res) => console.log(res.data.record));

  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

  // сортировка по ключу объекта car
  const sort = (key: keyof Car) => {
    const sorted = [...cars].sort((a, b) => (a[key]! < b[key]! ? 1 : -1));

    const sortedReverse = [...cars].sort((a, b) =>
      a[key]! < b[key]! ? -1 : 1
    );

    setFilteredCars(
      JSON.parse(
        JSON.stringify(
          JSON.stringify(filteredCars) === JSON.stringify(sorted)
            ? sortedReverse
            : JSON.stringify(filteredCars) === JSON.stringify(sortedReverse)
            ? sorted
            : sortedReverse
        )
      )
    );
  };

  const filterCars = (type: "color" | "brand", value: string) => {
    console.log(value, type);
    switch (type) {
      case "brand":
        setFilteredCars(cars.filter((c) => c.brand === value));
        break;
      case "color":
        setFilteredCars(cars.filter((c) => c.color === value));
        break;
    }
  };

  const filterClassName =
    "text-stone-200 border px-4 py-2 rounded-xl bg-slate-500 border-slate-950 hover:bg-slate-800 hover:text-slate-300 outline-none";
  return (
    <div className='h-[100%] py-20'>
      <div className='flex justify-end gap-5 w-full pb-3 font-semibold px-10 items-center'>
        <p>Фильтры:</p>
        <select
          className={filterClassName}
          defaultValue={"Бренд"}
          onChange={(e) => filterCars("brand", e.target.value)}
        >
          {Array.from(brands).map((b, index) => (
            <option key={index}>{b}</option>
          ))}
        </select>
        <select
          className={filterClassName}
          defaultValue={"Цвет"}
          onChange={(e) => filterCars("color", e.target.value)}
        >
          {Array.from(colors).map((с, index) => (
            <option key={index}>{с}</option>
          ))}
        </select>
        <button
          className={filterClassName}
          onClick={() => setFilteredCars(cars)}
        >
          Сброс
        </button>
      </div>
      <div className='grid grid-cols-4 mx-auto text-center ml-[29%] mr-[10rem] mb-[10px] text-white text-xl'>
        <button onClick={() => sort("brand")}>Бренд</button>
        <button onClick={() => sort("model")}>Модель</button>
        <button onClick={() => sort("year")}>Год</button>
        <button onClick={() => sort("price")}>Цена</button>
      </div>
      <div className='flex flex-col gap-5'>
        {filteredCars ? (
          filteredCars.map((c) => <RowElement car={c} key={c.id} />)
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
      <Link to='/add'>
        <button className='w-20 h-20 text-center rounded-full border text-3xl text-white  font-semibold absolute right-[60px] bottom-[60px] bg-slate-700 hover:bg-slate-900 hover:border-slate-950'>
          +
        </button>
      </Link>
    </div>
  );
};

export default MainPage;
