import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./authSlice";
import { Button, TextField, Container, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../app/store";

const LoginContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      dispatch(login(email));
      navigate("/");
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <LoginContainer maxWidth="sm">
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      <Link component="button" variant="body2" onClick={handleRegisterRedirect}>
        No account? Register here
      </Link>
    </LoginContainer>
  );
};

export default Login;
