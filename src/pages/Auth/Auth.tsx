import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';

import { useStore } from 'hooks/useStore';
import Page from 'components/Page/Page';
import styles from './Auth.module.scss';
import { staticLinks } from 'assets/data/links';

const Auth: FC = () => {
  const store = useStore();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const isErrorNotEmpty = error !== '';

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      store.authStore.login(values)
        .then(() => {
          store.authStore.setAuth(true);
          navigate(staticLinks.personalAccount);
        })
        .catch(() => setError('Неверный логин или пароль'));
    },
  });
  return (
    <Page title='Авторизация' className={styles.page}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Typography variant='h6' component='span' className={styles.title}>
          Авторизация
        </Typography>

        <TextField
          label='Email'
          variant='outlined'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <TextField
          type='password'
          label='Пароль'
          variant='outlined'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        {isErrorNotEmpty && (
          <Typography component='span' className={styles.error}>
            {error}
          </Typography>
        )}

        <Button variant='contained' type='submit'>Войти</Button>
      </form>
    </Page>
  );
};

export default Auth;
