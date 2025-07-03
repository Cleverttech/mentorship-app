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
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { mockMentors } from "../../mocks/mockMentors";

export default function MentorsPage() {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");
	const [creditFilter, setCreditFilter] = useState("");

	const filteredMentors = mockMentors.filter((mentor) => {
		const lowerSearch = searchTerm.toLowerCase();
		const matchesSearch =
			mentor.name.toLowerCase().includes(lowerSearch) ||
			mentor.title.toLowerCase().includes(lowerSearch) ||
			mentor.skills.some((skill) => skill.toLowerCase().includes(lowerSearch));

		const matchesCredit =
			creditFilter === "" || mentor.credits === Number(creditFilter);

		return matchesSearch && matchesCredit;
	});

	const uniqueCredits = Array.from(
		new Set(mockMentors.map((mentor) => mentor.credits)),
	).sort((a, b) => a - b);

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
							placeholder="Search mentors by name, title, or skill"
							variant="outlined"
							size="small"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							sx={{ width: { xs: "100%", sm: "300px" } }}
						/>

						<FormControl size="small" sx={{ minWidth: 120 }}>
							<InputLabel>Credits</InputLabel>
							<Select
								value={creditFilter}
								label="Credits"
								onChange={(e) => setCreditFilter(e.target.value)}
							>
								<MenuItem value="">All</MenuItem>
								{uniqueCredits.map((credit) => (
									<MenuItem key={credit} value={credit}>
										{credit} credits
									</MenuItem>
								))}
							</Select>
						</FormControl>
						{(searchTerm || creditFilter) && (
							<Button
								variant="outlined"
								onClick={() => {
									setSearchTerm("");
									setCreditFilter("");
								}}
							>
								Clear Filters
							</Button>
						)}
					</Stack>
				</Box>

				<Divider sx={{ mb: 5 }} />

				{/* Mentors Grid */}
				<Grid container spacing={3}>
					{filteredMentors.map((mentor) => (
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
									<Stack
										direction="row"
										spacing={1}
										justifyContent="center"
										flexWrap="wrap"
										mb={1}
									>
										{mentor.skills.map((skill) => (
											<Typography
												key={skill}
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

				{filteredMentors.length === 0 && (
					<Typography
						variant="body1"
						color="text.secondary"
						mt={4}
						textAlign="center"
					>
						No mentors found matching your search.
					</Typography>
				)}
			</Container>
		</DashboardLayout>
	);
}
