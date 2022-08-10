import { useRoutes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useStore } from 'hooks/useStore';
import {
  unauthRoutes,
  // authRoutes,
  loaderRoute,
} from './routesConfig';

const Routes = observer(() => {
  const store = useStore();
  
  const isAuth = store.auth.isAuth;

  const routes = [];
  const loader = [loaderRoute];

  if (isAuth === false) {
    routes.push(...unauthRoutes);
  } 
  // else {
  //   routes.push(...authRoutes);
  // }

  const routing = useRoutes(routes);
  const loaderPage = useRoutes(loader)

  return isAuth !== null 
    ? routing
    : loaderPage;
});

export default Routes;
