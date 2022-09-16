import React from "react";

import Notes from "../notes/Notes";
// import SideBar from "../sidebar/SideBar";

import "./NotesContainer.css";

function NotesContainer(props) {
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = reverArray(props.notes);

  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes">
        {/* {notes?.length > 0 ? (
          notes.map((item, index) => <Notes key={item.id} notes={item} />)
        ) : (
          <h3
            style={{
              color: "orange",
              fontSize: "20px",
              paddingTop: "20px",
              fontWeight: 500,
            }}
          >
            Currently You Have No Notes
          </h3>
        )} */}
        {notes &&
          notes.map((item, index) => <Notes key={item.id} notes={item} />)}
        {notes.length === 0 && (
          <h3
            style={{
              color: "orange",
              fontSize: "20px",
              paddingTop: "20px",
              fontWeight: 500,
            }}
          >
            Currently You Have No Notes
          </h3>
        )}
      </div>
    </div>
  );
}

export default NotesContainer;
