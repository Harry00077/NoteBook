import React from "react";

import "./Notes.css";

function Notes(props) {
  return (
    <div className="note" style={{ backgroundColor: props.notes.color }}>
      <textarea className="note_text" defaultValue={props.notes.text} />
      <p>{props.notes.time}</p>
    </div>
  );
}

export default Notes;
