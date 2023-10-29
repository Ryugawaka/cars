import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddCar: React.FC = () => {
  const { handleSubmit, register } = useForm();
  const [engine, setEngine] = useState("");

  const inputClassName = "px-4 py-2 rounded-md outline-none";

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className='px-10 py-20'>
      <Link to={"/"}>
        <button className='absolute top-5 left-10 text-xl text-white'>
          {"< "}Назад
        </button>
      </Link>
      <form
        className='flex flex-col w-[30rem] gap-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor='img'>Изображение (url)</label>
        <input className={inputClassName} id='img' {...register("img")} />
        <label htmlFor='brand'>Бренд</label>
        <input className={inputClassName} id='brand' {...register("brand")} />
        <label htmlFor='model'>Модель</label>
        <input className={inputClassName} id='model' {...register("model")} />
        <label htmlFor='color'>Цвет</label>
        <input className={inputClassName} id='color' {...register("color")} />
        <label htmlFor='year'>Год</label>
        <input
          className={inputClassName}
          type='number'
          id='year'
          {...register("year")}
        />
        <label htmlFor='price'>Цена</label>
        <input
          className={inputClassName}
          type='number'
          id='price'
          {...register("price")}
        />
        <label htmlFor='engine'>Тип двигателя</label>
        <select
          className={inputClassName}
          id='engine'
          {...register("engine")}
          onChange={(e) => setEngine(e.target.value)}
        >
          <option>Бензиновый</option>
          <option>Дизельный</option>
          <option>Электрический</option>
        </select>
        <button
          className='px-4 py-2 text-white border rounded-md bg-slate-600 hover:bg-slate-800 border-slate-900 mt-5 outline-none'
          type='submit'
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default AddCar;
