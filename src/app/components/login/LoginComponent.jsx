import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./LoginStyles.css";
import agent from "../../proxy/userService";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Context from "../../stores/context";

import "./LoginStyles.css";

export default function LoginComponent(props) {
  const { globalState, globalDispatch } = useContext(Context);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    const userDetail = {
      username: email,
      password: password,
    };
    agent.UserAPI.login(userDetail).then((response) => {
      sessionStorage.setItem("access_token", response["accessToken"]);
      sessionStorage.setItem("refresh_token", response["refreshToken"]);
      sessionStorage.setItem("username", email);
      globalDispatch({ type: "LOGIN" });
      history.push("/");
    });
  }

  return (
    <div className="LoginComponent">
      <div style={{ padding: 30 }}>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <h1
            style={{
              marginLeft: "60px",
              color: "#FFFF",
            }}
          >
            RedBack Login
          </h1>
          <Grid item xs={12}>
            <TextField
              className="Login-input"
              value={email}
              type="email"
              placeholder="username"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              large
              className="Login-input"
              value={password}
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              component={NavLink}
              to="/"
              onClick={() => handleClick()}
              style={{
                borderRadius: 25,
                backgroundColor: "#e87461",
                color: "#FFFF",
                width: "140%",
                marginLeft: "10px",
                marginTop: "20px",
                padding: "10px 30px",
                fontSize: "15px",
              }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </Grid>

          <Grid item xs={12}>
            <div
              style={{
                marginLeft: "40px",

                color: "#FFFF",
              }}
              className="createprofile"
            >
              {" "}
              <Link
                style={{
                  marginLeft: "40px",
                  color: "#FFFF",
                }}
                to={"./signUp"}
              >
                {" "}
                Create a profile{" "}
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
