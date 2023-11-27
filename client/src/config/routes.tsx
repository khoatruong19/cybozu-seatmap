import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Auth from '../pages/Auth';

const routesConfig: RouteObject[] = [
  {
    element: <Auth />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
];

export default routesConfig;
