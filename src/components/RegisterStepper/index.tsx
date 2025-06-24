import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useRegisterForm from "./useRegisterForm";
import StepAccountInfo from "./steps/StepAccountInfo";
import StepBuyCredits from "./steps/StepBuyCredits";
import StepProfileSetup from "./steps/StepProfileSetup";
import StepRoleSelection from "./steps/StepRoleSelection";

const steps = ["Account Info", "Select Role", "Profile Setup", "Buy Credits"];

const RegisterStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const methods = useRegisterForm();
  const navigate = useNavigate();

  const stepFieldMap: Record<number, ("fullName" | "email" | "password" | "role" | "bio" | "skills" | "profileImage" | "credits" | `skills.${number}` | `profileImage.${string}`)[]> = {
    0: ["fullName", "email", "password"],
    1: ["role"],
    2: [], // optional step
    3: ["credits"],
  };
  
  const onNext = async () => {
    const fields = stepFieldMap[activeStep];
    const isValid = await methods.trigger(fields);
    if (isValid) {
      setActiveStep((prev) => prev + 1);
    }
  };
  
  const onBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Submitted data:", data);

    localStorage.setItem("profileData", JSON.stringify(data));

    // Show success message
    setShowSnackbar(true);

    // Redirect after delay
    setTimeout(() => {
      navigate("/profile");
    }, 1500);
  });

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <StepAccountInfo />;
      case 1:
        return <StepRoleSelection />;
      case 2:
        return <StepProfileSetup />;
      case 3:
        return <StepBuyCredits />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box mt={4}>{renderStep()}</Box>

        <Box mt={4} display="flex" justifyContent="space-between">
          <Button disabled={activeStep === 0} onClick={onBack}>
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" onClick={onSubmit}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" onClick={onNext}>
              Next
            </Button>
          )}
        </Box>

        <Snackbar
          open={showSnackbar}
          autoHideDuration={2000}
          onClose={() => setShowSnackbar(false)}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Registration Successful!
          </Alert>
        </Snackbar>
      </Box>
    </FormProvider>
  );
};

export default RegisterStepper;
