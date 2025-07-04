import { Box, Button, Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SideNav from "../components/SideNav";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Box sx={{ display: "flex", minHeight: "100vh" }}>
			<SideNav />

			<Box
				component="main"
				sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
			>
				<Box sx={{ flexGrow: 1, p: 2 }}>{children}</Box>
				<Divider sx={{ my: 5 }} />
				{/* Footer */}
				<Box component="footer" sx={{ py: 3 }}>
					<Stack
						direction="row"
						spacing={3}
						justifyContent="center"
						flexWrap="wrap"
					>
						<Button component={Link} to="/terms-of-service" variant="text">
							Terms of Service
						</Button>
						<Button component={Link} to="/privacy-policy" variant="text">
							Privacy Policy
						</Button>
						<Button component={Link} to="/contact-us" variant="text">
							Contact Us
						</Button>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}
