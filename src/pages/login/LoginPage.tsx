import { useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { mockAuthService } from "../../services/mockAuthService";
import { LoginFormData } from "../../types/auth";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (data: LoginFormData) => {
    try {
      const user = mockAuthService.login(data.email, data.password);
      login(user.role);
      navigate(`/${user.role}/dashboard`);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <AuthLayout title="Mentorship Plattform – Login">
      <LoginForm onSubmitOverride={handleLogin} />
    </AuthLayout>
  );
}

export default LoginPage;
