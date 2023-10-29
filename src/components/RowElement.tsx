import React from "react";
import { Car } from "../types";
import { Link } from "react-router-dom";

type RowElementProps = {
  car: Car;
};

const RowElement: React.FC<RowElementProps> = (props) => {
  const { car } = props;
  return (
    <Link to={`/${car.id}`}>
      <div className='grid grid-cols-5 justify-items-center items-center cursor-pointer text-2xl justify-between px-20 py-5 mx-10 border-2 rounded-md bg-slate-500 hover:bg-slate-600 border-slate-800'>
        <img src={car.img} alt='car' className='h-20 w-30 rounded-md' />
        <p>{car.brand}</p>
        <p>{car.model}</p>
        <p>{car.year}</p>
        <p>{car.price} Р</p>
      </div>
    </Link>
  );
};
export default RowElement;
