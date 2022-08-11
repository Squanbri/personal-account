import { useRoutes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { useStore } from 'hooks/useStore';
import { routes } from './routesConfig';
import LoaderPage from 'pages/LoaderPage/LoaderPage';
import Auth from 'pages/Auth/Auth';

const Routes = observer(() => {
  const store = useStore();
  const isAuth = store.authStore.isAuth;
  const routing = useRoutes(routes);

  if (isAuth === null) {
    return <LoaderPage/>;
  } else if (isAuth === false) {
    return <Auth/>;
  }
  
  return routing;
});

export default Routes;