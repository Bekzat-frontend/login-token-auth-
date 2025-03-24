import { Navigate, Route, Routes } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import RegistrationForm from "../Auth/Register";
import LoginForm from "../Auth/Login";
import MovieLayout from "../layout/MovieLayout";
import MovieLIst from "../../pages/MovieLIst";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Navigate to="sign-up" />} />
        <Route path="sign-up" element={<RegistrationForm />} />
        <Route path="sign-in" element={<LoginForm />} />
      </Route>
      <Route path="/" element={<MovieLayout />}>
        <Route index element={<Navigate />} to="movie" />
        <Route path="/movie" element={<MovieLIst />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
