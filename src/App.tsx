import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage";
import Register from "./pages/register/Register";
import ProfilePage from "./pages/profile/ProfilePage";
import LandingPage from "./pages/landing-page/LandingPage";
import MentorDashboard from "./pages/mentor-dashbaord/MentorDashboard";
import MenteeDashboard from "./pages/mentee-dashboard/MenteeDashboard";
import BookingPage from "./pages/bookings/BookingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import BuyCreditsPage from "./pages/buy-credits/BuyCreditsPage";
import MentorsPage from "./pages/mentors/MentorsPage";
import MessagesPage from "./pages/messages/MessagesConversationPage";
import ArticlesPage from "./pages/articles/ArticlePage";
import ContactUsPage from "./pages/legal/ContactUsPage";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/legal/TermsOfServicePage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />

				{/* Protected mentor route */}
				<Route
					path="/mentor/dashboard"
					element={
						<ProtectedRoute allowedRoles={["mentor"]}>
							<MentorDashboard />
						</ProtectedRoute>
					}
				/>

				{/* Protected mentee route */}
				<Route path="/bookings/:id" element={<BookingPage />} />
				<Route
					path="/mentee/dashboard"
					element={
						<ProtectedRoute allowedRoles={["mentee"]}>
							<MenteeDashboard />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/buy-credits"
					element={
						<ProtectedRoute allowedRoles={["mentee"]}>
							<BuyCreditsPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/mentors"
					element={
						<ProtectedRoute allowedRoles={["mentee"]}>
							<MentorsPage />
						</ProtectedRoute>
					}
				/>
				{/* Protected mentee & mentor routes */}
				<Route
					path="/messages"
					element={
						<ProtectedRoute allowedRoles={["mentee", "mentor"]}>
							<MessagesPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/articles"
					element={
						<ProtectedRoute allowedRoles={["mentee", "mentor"]}>
							<ArticlesPage />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/articles/:id"
					element={
						<ProtectedRoute allowedRoles={["mentee", "mentor"]}>
							<ArticlesPage />
						</ProtectedRoute>
					}
				/>
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/terms-of-service" element={<TermsOfServicePage />} />
				<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
				<Route path="/contact-us" element={<ContactUsPage />} />
			</Routes>
		</Router>
	);
}

export default App;
