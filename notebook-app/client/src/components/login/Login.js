import React from "react";

import axios from "axios";

import {
  Button,
  Container,
  FormControlLabel,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import "./Login.css";

const Login = () => {
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

    if (!email || !password) {
      return;
    }
    try {
      const config = {
        Headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `api/login`,
        {
          email,
          password,
        },
        config
      );
      console.log(data);

      localStorage.setItem("token", JSON.stringify(data));
      navigate("/features");
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
          justifyContent="center"
          mt="-30px"
          style={{
            minHeight: "50hv",
            paddingTop: "95px",
            paddingLeft: "400px",
          }}
        >
          <Paper elevation={16} sx={{ padding: 9 }}>
            <div className="logo">
              <img src="./images/nb.png" alt="Not Found" />
            </div>

            <div className="note_logo">
              <img src="./images/notebook.png" alt="Not Found" />
            </div>

            <Grid container direction="column" spacing={2}>
              <Grid item mt="-5px" ml="10px">
                <TextField
                  sx={{
                    width: 400,
                  }}
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

              <Grid item mt="5px" ml="10px">
                <TextField
                  sx={{
                    width: 400,
                  }}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  variant="outlined"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log("password", e.target.value);
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

              <Grid mr="auto" ml="70px" mt="10px">
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>

              <Grid item mt="-8px" ml="10px">
                <Button
                  onClick={submitHandler}
                  variant="contained"
                  size="large"
                  sx={{
                    width: 400,
                  }}
                >
                  Log In
                </Button>
              </Grid>

              <Grid container mt="8px">
                <Grid item ml="auto" mr="15px">
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
