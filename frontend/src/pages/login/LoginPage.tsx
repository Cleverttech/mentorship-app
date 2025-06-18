import React from "react";
import AuthLayout from "../../components/AuthLayout";
import LoginForm from "../../components/LoginForm";

function LoginPage() {
  return (
    <AuthLayout title="Mentorship Plattform – Login">
      <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage;