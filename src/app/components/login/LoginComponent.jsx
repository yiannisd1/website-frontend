import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./LoginStyles.css";
import { styled } from "@mui/material/styles";
import agent from "../../proxy/userService";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Context from "../../stores/context"

import "./LoginStyles.css";

export default function LoginComponent(props) {
  const { globalState, globalDispatch } = useContext(Context);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });

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
      <div style={{ padding: 30, color: "white" }}>
        <Grid
          container
          spacing={1}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <h1>RedBack Login</h1>
          <input className="Login-input"
            value={email}
            placeholder="username"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input className="Login-input"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button component={NavLink} to="/" onClick={() => handleClick()}
           style={{
             marginTop : 5,
            borderRadius: 25,
            width: "20%",
            backgroundColor: "#e87461",
            color: "#FFFF",
            padding: "10px 20px",
            fontSize: "15px"
          }} >
            Submit
          </button>
          <div className="createprofile">
            {" "}
            <Link
              style={{
                color: "#FFFF",
              }}
              to={"./signUp"}
            >
              {" "}
              Create a profile{" "}
            </Link>
          </div>
          {/* <Form >
     
      <Grid style={{ padding: 20 }} item xs={12} > */}
          {
          /* <Form.Group size="lg" controlId="email">
          <CssTextField label="Email"
            type="email"
            sx={{ "& label": { color: "white" } }}
            inputProps={{
              style: { color: "white" },
            }}
            variant="outlined" 
            style={{"borderColor":"#62656A"}}
            value={email}
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
            >
          </CssTextField>
        </Form.Group>
        </Grid>

        <Grid style={{ padding: 20 }} item xs={12}>
        <Form.Group size="lg" controlId="password">
          <CssTextField 
            label="Password"
            sx={{ "& label": { color: "white" }}}
            inputProps={{
              style: { color: "white" },
            }}
            style={{"borderColor":"#62656A"}}
            variant="outlined" 
            type="password"
            value={password}
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
          ></CssTextField>
        </Form.Group>
        </Grid>
        <Grid style={{ padding: 20 }} item xs={12}>
        <Button 
            style={{
              borderRadius: 25,
              backgroundColor: "#e87461",
              color: "#FFFF",
              padding: "10px 20px",
              fontSize: "15px"
             
            }} 
           
          fullWidth type="submit">
          Login
        </Button>
        <div className="createprofile"> <Link style={{
              color: "#FFFF",
            }} 
            to={"./signUp"}>  Create a profile </Link>
        </div>

        <div>

      
        </div>
       </Grid>
      </Form> */}
        </Grid>
      </div>
    </div>
  );
}
