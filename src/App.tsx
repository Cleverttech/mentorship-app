import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage";
import Register from "./pages/register/Register";
import ProfilePage from "./pages/profile/ProfilePage";
import LandingPage from "./pages/landing-page/LandingPage";
import MentorDashboard from "./pages/mentor-dashbaord/MentorDashboard";
import MenteeDashboard from "./pages/mentee-dashboard/MenteeDashboard";
import BookingPage from "./pages/bookings/BookingPage";
import ArticlePage from "./pages/articles/ArticlePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mentor/dashboard" element={<MentorDashboard />} />
        <Route path="/mentee/dashboard" element={<MenteeDashboard />} />
        <Route path="/bookings/:id" element={<BookingPage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;