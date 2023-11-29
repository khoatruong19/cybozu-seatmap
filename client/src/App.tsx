import { useRoutes } from 'react-router-dom';
import routesConfig from './config/routes';

function App() {
  const routes = useRoutes(routesConfig);

  return <main className="font-mono">{routes}</main>;
}

export default App;
