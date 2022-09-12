import React from "react";

import "./Notes.css";

let timer = 500,
  timeout;

function Notes(props) {
  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let ampm = hrs > 12 ? "PM" : "AM";

    hrs = hrs ? hrs : "12";
    hrs = hrs % 12 || 12;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${ampm} ${day} ${month}`;
  };
  const deBounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    deBounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.notes.color }}>
      <textarea
        className="note_text"
        defaultValue={props.notes.text}
        onChange={(event) => updateText(event.target.value, props.notes.id)}
      />
      <div className="note_footer">
        <p>{formatDate(props.notes.time)}</p>
        <img
          src="./images/delete.png"
          alt="DELETE"
          onClick={() => props.deleteNote(props.notes.id)}
        />
      </div>
    </div>
  );
}

export default Notes;
