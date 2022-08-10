import { FC } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'

import Page from 'components/Page/Page'
import styles from './Auth.module.scss'

const Auth: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
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

        <Button variant='contained' type='submit'>Войти</Button>
      </form>
    </Page>
  )
}

export default Auth
