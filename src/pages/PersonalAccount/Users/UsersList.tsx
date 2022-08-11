import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { CircularProgress, Typography } from '@mui/material';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import { useStore } from 'hooks/useStore';
import User from './User';
import styles from './Users.module.scss';

const UsersList: FC = observer(() => {
  const store = useStore();
  const location = useLocation();
  const { list, isEmpty, isLoading } = store.accountStore.userStore;

  useEffect(() => {
    store.accountStore.userStore.fetchUsers(location.search);
  }, [location.search]);

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <CircularProgress />
      </div>
    );
  };

  if (isEmpty) {
    return (
      <div className={styles.empty}>
        <Typography>
          Пользователи не найдены
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      <TransitionGroup className={styles.group}>
        {list.map((user, index) => 
          <CSSTransition
            key={user.id}
            timeout={250}
            classNames={{
              enter: styles.itemEnter,
              enterActive: styles.itemEnterActive,
              exitActive: styles.itemExitActive,
            }}
          >
            <User key={index} user={user} />
          </CSSTransition>
          )}
      </TransitionGroup>
    </div>
  );
});

export default UsersList;