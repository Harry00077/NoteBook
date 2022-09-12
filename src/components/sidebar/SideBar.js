import React from "react";
import { useLocation } from "react-router-dom";

import "./SideBar.css";

const SideBar = (props) => {
  const { pathname } = useLocation();

  const showSideBar = pathname === "/mynotes" ? true : false;

  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#e4ee91", "#b693fd"];

  const [listOpen, setListOpen] = React.useState(false);

  return (
    <>
      {showSideBar && (
        <div className="side-bar">
          <img
            src="./images/add.png"
            alt="ADD"
            onClick={() => {
              setListOpen(!listOpen);
              console.log("hello");
            }}
          />
          <ul
            className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}
          >
            {colors.map((item, index) => (
              <li
                key={index}
                className="sidebar-list_item"
                style={{
                  backgroundColor: item,
                  gap: "20px",
                }}
                onClick={() => props.addNote(item)}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar;
