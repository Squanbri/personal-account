import { FC } from 'react';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useStore } from 'hooks/useStore';
import { ContactProps } from './types';
import styles from './Contacts.module.scss';

const Contact: FC<ContactProps> = ({ contact }) => {
  const store = useStore();

  const onDeleteContact = () => {
    store.accountStore.contactStore.deleteContact(contact.id);
  };

  return (
    <div className={styles.contact}>
      <Typography className={styles.name}>
        {contact.fullName}
      </Typography>

      <IconButton className={styles.delete} onClick={onDeleteContact}>
        <CloseIcon color='warning'/>
      </IconButton>
    </div>
  );
};

export default Contact;