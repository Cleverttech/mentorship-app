import { useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../context/AuthContext";
import { LoginFormData } from "../../types/auth";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (data: LoginFormData) => {
    const role = data.email.includes("mentor") ? "mentor" : "mentee";
    login(role);
    navigate(`/${role}/dashboard`);
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="grey.100"
      p={2}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ borderRadius: 4, p: { xs: 3, sm: 5 } }}>
          <Typography variant="h4" fontWeight={600} mb={3}>
            Login to Your Account
          </Typography>

          <LoginForm onSubmitOverride={handleLogin} />
        </Paper>
      </Container>
    </Box>
  );
}
