import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main";

function App() {
  return (
    <div className='App bg-zinc-600 h-[100vh]'>
      <header className='App-header'></header>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
