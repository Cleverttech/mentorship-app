import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard/Dashboard";
import LoginPage from "./pages/login/LoginPage";
import ForgotPasswordPage from "./pages/forgot-password/ForgotPasswordPage";
import Register from "./pages/register/Register";
import ProfilePage from "./pages/profile/ProfilePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;