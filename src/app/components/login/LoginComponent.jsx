import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import {
  Grid,
  TextField,
  Button
} from '@material-ui/core';

import "./LoginStyles.css"

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
}

  function handleSubmit(event) {
    event.preventDefault();
}

return (
  <div className="LoginComponent">
    <div style={{ padding: 20 }}>
    <Grid
      container
      spacing={1}
      direction={'column'}
      justify={'center'}
      alignItems={'center'}
      >
      <h1>RedBack Login</h1>
      <Form onSubmit={handleSubmit}>

      <Grid style={{ padding: 20 }} item xs={12}>
        <Form.Group size="lg" controlId="email">
          <TextField label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            >
          </TextField>
        </Form.Group>
        </Grid>

        <Grid style={{ padding: 20 }} item xs={12}>
        <Form.Group size="lg" controlId="password">
          <TextField label="Password"
            autofocus
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </Form.Group>
        </Grid>
        <Grid style={{ padding: 20 }} item xs={12}>
        <Button 
        style={{
          borderRadius: 25,
          backgroundColor: "#380e4a",
          color: "#FFFF",
          padding: "10px 20px",
          fontSize: "15px"
        }} 
          fullWidth type="submit" disabled={!validateForm()}>
          Login
        </Button>
       </Grid>
      </Form>
    </Grid>
    </div>
  </div>
);
}
