import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Auth from '../pages/Auth';

const routesConfig: RouteObject[] = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Auth />,
  },
];

export default routesConfig;
