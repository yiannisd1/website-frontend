import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import "./LoginStyles.css";

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
			<div style={{ padding: 30, color: "white" }}>
				<Grid
					container
					spacing={1}
					direction={"column"}
					justify={"center"}
					alignItems={"center"}
				>
					<h1>RedBack Login</h1>
					<Form onSubmit={handleSubmit}>
						<Grid style={{ padding: 20 }} item xs={12}>
							<Form.Group size="lg" controlId="email">
								<TextField
									label="Email"
									type="email"
									variant="standard"
									sx={{ input: { color: "white" } }}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								></TextField>
							</Form.Group>
						</Grid>

						<Grid style={{ padding: 20 }} item xs={12}>
							<Form.Group size="lg" controlId="password">
								<TextField
									label="Password"
									autofocus
									variant="standard"
									sx={{ input: { color: "white" } }}
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
									backgroundColor: "#e87461",
									color: "#FFFF",
									padding: "10px 20px",
									fontSize: "15px",
								}}
								fullWidth
								type="submit"
								disabled={!validateForm()}
							>
								Login
							</Button>
						</Grid>
					</Form>
				</Grid>
			</div>
		</div>
	);
}
