import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";
import CarInfo from "./pages/carInfo";
import AddCar from "./pages/addCar";

function App() {
  return (
    <div className='App bg-zinc-600 h-[100%]'>
      <header className='App-header'></header>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:id' element={<CarInfo />} />
        <Route path='/add' element={<AddCar />} />
      </Routes>
    </div>
  );
}

export default App;
