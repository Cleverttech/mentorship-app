import {
	Box,
	Container,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
	Divider,
	Paper,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import { mockArticles } from "../../mocks/mockArticleData";
import { useEffect } from "react";

export default function ArticlesPage() {
	const { id } = useParams();
	const navigate = useNavigate();

	// Sort articles by timestamp descending (latest first)
	const sortedArticles = [...mockArticles].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	useEffect(() => {
		if (!id && sortedArticles.length > 0) {
			navigate(`/articles/${sortedArticles[0].id}`, { replace: true });
		}
	}, [id, navigate, sortedArticles]);

	const selectedArticle = id
		? sortedArticles.find((a) => a.id === id)
		: sortedArticles[0];

	const otherArticles = sortedArticles.filter(
		(a) => a.id !== selectedArticle?.id,
	);

	if (!selectedArticle) {
		return (
			<DashboardLayout>
				<Container maxWidth="lg" sx={{ py: 4 }}>
					<Typography>No article found.</Typography>
				</Container>
			</DashboardLayout>
		);
	}

	return (
		<DashboardLayout>
			<Container maxWidth="lg" sx={{ py: 4 }}>
				<Grid container spacing={4}>
					{/* Main Article Content */}
					<Grid size={{ xs: 12, md: 8 }}>
						<Paper elevation={1}>
							<Box p={3}>
								<Typography variant="h4" fontWeight={700} gutterBottom>
									{selectedArticle?.title}
								</Typography>
								<Typography
									variant="subtitle2"
									color="text.secondary"
									gutterBottom
								>
									{selectedArticle?.date} | By {selectedArticle?.author}
								</Typography>
								<Divider sx={{ my: 2 }} />
								<Typography variant="body1">
									{selectedArticle?.content}
								</Typography>
							</Box>
						</Paper>
					</Grid>

					{/* Other Articles List as links */}
					<Grid size={{ xs: 12, md: 4 }}>
						<Box p={2}>
							<Typography variant="h6" gutterBottom>
								Other Articles
							</Typography>
							<List>
								{otherArticles.map((article) => {
									const isActive = article.id === id;

									return (
										<ListItem key={article.id} disablePadding>
											<ListItemButton
												onClick={() => navigate(`/articles/${article.id}`)}
												sx={{
													color: isActive ? "primary.main" : "inherit",
													"&:hover": {
														color: "primary.main",
													},
												}}
											>
												<ListItemText
													primary={article.title}
													secondary={article.date}
												/>
											</ListItemButton>
										</ListItem>
									);
								})}
							</List>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</DashboardLayout>
	);
}
