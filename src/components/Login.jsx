import React, { useState } from "react";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "demo@coralmango.com" && password === "demo123") {
      alert("Login successful!");
      navigate("nav");
    } else {
     alert("Invalid Credentials!")
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Card style={{ width: "300px", marginLeft: "40%", marginTop: "80px" }}>
          <CardContent align="center">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1>Login</h1>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="email"
                  fullWidth
                  label="Enter email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="password"
                  fullWidth
                  label="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="success" fullWidth type="submit">
                  Login
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </React.Fragment>
  );
};
