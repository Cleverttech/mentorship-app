import { Container, Typography, Box } from "@mui/material";
import DashboardLayout from "../../components/DashboardLayout";

export default function PrivacyPolicyPage() {
	return (
		<DashboardLayout>
			<Container maxWidth="md" sx={{ py: 4 }}>
				<Typography variant="h4" gutterBottom>
					Privacy Policy
				</Typography>

				<Box sx={{ my: 2 }}>
					<Typography variant="body1" paragraph>
						We respect your privacy and are committed to protecting your
						personal data. This Privacy Policy explains how we collect, use, and
						protect your information when you use the Mentorship App
						(“Platform”).
					</Typography>

					<Typography variant="h6">1. Controller</Typography>
					<Typography variant="body2" paragraph>
						At this stage, the Platform is operated as a{" "}
						<strong>
							development MVP project for learning and testing purposes only
						</strong>
						, with no commercial services currently offered.
						<br />
						<br />
						For any data inquiries, contact:
						<br />
						<strong>Email:</strong> legal@mentorshipapp.de
					</Typography>

					<Typography variant="h6">2. What data we collect</Typography>
					<Typography variant="body2" paragraph>
						We may collect:
						<br />- Name and email address (during registration)
						<br />- Profile information (e.g. skills, bio if you are a mentor)
						<br />- Messages sent via the Platform
						<br />- Booking data (e.g. session dates and credits booked)
						<br />
						<br />
						We do <strong>not</strong> collect payment card details directly.
						All payments are processed via Stripe.
					</Typography>

					<Typography variant="h6">3. How we use your data</Typography>
					<Typography variant="body2" paragraph>
						We process your data to:
						<br />- Provide you access to the Platform
						<br />- Connect mentees with mentors
						<br />- Facilitate session bookings and messaging
						<br />- Maintain security and proper functioning of the Platform
					</Typography>

					<Typography variant="h6">4. Legal basis (GDPR Art. 6)</Typography>
					<Typography variant="body2" paragraph>
						Data processing is based on:
						<br />- <strong>Consent (Art. 6 para. 1 lit. a GDPR)</strong> for
						optional data (e.g. profile details)
						<br />-{" "}
						<strong>Contract performance (Art. 6 para. 1 lit. b GDPR)</strong>{" "}
						for providing mentorship services
						<br />-{" "}
						<strong>Legitimate interest (Art. 6 para. 1 lit. f GDPR)</strong>{" "}
						for security, platform improvement, and analytics
					</Typography>

					<Typography variant="h6">5. Cookies & analytics</Typography>
					<Typography variant="body2" paragraph>
						Currently, this MVP does <strong>not</strong> use cookies or
						third-party analytics tools. This may change in production, in which
						case the Privacy Policy will be updated accordingly.
					</Typography>

					<Typography variant="h6">6. Data retention</Typography>
					<Typography variant="body2" paragraph>
						We store your data only as long as necessary for the purposes
						outlined above or as required by applicable law.
					</Typography>

					<Typography variant="h6">7. Data security</Typography>
					<Typography variant="body2" paragraph>
						We implement appropriate technical and organisational measures to
						protect your personal data against unauthorised access, loss, or
						misuse.
					</Typography>

					<Typography variant="h6">8. Your rights under GDPR</Typography>
					<Typography variant="body2" paragraph>
						You have the right to:
						<br />- Access your personal data
						<br />- Request correction of incorrect data
						<br />- Request deletion of your data (“Right to be forgotten”)
						<br />- Restrict or object to data processing
						<br />- Request data portability
						<br />
						<br />
						To exercise these rights, contact{" "}
						<strong>legal@mentorshipapp.de</strong>.
					</Typography>

					<Typography variant="h6">9. Third-party services</Typography>
					<Typography variant="body2" paragraph>
						For payment processing, we use <strong>Stripe</strong>. Your payment
						data is handled securely according to their privacy policy:
						<br />
						<a
							href="https://stripe.com/privacy"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://stripe.com/privacy
						</a>
					</Typography>

					<Typography variant="h6">
						10. Changes to this Privacy Policy
					</Typography>
					<Typography variant="body2" paragraph>
						We may update this Privacy Policy from time to time. Changes will be
						posted on this page with updated effective dates.
					</Typography>

					<Typography variant="h6">11. Contact</Typography>
					<Typography variant="body2" paragraph>
						If you have any questions about this Privacy Policy or your personal
						data, please contact:
						<br />
						<br />
						<strong>Mentorship App Team</strong>
						<br />
						This project is currently in development.
						<br />
						<strong>Email:</strong> legal@mentorshipapp.de
					</Typography>

					<Typography
						variant="caption"
						display="block"
						color="text.secondary"
						mt={2}
					>
						Disclaimer: This Privacy Policy is for development and operational
						planning only. Please consult a German legal advisor or data
						protection officer before public launch to ensure full compliance.
					</Typography>
				</Box>
			</Container>
		</DashboardLayout>
	);
}
