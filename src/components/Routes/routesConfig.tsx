import { staticLinks } from 'assets/data/links';
import LoaderPage from 'pages/LoaderPage/LoaderPage';
import Auth from 'pages/Auth/Auth';
import PersonalAccount from 'pages/PersonalAccount/PersonalAccount';

export const routes = [
  {
    path: staticLinks.personalAccount,
    element: <PersonalAccount />,
  }
]