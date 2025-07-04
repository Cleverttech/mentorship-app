import { Container, Typography, Box } from "@mui/material";
import DashboardLayout from "../../components/DashboardLayout";

export default function TermsOfServicePage() {
	return (
		<DashboardLayout>
			<Container maxWidth="md" sx={{ py: 4 }}>
				<Typography variant="h4" gutterBottom>
					Terms of Service
				</Typography>

				<Box sx={{ my: 2 }}>
					<Typography variant="body1" paragraph>
						Welcome to Mentorship App (“Platform”). By accessing or using our
						services, you agree to be bound by these Terms of Service (“Terms”).
						If you do not agree, do not use our Platform.
					</Typography>

					<Typography variant="h6">1. Definitions</Typography>
					<Typography variant="body2" paragraph>
						- <strong>Platform:</strong> The Mentorship App website and
						services.
						<br />- <strong>Mentors:</strong> Independent individuals offering
						mentorship and guidance.
						<br />- <strong>Mentees:</strong> Users receiving mentorship
						services via the Platform.
						<br />- <strong>We/Us:</strong> The company operating the Platform.
					</Typography>

					<Typography variant="h6">2. Scope of Services</Typography>
					<Typography variant="body2" paragraph>
						The Platform connects mentees with mentors for educational and
						professional guidance. We provide the technological infrastructure
						to facilitate these connections but do not directly employ mentors.
					</Typography>

					<Typography variant="h6">3. No Guarantees</Typography>
					<Typography variant="body2" paragraph>
						We do <strong>not guarantee</strong> employment outcomes, career
						advancement, certifications, or official qualifications. Mentorship
						is for educational and advisory purposes only. Decisions based on
						mentorship advice are solely at the mentee’s discretion.
					</Typography>

					<Typography variant="h6">
						4. Relationship Between Mentors and Mentees
					</Typography>
					<Typography variant="body2" paragraph>
						Mentors are <strong>independent providers</strong>. The Platform is
						not responsible for actions, advice, or opinions shared by mentors,
						or any agreements outside of the Platform. Mentors must comply with
						applicable professional conduct, and mentees agree to interact
						respectfully.
					</Typography>

					<Typography variant="h6">5. Liability</Typography>
					<Typography variant="body2" paragraph>
						To the maximum extent permitted by German law, the Platform is not
						liable for indirect or consequential damages resulting from use of
						services. We are not liable for third-party content, including
						mentor profiles, advice, or external links. In case of simple
						negligence, liability is limited to foreseeable damages typical for
						this type of contract.
					</Typography>

					<Typography variant="h6">6. User Obligations</Typography>
					<Typography variant="body2" paragraph>
						Users agree to provide accurate personal information, not misuse the
						Platform for illegal purposes, and not share content that is
						defamatory, discriminatory, or violates third-party rights.
					</Typography>

					<Typography variant="h6">7. Payment & Credits</Typography>
					<Typography variant="body2" paragraph>
						Credits purchased on the Platform are non-refundable except as
						required by law. All payments are processed securely via integrated
						third-party payment providers (e.g. Stripe).
					</Typography>

					<Typography variant="h6">8. Termination</Typography>
					<Typography variant="body2" paragraph>
						We reserve the right to suspend or terminate user accounts for
						violations of these Terms without notice.
					</Typography>

					<Typography variant="h6">9. Changes to Terms</Typography>
					<Typography variant="body2" paragraph>
						We may modify these Terms at any time. Continued use of the Platform
						after changes indicates acceptance of the updated Terms.
					</Typography>

					<Typography variant="h6">10. Governing Law</Typography>
					<Typography variant="body2" paragraph>
						These Terms are governed by the laws of the Federal Republic of
						Germany. Exclusive place of jurisdiction is the registered office of
						the Platform, unless another jurisdiction is required by consumer
						protection regulations.
					</Typography>

					<Typography variant="h6">11. Contact</Typography>
					<Typography variant="body2" paragraph>
						This is a development MVP for learning and testing purposes only.
						<br />
						No commercial services are currently offered.
						<br />
						For any inquiries, please contact:
						<br />
						Email: xxxxxxxxxxxxx
					</Typography>

					<Typography
						variant="caption"
						display="block"
						color="text.secondary"
						mt={2}
					>
						Disclaimer: This Terms of Service draft is for development and
						operational planning only. Please consult a German lawyer for final
						legal approval before publishing.
					</Typography>
				</Box>
			</Container>
		</DashboardLayout>
	);
}
