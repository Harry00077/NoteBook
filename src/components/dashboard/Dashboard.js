import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import "./Dashboard.css";

function Dashboard() {
  const [changeColor, setChangeColor] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setChangeColor(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setChangeColor(false);
  };

  return (
    <div>
      <Button
        className="dashboard-button"
        // style={{ color: "#fff" }}
        variant="contained"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={
          changeColor
            ? {
                Color: "#fff",
                background: "transparent",
                fontWeight: "300",
                fontSize: "16px",
              }
            : {
                color: "#FF9540 ",
                background: "transparent",
                fontWeight: "300",
                fontSize: "16px",
              }
        }
      >
        Dashboard
      </Button>
      <Menu
        id="fademenu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default Dashboard;
