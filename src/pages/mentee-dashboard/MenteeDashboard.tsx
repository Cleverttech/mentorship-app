import {
  Box,
  Typography,
  Container,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import UpcomingSessionCard from "../../components/UpcomingSessionCard";
import ArticleCard from "../../components/ArticleCard";
import MentorCard from "../../components/MentorCard";
import { mockMenteeDashboard } from "../../mocks/mockMenteeDashboardData";
import { useNavigate } from "react-router-dom";

export default function MenteeDashboard() {
    const navigate = useNavigate();
  
  const {
    menteeName,
    creditsAvailable,
    upcomingSessions,
    suggestedMentors,
    recentArticles,
  } = mockMenteeDashboard;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Welcome Header */}
      <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
        Welcome to Your Dashboard, {menteeName}! 👋
      </Typography>
      <Button variant="contained" onClick={() => navigate("/buy-credits")}>
        Buy Credits
      </Button>
      {/* Credit Summary */}
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        sx={{ my: 4 }}
      >
        <Box textAlign="center">
          <Typography variant="h6">💳 Credits Available</Typography>
          <Typography variant="h4" color="primary">
            {creditsAvailable}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Each session costs 3–7 credits
          </Typography>
        </Box>

        <Box textAlign="center">
          <Typography variant="h6">📅 This Month's Usage</Typography>
          <Typography variant="h4" color="secondary">
            10
          </Typography>
          <Typography variant="body2" color="text.secondary">
            +5 from referrals
          </Typography>
        </Box>
      </Box>

      {/* Mentor Search */}
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>🔍 Search by Skill</Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          e.g., Career Advice, Resume Review
        </Typography>
        <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
          <TextField placeholder="Search mentors..." size="small" />
          <Button variant="contained">Search</Button>
        </Box>
      </Box>

      <Divider sx={{ my: 5 }} />

      {/* Available Mentors */}
      <Box>
        <Typography variant="h6" align="center" gutterBottom>
          👨‍🏫 Available Mentors
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" mb={3}>
          Browse our mentors and book a session.
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
          gap={2}
        >
          {suggestedMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 5 }} />

      {/* Bookings */}
      <Box>
        <Typography variant="h6" align="center" gutterBottom>
          📅 My Bookings
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" mb={3}>
          See your upcoming mentorship sessions
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
          gap={2}
        >
          {upcomingSessions.map((session) => (
            <UpcomingSessionCard key={session.id} session={session} />
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 5 }} />

      {/* Mentor Insights */}
      <Box>
        <Typography variant="h6" align="center" gutterBottom>
          📖 Mentor Insights
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" mb={3}>
          Read articles from experienced mentors.
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
          gap={2}
        >
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
