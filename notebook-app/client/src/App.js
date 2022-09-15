import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

import MyNotes from "./components/notes/Notes";
import Features from "./components/features/Features";
import NotesContainer from "./components/notescontainer/NotesContainer";

import "./App.css";

function App() {
  const [notes, setNotes] = React.useState([]);

  const fetchAllNotes = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:4000/api/mynotes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          auth_token: JSON.parse(token).token,
        },
      });
      if (!response.ok) {
        return;
      }

      const allNotes = await response.json();

      setNotes(allNotes);
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    fetchAllNotes();
  }, []);

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  return (
    <>
      <NavBar />
      <div style={{ display: "flex", paddingTop: "30px" }}>
        <SideBar addNote={addNote} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/mynotes"
            element={((<MyNotes />), (<NotesContainer notes={notes} />))}
          />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
