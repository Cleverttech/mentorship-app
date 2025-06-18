import {
    Box,
    Button,
    TextField,
    Link as MuiLink,
    Stack,
  } from "@mui/material";
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { loginSchema } from "../utils/validation";
  import { LoginFormData } from "../types/auth";
  import { Link } from "react-router-dom";
  
  export default function LoginForm() {
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
      resolver: zodResolver(loginSchema),
    });
  
    const onSubmit = async (data: LoginFormData) => {
      console.log("Login attempt", data);
      // TODO: connect to API
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box mb={2}>
          <TextField
            label="Email"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isSubmitting}
          sx={{ mb: 2 }}
        >
          Login
        </Button>
  
        <Stack direction="column" spacing={1} alignItems="center">
          <MuiLink component={Link} to="/forgot-password" underline="hover">
            Forgot your password?
          </MuiLink>
          <MuiLink component={Link} to="/register" underline="hover">
            Don't have an account? Register
          </MuiLink>
        </Stack>
      </form>
    );
  }
  