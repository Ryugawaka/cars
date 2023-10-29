import React from "react";
import { cars } from "../mocks/cars";
import RowElement from "../components/RowElement";
import axios from "axios";

const MainPage: React.FC = () => {
  // const data: Promise<Car[]> = axios
  //   .get("https://api.jsonbin.io/v3/b/653e46a90574da7622bf30f0", {
  //     headers: {
  //       "X-Master-Key":
  //         "$2a$10$l5dwRYFJzaOPyRjLzwRFPOMr17BPj1UDafxQFoVonPiD7J71gNqBe",
  //     },
  //   })
  //   .then((res) => console.log(res.data.record));
  const sortButtonClassName =
    "text-stone-200 border px-3 py-1 rounded-xl border-slate-950 hover:bg-slate-800 hover:text-slate-300";
  return (
    <div className='h-full py-20'>
      <div className='flex justify-end gap-5 w-full pb-3 font-semibold px-10 items-center'>
        <p>Сортировать по:</p>
        <button className={sortButtonClassName}>Бренд</button>
        <button className={sortButtonClassName}>Модель</button>
        <button className={sortButtonClassName}>Цена</button>
      </div>
      <div className='grid grid-cols-4 mx-auto text-center ml-[29rem] mr-[10rem] mb-[10px] text-white text-xl'>
        <p>Бренд</p>
        <p>Модель</p>
        <p>Год</p>
        <p>Цена</p>
      </div>
      <div className='flex flex-col gap-5'>
        {cars.map((c) => (
          <RowElement car={c} key={c.id} />
        ))}
      </div>
      <button className='w-20 h-20 text-center rounded-full border text-3xl text-white  font-semibold absolute right-[60px] bottom-[60px] hover:bg-slate-900 hover:border-slate-950'>
        +
      </button>
    </div>
  );
};

export default MainPage;
