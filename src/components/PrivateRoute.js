import { Navigate } from "react-router-dom";
import { selectorIsLoggedIn } from "../Redux/auth/auth-selectors";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};