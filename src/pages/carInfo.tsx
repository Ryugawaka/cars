import React from "react";
import { Link, useParams } from "react-router-dom";
import { cars } from "../mocks/cars";

const CarInfo: React.FC = () => {
  const { id } = useParams();
  const carById = cars.find((car) => car.id.toString() === id);
  return (
    <div className='px-10 py-20'>
      <Link to={"/"}>
        <button className='absolute top-5 left-10 text-xl text-white'>
          {"< "}Назад
        </button>
      </Link>
      <div className='flex justify-between'>
        <img src={carById?.img} className='w-[700px]' alt='car' />
        <div className='grid self-left grid-cols-2 w-[30rem] text-white text-md'>
          <p>Бренд:</p>
          <p>{carById?.brand}</p>
          <p>Модель:</p>
          <p>{carById?.model}</p>
          <p>Цвет:</p>
          <p>{carById?.color}</p>
          <p>Год:</p>
          <p>{carById?.year}</p>
          <p>Двигатель:</p>
          <p>{carById?.engine}</p>
          <p>Цена:</p>
          <p>{carById?.price} p</p>

          {carById?.powerReserve && <p>Запас хода:</p>}
          {carById?.powerReserve && <p>{carById?.powerReserve} км</p>}
          {carById?.transmission && <p>Трансмиссия:</p>}
          {carById?.transmission && <p>{carById?.transmission}</p>}
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
