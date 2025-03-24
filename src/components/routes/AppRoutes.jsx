import { Navigate, Route, Routes } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import RegistrationForm from "../Auth/Register";
import LoginForm from "../Auth/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="sign-up" />} />
        <Route path="sign-up" element={<RegistrationForm />} />
        <Route path="sign-in" element={<LoginForm />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
