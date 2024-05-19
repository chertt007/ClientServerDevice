import React, { useState } from "react";
import { Button, TextField, Container } from "@mui/material";
import styled from "styled-components";

const RegisterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [deviceNumber, setDeviceNumber] = useState("");

  const handleRegister = () => {
    console.log(email, password, deviceNumber);
    // Implement registration logic
  };

  return (
    <RegisterContainer maxWidth="sm">
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
      <TextField
        label="Device Number"
        variant="outlined"
        margin="normal"
        fullWidth
        value={deviceNumber}
        onChange={(e) => setDeviceNumber(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Register
      </Button>
    </RegisterContainer>
  );
};

export default Register;
