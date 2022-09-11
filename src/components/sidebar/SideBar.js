import React from "react";

import "./SideBar.css";

function SideBar() {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#e4ee91", "#b693fd"];

  const [listOpen, setListOpen] = React.useState(false);

  return (
    <div className="side-bar">
      <img
        src="./images/add.png"
        alt="ADD"
        onClick={() => setListOpen(!listOpen)}
      />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar-list_item"
            style={{
              backgroundColor: item,
              position: "relative",
              left: -632,
              top: 20,
              gap: "20px",
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
