import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const creditOptions = [10, 20, 50];
const EURO_TO_USD = 0.5;

const BuyCreditsList = () => {
  const { setValue, watch } = useFormContext();
  const selectedCredits = watch('credits');

  const handleSelect = (amount: number) => {
    setValue('credits', amount, { shouldValidate: true });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select a credit package
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="flex-start"
        alignItems="stretch"
        mt={2}
      >
        {creditOptions.map((amount) => {
          const isSelected = selectedCredits === amount;

          return (
            <Box
              key={amount}
              width={{ xs: '45%', sm: '22%' }}
              onClick={() => handleSelect(amount)}
              sx={{
                cursor: 'pointer',
              }}
            >
              <Paper
                elevation={isSelected ? 6 : 1}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  borderRadius: 2,
                  backgroundColor: isSelected ? 'primary.main' : 'grey.100',
                  color: isSelected ? 'white' : 'text.primary',
                  transition: '0.3s',
                  '&:hover': {
                    backgroundColor: isSelected ? 'primary.dark' : 'grey.300',
                  },
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {amount} Credits
                </Typography>
                <Typography variant="body2">
                  ${(amount * EURO_TO_USD).toFixed(2)} USD
                </Typography>
              </Paper>
            </Box>
          );
        })}
      </Box>

      {selectedCredits && (
        <Box mt={3}>
          <Typography variant="body1">
            Selected: <strong>{selectedCredits} credits</strong> ={' '}
            <strong>${(selectedCredits * EURO_TO_USD).toFixed(2)} USD</strong>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default BuyCreditsList;
