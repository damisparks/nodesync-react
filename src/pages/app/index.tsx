import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { UserCreator } from '@/components/UserCreator'

export const AppIndexPage: React.FC = () => {
  const [countries, setResources] = React.useState<ICountryDTO[]>([])
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/v0/countries')
        const data = await response.json()
        const extractedData = data.map((item) => ({
          _id: item._id,
          name: item.name.common,
        }))
        setResources(extractedData)
      } catch (error) {
        alert('Error fetching resources')
      }
    }

    fetchResources()
  }, [])

  return (
    <React.Fragment>
      <Typography color="primary" variant="h1">
        Intive - FDV Exercise
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            m: 1,
            flexGrow: 1,
          }}
        >
          <UserCreator countries={countries} />
        </Paper>

        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            p: 2,
            m: 1,
            flexGrow: 1,
          }}
        >
          <Typography variant="h5" component="div">
            Box 2
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  )
}
