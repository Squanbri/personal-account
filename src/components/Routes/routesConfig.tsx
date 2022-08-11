import { staticLinks } from 'assets/data/links';
import PersonalAccount from 'pages/PersonalAccount/PersonalAccount';
import NotFound from 'pages/NotFound/NotFound';

export const routes = [
  {
    path: staticLinks.personalAccount,
    element: <PersonalAccount />,
  },
  {
    path: '*',
    element: <NotFound/>
  }
];