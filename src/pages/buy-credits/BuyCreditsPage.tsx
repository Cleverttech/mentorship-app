// TODO: backend integration ensures pricing security and database updates post-purchase.
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import DashboardLayout from "../../components/DashboardLayout";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string,
);

console.log("Stripe Key:", process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const creditPackages = [
	{ id: "1", credits: 5, price: "10", priceId: "price_1XXXXXXX" },
	{ id: "2", credits: 10, price: "18", priceId: "price_1YYYYYYY" },
	{ id: "3", credits: 20, price: "35", priceId: "price_1ZZZZZZZ" },
];

export default function BuyCreditsPage() {
	const handlePurchase = async (priceId: string) => {
		const stripe = await stripePromise;

		if (!stripe) {
			console.error("Stripe failed to load");
			return;
		}

		const { error } = await stripe.redirectToCheckout({
			lineItems: [{ price: priceId, quantity: 1 }],
			mode: "payment",
			successUrl: window.location.origin + "/buy-credits-success",
			cancelUrl: window.location.origin + "/buy-credits-cancel",
		});

		if (error) {
			console.error(error);
			alert(error.message);
		}
	};

	return (
		<DashboardLayout>
			<Container maxWidth="md" sx={{ py: 4 }}>
				<Box textAlign="center" mb={4}>
					<Typography variant="h4" fontWeight={700} gutterBottom>
						Buy Credits
					</Typography>
					<Typography variant="subtitle1" color="text.secondary">
						Select a credit package to continue learning with your mentors.
					</Typography>
				</Box>

				<Grid container spacing={3} justifyContent="center">
					{creditPackages.map((pkg) => (
						<Grid size={{ xs: 12, sm: 6, md: 4 }} key={pkg.id}>
							<Card elevation={3} sx={{ borderRadius: 2 }}>
								<CardContent sx={{ textAlign: "center" }}>
									<Typography variant="h6" fontWeight={700}>
										{pkg.credits} Credits
									</Typography>
									<Typography variant="h4" color="primary" my={2}>
										€{pkg.price}
									</Typography>
									<Button
										variant="contained"
										fullWidth
										href="https://buy.stripe.com/test_3cI9AS0Ux4KB0xO5z5eAg00"
										target="_blank"
										rel="noopener noreferrer"
									>
										Buy Now
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
