import { FC } from 'react';
import { CircularProgress } from '@mui/material';

import Page from 'components/Page/Page';
import styles from './LoaderPage.module.scss';

const LoaderPage: FC = () => {
  return (
    <Page title='Загрузка...' className={styles.page}>
      <CircularProgress />
    </Page>
  )
}

export default LoaderPage;