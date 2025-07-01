import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Divider,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { mockMenteeDashboard } from '../../mocks/mockMenteeDashboardData';
import DashboardLayout from '../../components/DashboardLayout';

export default function MenteeDashboard() {
  const navigate = useNavigate();
  const {
    menteeName,
    creditsAvailable,
    creditsUsedThisMonth,
    suggestedMentors,
    recentArticles,
  } = mockMenteeDashboard;

  return (
    <DashboardLayout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Welcome to Your Dashboard
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Connect with mentors and enhance your skills.
          </Typography>
        </Box>

        {/* Credit Balance */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h6" gutterBottom>
            Credit Balance
          </Typography>
          <Typography variant="h3" color="primary">
            {creditsAvailable}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Credits Used This Month: {creditsUsedThisMonth}
          </Typography>
          <Button variant="contained" onClick={() => navigate('/buy-credits')}>
            Buy More
          </Button>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Available Mentors */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h6" gutterBottom>
            Available Mentors
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Browse our mentors and book a session.
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {suggestedMentors.map((mentor) => (
              <Grid size={{ xs: 12, md: 3, sm: 6 }} key={mentor.id}>
                <Card elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                      src={mentor.avatar}
                      alt={mentor.name}
                      sx={{ width: 56, height: 56, mx: 'auto', mb: 1 }}
                    />
                    <Typography fontWeight={600}>{mentor.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {mentor.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      mb={1}
                    >
                      {mentor.credits} credits / session
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => navigate(`/bookings/${mentor.id}`)}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Search Mentors */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h6" gutterBottom>
            Search Mentors
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <TextField
              placeholder="e.g., Career Advice, Resume Review"
              size="small"
            />
            <Button variant="contained">Search</Button>
          </Stack>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Mentor Insights */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h6" gutterBottom>
            Mentor Insights
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            Read articles from experienced mentors.
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {recentArticles.map((article) => (
              <Grid size={{ xs: 12, md: 4, sm: 6 }} key={article.id}>
                <Card elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
                  <CardContent>
                    <Typography fontWeight={600} gutterBottom>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {article.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      display="block"
                      mt={1}
                    >
                      By {article.author}
                    </Typography>
                    <Button
                      variant="text"
                      size="small"
                      sx={{ mt: 1 }}
                      onClick={() => navigate(`/articles/${article.id}`)}
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 5 }} />

        {/* Footer Links */}
        <Box textAlign="center" py={3}>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            flexWrap="wrap"
          >
            <Button variant="text">Terms of Service</Button>
            <Button variant="text">Privacy Policy</Button>
            <Button variant="text">Contact Us</Button>
            <Button variant="text">Feedback</Button>
          </Stack>
        </Box>
      </Container>
    </DashboardLayout>
  );
}
