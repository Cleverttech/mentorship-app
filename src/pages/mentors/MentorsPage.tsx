import {
	Box,
	Button,
	Container,
	Grid,
	Stack,
	TextField,
	Typography,
	Card,
	CardContent,
	Avatar,
	Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mockMenteeDashboard } from "../../mocks/mockMenteeDashboardData";
import DashboardLayout from "../../components/DashboardLayout";

export default function MentorsPage() {
	const navigate = useNavigate();

	// Using existing suggestedMentors mock for now
	const { suggestedMentors } = mockMenteeDashboard;

	return (
		<DashboardLayout>
			<Container maxWidth="lg" sx={{ py: 4 }}>
				{/* Page Header */}
				<Box textAlign="center" mb={4}>
					<Typography variant="h4" fontWeight={700} gutterBottom>
						Browse Mentors
					</Typography>
					<Typography variant="subtitle1" color="text.secondary">
						Find the right mentor to support your goals.
					</Typography>
				</Box>

				{/* Search and Filters */}
				<Box mb={5}>
					<Stack
						direction={{ xs: "column", sm: "row" }}
						spacing={2}
						justifyContent="center"
					>
						<TextField
							placeholder="Search mentors by name or expertise"
							variant="outlined"
							size="small"
							sx={{ width: { xs: "100%", sm: "300px" } }}
						/>
						<Button variant="contained">Search</Button>
					</Stack>
				</Box>

				<Divider sx={{ mb: 5 }} />

				{/* Mentors Grid */}
				<Grid container spacing={3}>
					{suggestedMentors.map((mentor) => (
						<Grid size={{ xs: 12, sm: 6, md: 4 }} key={mentor.id}>
							<Card elevation={2} sx={{ borderRadius: 2 }}>
								<CardContent sx={{ textAlign: "center" }}>
									<Avatar
										src={
											mentor.avatar ||
											"https://randomuser.me/api/portraits/men/1.jpg"
										}
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
									<Stack
										direction="row"
										spacing={1}
										justifyContent="center"
										flexWrap="wrap"
										mb={1}
									>
										{mentor.expertise.map((skill) => (
											<Typography
												key={mentor.id}
												variant="caption"
												sx={{
													backgroundColor: "#f5f5f5",
													px: 1,
													borderRadius: 1,
												}}
											>
												{skill}
											</Typography>
										))}
									</Stack>
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
			</Container>
		</DashboardLayout>
	);
}
