import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";

import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

import MyNotes from "./components/notes/Notes";
import Features from "./components/features/Features";
import AboutUs from "./components/aboutus/AboutUs";
import NotesContainer from "./components/notescontainer/NotesContainer";

import "./App.css";

function App() {
  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notebook-app")) || []
  );

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

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);

    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);

    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  React.useEffect(() => {
    localStorage.setItem("notebook-app", JSON.stringify(notes));
  }, [notes]);
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
            element={
              ((<MyNotes />),
              (
                <NotesContainer
                  notes={notes}
                  deleteNote={deleteNote}
                  updateText={updateText}
                />
              ))
            }
          />
          <Route path="/features" element={<Features />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
