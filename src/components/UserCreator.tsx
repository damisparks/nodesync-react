import React from 'react'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import {
  Stack,
  Typography,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Alert,
} from '@mui/material'
import { useBirthdayInfo } from '@/hooks/useBirthdateInfo'
import { ICountryDTO } from '@/types'

const validationSchema = object({
  name: string().required('Name is required'),
  surname: string().required('Surname is required'),
  birthdate: string().required('Birthdate is required'),
  country: string().required('Country is required'),
})

interface UserCreatorProps {
  countries: ICountryDTO[]
}
export const UserCreator: React.FC<UserCreatorProps> = ({ countries }) => {
  const [showAlert, setShowAlert] = React.useState(false)
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      birthdate: '',
      country: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setShowAlert(true)
      console.log(values)
    },
  })

  const { age, birthMonth, birthDay, birthDayNumber } = useBirthdayInfo(
    formik.values.birthdate
  )

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
          <FormControl
            fullWidth
            size="small"
            error={formik.touched.country && Boolean(formik.errors.country)}
          >
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              labelId="country-label"
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
            >
              {countries.map((country) => (
                <MenuItem key={country._id} value={country.name}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.country && formik.errors.country && (
              <Typography variant="caption" color="error">
                {formik.errors.country}
              </Typography>
            )}
          </FormControl>

          <Button type="submit" variant="outlined">
            Save
          </Button>
          {/* <pre>{JSON.stringify(formik.values, null, 2)}</pre> */}
          {showAlert && (
            <Alert severity="success" variant="outlined">
              Hello {formik.values.name} from {formik.values.country} on {birthDayNumber},{' '}
              {''}
              {birthDay} of {birthMonth}, you will have {age}!
            </Alert>
          )}
        </Stack>
      </form>
    </React.Fragment>
  )
}
