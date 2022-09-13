import React from "react";

import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleMouseDownPasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return;
    }
    console.log(name, email, password);
    try {
      const config = {
        Headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `api/signup`,
        {
          name,
          email,
          password,
        },
        config
      );
      console.log(data);

      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          spacing={2}
          // mt="100px"
          justifyContent="center"
          style={{ minHeight: "50hv", marginTop: "40px", marginLeft: "390px" }}
        >
          <Paper elevation={16} sx={{ padding: 3 }}>
            <div className="signup_logo">
              <img src="./images/nb.png" alt="Not Found" />
            </div>

            <div className="note_1">
              <img src="./images/notebook.png" alt="Not Found" />
            </div>

            <Grid
              direction="column"
              container
              spacing={2}
              justifyContent="center"
              mt="-20px"
              paddingY="50px"
            >
              <Grid>
                <TextField
                  sx={{
                    width: 400,
                    ml: "70px",
                  }}
                  required
                  value={name}
                  type="name"
                  label="Name"
                  variant="outlined"
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log("name", e.target.value);
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  sx={{
                    ml: "54px",
                    width: 400,
                  }}
                  required
                  value={email}
                  type="email"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log("email", e.target.value);
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  sx={{
                    ml: "54px",
                    width: 400,
                  }}
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  // type="password"
                  label="Password"
                  variant="outlined"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log("Password", e.target.value);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handlePasswordVisibility}
                          onMouseDown={handleMouseDownPasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item mt="-8px">
                <Button
                  onClick={submitHandler}
                  variant="contained"
                  size="large"
                  sx={{
                    ml: "53px",
                    mt: 2,
                    width: 400,
                  }}
                >
                  SignUp
                </Button>
              </Grid>

              <Grid container className="link_Login">
                <Link
                  className="login_link"
                  to="/login"
                  style={{ cursor: "pointer" }}
                >
                  You are already signup? Login
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUp;
