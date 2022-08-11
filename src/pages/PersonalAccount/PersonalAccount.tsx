import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Chip, Container } from '@mui/material';

import Page from 'components/Page/Page';
import ContactsList from './Contacts/ContactsList';
import UsersList from './Users/UsersList';
import Search from 'components/UI/Search/Search';
import styles from './PersonalAccount.module.scss';

const PersonalAccount: FC = observer(() => {
  return (
    <Page title='Авторизация' className={styles.page}>
      <Container maxWidth='md' className={styles.container}>
        <div className={styles.contactsWrapper}>
          <Chip label='Контакты' className={styles.title} />

          <div className={styles.contacts}>
            <ContactsList />
          </div>
        </div>

        <div className={styles.usersWrapper}>
          <Chip label='Люди' className={styles.title} />

          <div className={styles.users}>
            <Search />
            <UsersList />
          </div>
        </div>
      </Container>
    </Page>
  );
});

export default PersonalAccount;
