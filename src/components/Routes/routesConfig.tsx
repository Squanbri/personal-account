import { staticLinks } from 'assets/data/links';
import PersonalAccount from 'pages/PersonalAccount/PersonalAccount';

export const routes = [
  {
    path: staticLinks.personalAccount,
    element: <PersonalAccount />,
  }
];