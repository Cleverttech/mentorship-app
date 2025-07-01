import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Box,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';

const StepRoleSelection = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const role = watch('role');

  return (
    <Box>
      <FormControl component="fieldset" error={!!errors.role} fullWidth>
        <FormLabel component="legend">Choose your role</FormLabel>
        <RadioGroup row value={role} {...register('role')}>
          <FormControlLabel value="mentor" control={<Radio />} label="Mentor" />
          <FormControlLabel value="mentee" control={<Radio />} label="Mentee" />
        </RadioGroup>
        <FormHelperText>{errors.role?.message as string}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default StepRoleSelection;
