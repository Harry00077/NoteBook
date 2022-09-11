import React from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import MyNotes from "./components/notes/Notes";
import Features from "./components/features/Features";
import AboutUs from "./components/aboutus/AboutUs";
import NotesContainer from "./components/notescontainer/NotesContainer";

import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

import "./App.css";
import SideBar from "./components/sidebar/SideBar";

function App() {
  const notes = React.useState([
    {
      text: "asdasdfa",
      time: "3:10 PM",
      color: "orange",
    },
  ]);
  return (
    <>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/mynotes"
          element={((<MyNotes />), (<NotesContainer notes={notes} />))}
        />
        <Route path="/features" element={<Features />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
