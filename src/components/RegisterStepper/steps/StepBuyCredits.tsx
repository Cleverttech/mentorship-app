import React from 'react';
import { TextField, Box } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import BuyCreditsList from './BuycreditsList';

const StepBuyCredits = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const role = watch('role');

  if (role !== 'mentee') {
    return (
      <Box>
        <em>No credits needed for mentors. 🎉</em>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <TextField
        label="Number of Credits"
        type="number"
        {...register('credits', { valueAsNumber: true })}
        error={!!errors.credits}
        helperText={errors.credits?.message as string}
        fullWidth
      />
      {role === 'mentee' && (
        <Box display="flex" flexDirection="column" gap={2}>
          <BuyCreditsList />
        </Box>
      )}
    </Box>
  );
};

export default StepBuyCredits;
