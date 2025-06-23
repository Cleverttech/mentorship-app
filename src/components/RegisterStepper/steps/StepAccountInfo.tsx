import React from "react";
import { TextField, Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

const StepAccountInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <TextField
        label="Full Name"
        {...register("fullName")}
        error={!!errors.fullName}
        helperText={errors.fullName?.message as string}
        fullWidth
      />

      <TextField
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message as string}
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message as string}
        fullWidth
      />
    </Box>
  );
};

export default StepAccountInfo;
