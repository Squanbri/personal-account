import { FC } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import { useStore } from 'hooks/useStore';
import { staticLinks } from 'assets/data/links';
import styles from './Header.module.scss';

const Header: FC = observer(() => {
  const store = useStore();
  const isAuth = store.authStore.isAuth;

  const onLogout = () => {
    store.authStore.logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Личный кабинет
          </Typography>

          {!isAuth &&
            <Link to={staticLinks.auth}>
              <Button className={styles.login}>Войти</Button>
            </Link>
          }

          {isAuth &&
            <Button className={styles.login} onClick={onLogout}>Выйти</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default Header;
