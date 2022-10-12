import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const { accessToken } = useSelector((state) => state.auth);

  return (
    <>{!accessToken ? <Navigate to="/login" replace={true} /> : <Outlet />}</>
  );
};

export default AuthRoute;
