import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import ForgotPasswordPage from './pages/forgot-password/ForgotPasswordPage';
import Register from './pages/register/Register';
import ProfilePage from './pages/profile/ProfilePage';
import LandingPage from './pages/landing-page/LandingPage';
import MentorDashboard from './pages/mentor-dashbaord/MentorDashboard';
import MenteeDashboard from './pages/mentee-dashboard/MenteeDashboard';
import BookingPage from './pages/bookings/BookingPage';
import ArticlePage from './pages/articles/ArticlePage';
import ProtectedRoute from './components/ProtectedRoute';
import BuyCreditsPage from './pages/buy-credits/BuyCreditsPage';
import MentorsPage from './pages/mentors/MentorsPage';
import MessagesPage from './pages/messages/MessagesPage';

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
            <ProtectedRoute allowedRoles={['mentor']}>
              <MentorDashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected mentee route */}
        <Route
          path="/mentee/dashboard"
          element={
            <ProtectedRoute allowedRoles={['mentee']}>
              <MenteeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buy-credits"
          element={
            <ProtectedRoute allowedRoles={['mentee']}>
              <BuyCreditsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mentors"
          element={
            <ProtectedRoute allowedRoles={['mentee']}>
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
        <Route path="/bookings/:id" element={<BookingPage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
