import React from 'react'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Stack, Typography, TextField } from '@mui/material'

const validationSchema = object({
  name: string().required('Name is required'),
  surname: string().required('Surname is required'),
  birthdate: string().required('Birthdate is required'),
  country: string().required('Country is required'),
})

export const UserCreator: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      birthdate: '',
      country: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <React.Fragment>
      <Typography>Create a user</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            size="small"
            type="text"
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            size="small"
            type="text"
            id="surname"
            name="surname"
            label="Surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />

          <TextField
            fullWidth
            size="small"
            type="date"
            id="birthdate"
            name="birthdate"
            value={formik.values.birthdate}
            onChange={formik.handleChange}
            error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
            helperText={formik.touched.birthdate && formik.errors.birthdate}
          />
        </Stack>
      </form>
    </React.Fragment>
  )
}
