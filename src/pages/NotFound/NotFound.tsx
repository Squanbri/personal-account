import { FC } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';

import { useStore } from 'hooks/useStore';
import Page from 'components/Page/Page';
import styles from './NotFound.module.scss';
import { staticLinks } from 'assets/data/links';

const NotFound: FC = observer(() => {
  const store = useStore();
  const isAuth = store.authStore.isAuth;

  const backLink = isAuth 
    ? staticLinks.personalAccount
    : staticLinks.auth;

  return (
    <Page title='Загрузка...' className={styles.page}>
      <Typography variant='h1' component='span'>
        404 
      </Typography>

      <Typography variant='h6' component='span'>
        Страница по запросу не найдены
      </Typography>

      <Link to={backLink} className={styles.link}>
        <Typography variant='h6' component='span'>
          Вернуться назад
        </Typography>
      </Link>
    </Page>
  );
});

export default NotFound;