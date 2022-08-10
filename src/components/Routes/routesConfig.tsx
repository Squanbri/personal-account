import { staticLinks } from 'assets/data/links';
import LoaderPage from 'pages/LoaderPage/LoaderPage';
import Auth from 'pages/Auth/Auth';


export const loaderRoute = {
  path: '/*',
  element: <LoaderPage />,
}

export const unauthRoutes = [
  {
    path: staticLinks.auth,
    element: <Auth />,
  }
];