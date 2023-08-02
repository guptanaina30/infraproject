// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./component/home";
import About from "./component/about";
import Team from "./component/ourTeam";


import Project from "./component/project";
import PageNotFound from "./component/pagenotfound";
import Layout from "./component/layout";

import ContactData from "./component/contact/contactData";
import TeamDetails from "./component/teammember/teamDetails";
// import TeamDetails from "./component/teammember/teamDetails";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<ContactData/>} />
          <Route path="/teamdetails/:id" element={<TeamDetails/>} />
         
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
