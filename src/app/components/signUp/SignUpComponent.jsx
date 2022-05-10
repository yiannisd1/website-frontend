
import "./SignUpStyles.css"
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function SignUpComponent() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [PhNumber, setPhNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  // function to update state of user details with
  // value enter by user in form
  const handleFirstNChange = (e) => {
    setFirstName(e.target.value);
  }
  const handleLastNChange = (e) => {
    setLastName(e.target.value);
  }
  const handlePhNumberChange = (e) => {
    setPhNumber(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      console.log("password does not Match");
    } else {
      console.log('A form was submitted with Name :"' + FirstName +
      '" and Email :"' + email + '"' + PhNumber);
    }
    e.preventDefault();
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h2> RedBack SignUp Form</h2>
          <div className="signUpInputs">
            <TextField 
            id="firstName" 
            label="First Name" 
            variant="outlined"
            required
            fullWidth
            onChange={(e)=> { handleFirstNChange(e) }} />
          </div>
          <div className="signUpInputs">
            <TextField 
            id="lastName" 
            label="Last Name" 
            variant="outlined"
            required
            fullWidth
            onChange={(e)=> { handleLastNChange(e) }}/>
          </div>
          <div className="signUpInputs">
            <TextField 
            id="PhNumber" 
            label="Phone Number" 
            variant="outlined"
            required
            fullWidth
            onChange={(e)=> { handlePhNumberChange(e) }} />
          </div>
          <div className="signUpInputs">
            <TextField 
            id="email" 
            label="Email" 
            variant="outlined"
            type="email"
            helperText="e.g. name@icloud.com"
            required
            fullWidth
            onChange={(e) => { handleEmailChange(e) }} />
          </div>
          <div className="signUpInputs">
            <TextField
            id="password"
            label="Password"
            type="password"
            required
            fullWidth
            onChange={(e) => { handlePasswordChange(e) }} />
          </div>
          <div className="signUpInputs">
            <TextField
            id="confPassword"
            label="Confirm Password"
            type="password"
            required
            fullWidth
            autoComplete="current-password"
            onChange={(e) => { handleConfPasswordChange(e) }} />
          </div>
          <div className="signUpInputs">
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default SignUpComponent;

