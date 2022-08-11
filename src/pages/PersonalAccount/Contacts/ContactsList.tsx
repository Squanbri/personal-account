import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CircularProgress, Typography } from '@mui/material';

import { useStore } from 'hooks/useStore';
import Contact from './Contact';
import styles from './Contacts.module.scss';

const ContactsList: FC = observer(() => {
  const store = useStore();
  const { list, isEmpty, isLoading } = store.accountStore.contactStore;

  useEffect(() => {
    store.accountStore.contactStore.fetchContacts();
  }, []);

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
          Контакты не найдены
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {list.map((contact, index) => 
        <Contact key={index} contact={contact} />
      )}
    </div>
  );
});

export default ContactsList;