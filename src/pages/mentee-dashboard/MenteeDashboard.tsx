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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mockMenteeDashboard } from "../../mocks/mockMenteeDashboardData";
import DashboardLayout from "../../components/DashboardLayout";
import { useState } from "react";
import { mockMentors } from "../../mocks/mockMentors";

export default function MenteeDashboard() {
	const navigate = useNavigate();
	const {
		menteeName,
		creditsAvailable,
		creditsUsedThisMonth,
		suggestedMentors,
		recentArticles,
	} = mockMenteeDashboard;

	const [searchTerm, setSearchTerm] = useState("");

	const filteredMentors = mockMentors.filter((mentor) => {
		const lowerSearch = searchTerm.toLowerCase();
		return (
			mentor.name.toLowerCase().includes(lowerSearch) ||
			mentor.title.toLowerCase().includes(lowerSearch) ||
			mentor.skills.some((skill) => skill.toLowerCase().includes(lowerSearch))
		);
	});

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
					<Button variant="contained" onClick={() => navigate("/buy-credits")}>
						Buy More
					</Button>
				</Box>

				<Divider sx={{ my: 5 }} />

				{/* Available Mentors */}
				<Box mb={5}>
					<Typography variant="h5" fontWeight={700} align="center" gutterBottom>
						Meet Our Mentors
					</Typography>
					<Stack
						direction={{ xs: "column", sm: "row" }}
						spacing={2}
						mb={3}
						justifyContent="center"
						alignItems="center"
					>
						<TextField
							placeholder="Search mentors by name, title, or skill"
							variant="outlined"
							size="small"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							sx={{ width: { xs: "100%", sm: "300px" } }}
						/>
						<Button variant="outlined" onClick={() => navigate("/mentors")}>
							View All Mentors
						</Button>
					</Stack>
					<Box textAlign="center">
						<Grid container spacing={2} justifyContent="center">
							{filteredMentors.slice(0, 3).map((mentor) => (
								<Grid size={{ xs: 12, sm: 6, md: 4 }} key={mentor.id}>
									<Card elevation={2} sx={{ borderRadius: 2 }}>
										<CardContent sx={{ textAlign: "center" }}>
											<Avatar
												src={mentor.avatar}
												alt={mentor.name}
												sx={{ width: 64, height: 64, mx: "auto", mb: 1 }}
											/>
											<Typography fontWeight={600}>{mentor.name}</Typography>
											<Typography
												variant="body2"
												color="text.secondary"
												gutterBottom
											>
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
								<Card
									onClick={() => navigate(`/articles/${article.id}`)}
									sx={{ cursor: "pointer" }}
								>
									<CardContent>
										<Typography fontWeight={600} gutterBottom>
											{article.title}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											By {article.author}
										</Typography>
										<Typography variant="caption" color="text.secondary">
											📅 {article.date}
										</Typography>
										<Stack mt={2}>
											<Button variant="text" size="small">
												Read Article
											</Button>
										</Stack>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</DashboardLayout>
	);
}
