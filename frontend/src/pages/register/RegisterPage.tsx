import React from "react";
import { Box, Button, TextField, Stack, Typography } from "@mui/material";

export default function RegisterPage() {
  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Register attempt");
    // TODO: Add registration logic
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleRegister}>
        <Stack spacing={2}>
          <TextField label="Name" fullWidth required />
          <TextField label="Email" type="email" fullWidth required />
          <TextField label="Password" type="password" fullWidth required />
          <Button type="submit" variant="contained" fullWidth>
            Register
          </Button>
        </Stack>
      </form>
    </Box>
  );
}