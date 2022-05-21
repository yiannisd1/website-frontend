import "./SignUpStyles.css";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import agent from "../../proxy/userService";
export default function SignUpComponent() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telePhone, setPhNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  // function to update state of user details with
  // value enter by user in form
  const handleFirstNChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNChange = (e) => {
    setLastName(e.target.value);
  };
  const handlePhNumberChange = (e) => {
    setPhNumber(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      console.log("password does not Match");
    } else {
      console.log(
        'A form was submitted with Name :"' +
          username +
          '" and Email :"' +
          email +
          '"' +
          telePhone
      );
    }
    e.preventDefault();
  };
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
  const [toggle, setToggle] = useState(true);
  async function onClick() {
    const object = {
      username: username,
      firstname: firstname,
      lastname: lastName,
      email: email,
      password: password,
      telephone: telePhone,
    };

    await agent.UserAPI.create(object).then(() => {
      setToggle(false);
    });
  }
  return (
    <div className="Signup" >
    {  toggle ?
      <div className="Signup">
          <h2 className="Signuph2">RedBack Sign Up</h2>
        <div >
          <input className="Signup-input"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <input className="Signup-input"
            value={firstname}
            placeholder="firstname"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div>
          <input className="Signup-input"
            value={lastName}
            placeholder="lastname"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div>
          <input className="Signup-input"
            value={telePhone}
            placeholder="telephone"
            onChange={(e) => setPhNumber(e.target.value)}
          ></input>
        </div>
        <div>
          <input className="Signup-input"
            value={email}
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <input className="Signup-input"
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
    
        <button
            style={{
            borderRadius: 25,
            backgroundColor: "#e87461",
            color: "#FFFF",
            width: "20%",
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "15px"
            }}
         onClick={() => onClick()}
        >
          Submit
        </button>
      </div>
      :<h1>User sucessfully created</h1>}
    </div>
  );
}
