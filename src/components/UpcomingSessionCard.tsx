import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface Session {
  title: string;
  date: string;
}

const UpcomingSessionCard = ({ session }: { session: Session }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
      <Box textAlign="center">
        <Typography variant="h6" fontWeight={700}>
          {session.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: {session.date}
        </Typography>
      </Box>
    </Paper>
  );
};

export default UpcomingSessionCard;
