import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoutes = () => {
  const isUser = useSelector((state) => state?.userLogin?.user);
  // let auth = { token: false };
  return isUser?.google_id || isUser != false ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoutes;
   