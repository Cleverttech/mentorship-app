import { Box, Button, Container, Typography, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: (theme) => theme.palette.grey[100], p: 2 }}
    >
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ borderRadius: 4, p: { xs: 3, sm: 6 } }}>
          <Stack spacing={4} alignItems="center">
            <Box textAlign="center">
              <Typography variant="h3" fontWeight={700} gutterBottom>
                Cleverttech Mentorship
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Learn directly from top industry experts. Book sessions. Get real guidance.
              </Typography>
            </Box>

            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => navigate('/register')}
              sx={{ borderRadius: 2, px: 5 }}
            >
              Get Started – Register Now
            </Button>

            {/* 👥 Already Have an Account */}
            <Typography variant="body1" color="text.secondary">
              Already have an account?{' '}
              <Button variant="text" onClick={() => navigate('/login')}>
                Log in here
              </Button>
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
