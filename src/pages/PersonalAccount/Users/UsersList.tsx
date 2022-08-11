import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useLocation } from 'react-router-dom';
import { CircularProgress, Typography } from '@mui/material';

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
      {list.map((user, index) => 
        <User key={index} user={user} />
      )}
    </div>
  );
});

export default UsersList;