import { FC } from 'react';
import { Button, Typography } from '@mui/material';

import { useStore } from 'hooks/useStore';
import { UserProps } from './types';
import styles from './Users.module.scss';

const User: FC<UserProps> = ({ user }) => {
  const store = useStore();

  const onAddUser = () => {
    store.accountStore.userStore.addUser(user.id);
  };

  return (
    <div className={styles.user}>
      <Typography className={styles.name}>{user.fullName}</Typography>

      <Button 
        size='small'
        color='success'
        variant='contained' 
        className={styles.add}
        onClick={onAddUser}
      >
        Добавить
      </Button>
    </div>
  );
};

export default User;
