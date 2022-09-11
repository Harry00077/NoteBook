import React from "react";

import Notes from "../notes/Notes";
// import SideBar from "../sidebar/SideBar";

import "./NotesContainer.css";

function NotesContainer(props) {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes">
        {props.notes.map((item, index) => (
          <Notes key={index} notes={item} />
        ))}
      </div>
    </div>
  );
}

export default NotesContainer;
