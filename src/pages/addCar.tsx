import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Car } from "../types";
import { cars } from "../mocks/cars";

const AddCar: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Car>();
  const [engine, setEngine] = useState("");
  const navigate = useNavigate();

  const inputClassName = "px-4 py-2 rounded-md outline-none";

  const onSubmit = (car: Car) => {
    car.id = Date.now();
    if (car.engine === "Электрический") {
      delete car.transmission;
    } else {
      delete car.powerReserve;
    }
    cars.push(car);
    navigate("/");
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
        <Controller
          name='img'
          control={control}
          rules={{
            required: {
              value: true,
              message: "Изображение не может быть пустым",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <>
              <label htmlFor='img'>Изображение (url)</label>
              <input
                className={inputClassName}
                id='img'
                value={value}
                onChange={onChange}
              />
              <p className='text-red-600'>{errors.img?.message}</p>
            </>
          )}
        />
        <Controller
          name='brand'
          control={control}
          rules={{
            required: {
              value: true,
              message: "Бренд не может быть пустым",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <>
              <label htmlFor='brand'>Бренд</label>
              <input
                className={inputClassName}
                id='brand'
                value={value}
                onChange={onChange}
              />
              <p className='text-red-600'>{errors.brand?.message}</p>
            </>
          )}
        />
        <Controller
          name='model'
          control={control}
          rules={{
            required: {
              value: true,
              message: "Поле модель не может быть пустым",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <>
              <label htmlFor='model'>Модель</label>
              <input
                className={inputClassName}
                id='model'
                value={value}
                onChange={onChange}
              />
              <p className='text-red-600'>{errors.model?.message}</p>
            </>
          )}
        />
        <Controller
          name='color'
          control={control}
          rules={{
            required: {
              value: true,
              message: "Цвет не может быть пустым",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <>
              <label htmlFor='color'>Цвет</label>
              <input
                className={inputClassName}
                id='color'
                value={value}
                onChange={onChange}
              />
              <p className='text-red-600'>{errors.color?.message}</p>
            </>
          )}
        />
        <Controller
          name='year'
          control={control}
          rules={{
            required: {
              value: true,
              message: "Год не может быть пустым",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <>
              <label htmlFor='year'>Год</label>
              <input
                className={inputClassName}
                type='number'
                id='year'
                value={value}
                onChange={onChange}
              />
              <p className='text-red-600'>{errors.year?.message}</p>
            </>
          )}
        />
        <Controller
          name='price'
          control={control}
          rules={{
            required: {
              value: true,
              message: "Поле цена не может быть пустым",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <>
              <label htmlFor='price'>Цена</label>
              <input
                className={inputClassName}
                type='number'
                id='price'
                value={value}
                onChange={onChange}
              />
              <p className='text-red-600'>{errors.price?.message}</p>
            </>
          )}
        />
        <Controller
          name='engine'
          control={control}
          rules={{
            required: {
              value: true,
              message: "Выберите тип двигателя",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <>
              <label htmlFor='engine'>Тип двигателя</label>
              <select
                className={inputClassName}
                id='engine'
                value={value}
                onChange={(e) => {
                  setEngine(e.target.value);
                  onChange(e);
                }}
              >
                <option>Бензиновый</option>
                <option>Дизельный</option>
                <option>Электрический</option>
              </select>
              <p className='text-red-600'>{errors.engine?.message}</p>
            </>
          )}
        />

        {engine === "Электрический" && (
          <div className='flex flex-col gap-5'>
            <Controller
              name='powerReserve'
              control={control}
              rules={{
                required: {
                  value: engine === "Электрический",
                  message: "Запас хода не может быть пустым",
                },
              }}
              render={({ field: { value, onChange } }) => (
                <>
                  <label htmlFor='powerReserve'>Запас хода(km)</label>
                  <input
                    className={inputClassName}
                    type='number'
                    id='powerReserve'
                    value={value}
                    onChange={onChange}
                  />
                  <p className='text-red-600'>{errors.powerReserve?.message}</p>
                </>
              )}
            />
          </div>
        )}
        {(engine === "Дизельный" || engine === "Бензиновый") && (
          <div className='flex flex-col gap-5'>
            <Controller
              name='transmission'
              control={control}
              rules={{
                required: {
                  value: engine === "Дизельный" || engine === "Бензиновый",
                  message: "Поле трансмиссия не может быть пустым",
                },
              }}
              render={({ field: { value, onChange } }) => (
                <>
                  <label htmlFor='transmission'>Трансмиссия</label>
                  <select
                    className={inputClassName}
                    id='transmission'
                    value={value}
                    onChange={onChange}
                    defaultValue={"Трансмиссия"}
                  >
                    <option>Автоматическая</option>
                    <option>Ручная</option>
                    <option>Роботизированая</option>
                  </select>
                  <p className='text-red-600'>{errors.transmission?.message}</p>
                </>
              )}
            />
          </div>
        )}
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
