import { useCookies } from 'react-cookie';
import { Outlet, Navigate, Route } from 'react-router-dom';

const PrivateRoutes = () => {
  const [cookies] = useCookies(['access_token']);

  return (
    cookies.access_token ? <Outlet /> : <Navigate to='/login' />
  )
 
 
};

export default PrivateRoutes;
