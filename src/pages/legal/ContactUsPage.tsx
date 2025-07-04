import { Container, Typography } from "@mui/material";
import DashboardLayout from "../../components/DashboardLayout";

export default function ContactUsPage() {
	return (
		<DashboardLayout>
			<Container maxWidth="md" sx={{ py: 4 }}>
				<Typography variant="h4" gutterBottom>
					Contact Us
				</Typography>
				<Typography variant="body1">
					This is the Contact Us page. Content coming soon.
				</Typography>
			</Container>
		</DashboardLayout>
	);
}
