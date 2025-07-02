import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  let isLogin = localStorage.getItem("isLogin") === "true";

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
