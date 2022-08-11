import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CircularProgress, Typography } from '@mui/material';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

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
      <TransitionGroup className={styles.group}>
        {list.map((contact) => 
          <CSSTransition
            key={contact.id}
            timeout={250}
            classNames={{
              enter: styles.itemEnter,
              enterActive: styles.itemEnterActive,
              exitActive: styles.itemExitActive,
            }}
          >
            <Contact contact={contact} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
});

export default ContactsList;