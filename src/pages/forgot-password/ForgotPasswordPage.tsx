import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function ForgotPasswordPage() {
  const handleForgotPassword = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Forgot password attempt");
    // TODO: Add forgot password logic
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Forgot Password
      </Typography>
      <form onSubmit={handleForgotPassword}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Reset Password
        </Button>
      </form>
    </Box>
  );
}