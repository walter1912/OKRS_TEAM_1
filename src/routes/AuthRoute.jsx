import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const { access_token } = useSelector((state) => state.auth);

  return (
    <>{!access_token ? <Navigate to="/login" replace={true} /> : <Outlet />}</>
  );
};

export default AuthRoute;
