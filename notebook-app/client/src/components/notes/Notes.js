import React from "react";
import "./Notes.css";

const Notes = (props) => {
  // const [notes, setNotes] = React.useState([]);
  const [title, setTitle] = React.useState(props.notes?.title || "");
  const [text, setText] = React.useState(props.notes?.text || "");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title || !text) {
      alert("Please Enter Details Correctly!");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      // const url = "http://localhost:4000/api/mynotes";

      const response = await fetch("http://localhost:4000/api/mynotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          auth_token: JSON.parse(token).token,
        },
        body: JSON.stringify({
          title,
          text,
          color: props.notes.color,
          time: props.notes.time,
        }),
        // body: formData,
      });

      await response.json();

      if (!response.ok) {
        alert("Server Crash While Creating New Note!");
        return;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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

  return (
    <div className="note" style={{ backgroundColor: props.notes.color }}>
      <div className="note_img">
        <img src="./images/edit.png" alt="EDIT" />
      </div>
      <textarea
        className="note_title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        className="note_text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="note_footer">
        <p>{formatDate(props.notes.time)}</p>
        <img
          className="img_create"
          src="./images/create.png"
          alt="CREATE"
          onClick={submitHandler}
        />
        <img
          src="./images/delete.png"
          alt="DELETE"
          onClick={() => props.deleteNote(props.notes.id)}
        />
      </div>
    </div>
  );
};

export default Notes;
