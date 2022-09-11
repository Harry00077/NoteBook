import React from "react";

import { Button, Container, Grid, Paper, TextField } from "@mui/material";

import { Link } from "react-router-dom";

import "./SignUp.css";

function SignUp() {
  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          spacing={2}
          mt="100px"
          justifyContent="center"
          style={{ minHeight: "50hv" }}
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
                    width: 195,
                    ml: "70px",
                  }}
                  required
                  type="name"
                  label="First Name"
                  variant="outlined"
                />

                <TextField
                  sx={{
                    width: 195,
                    ml: "10px",
                  }}
                  required
                  type="name"
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>

              <Grid item>
                <TextField
                  sx={{
                    ml: "54px",
                    width: 400,
                  }}
                  required
                  type="email"
                  label="Email"
                  variant="outlined"
                />
              </Grid>

              <Grid item>
                <TextField
                  sx={{
                    ml: "54px",
                    width: 400,
                  }}
                  required
                  type="password"
                  label="Password"
                  variant="outlined"
                />
              </Grid>

              <Grid item mt="-8px">
                <Button
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
}

export default SignUp;
