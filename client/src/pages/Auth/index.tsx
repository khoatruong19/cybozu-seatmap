import { Outlet } from 'react-router-dom';

const Auth = () => {
  const isAuth = true;
  if (!isAuth) return <p>Not authenticated</p>;

  return <Outlet />;
};

export default Auth;
