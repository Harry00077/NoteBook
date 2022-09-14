import React from "react";

import "./Notes.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const userinfo = JSON.parse(localStorage.getItem("token"));
const baseUrl = "/api/mynotes";
const Notes = (props) => {
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!title || !text) {
      return;
    }
    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userinfo}`,
        },
      };

      const { data } = await axios
        .post(
          `${baseUrl}`,
          {
            title,
            text,
          },

          config
        )
        .then((res) => res.data);
      console.log(data);

      // localStorage.setItem("token", JSON.stringify(data));
      // navigate("/mynotes");
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
        defaultValue={text}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log("Title", e.target.value);
        }}
      />
      <textarea
        className="note_text"
        defaultValue={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log("Text", e.target.value);
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
