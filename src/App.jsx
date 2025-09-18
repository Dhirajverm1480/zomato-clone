import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FoodLog from "./pages/FoodLog";

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/food-log" element={<FoodLog />} />
        </Routes>
      </div>
      <Footer />
      <span
        id="#Home"
        className="fixed bottom-4 right-[1%] w-14 h-14 p-6 rounded-full bg-red-500 text-white text-2xl flex-center cursor-pointer"
      >
        ^
      </span>
    </div>
  );
};

export default App;
