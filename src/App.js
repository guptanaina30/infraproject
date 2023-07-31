// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./component/home";
import About from "./component/about";
import Team from "./component/ourTeam";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
