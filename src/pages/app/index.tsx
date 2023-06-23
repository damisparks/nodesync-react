import React, { useEffect } from 'react'
import { Alert, Box, Paper, Typography } from '@mui/material'
import { UserCreator } from '@/components/UserCreator'
import { LoadingScreen } from '@/components/LoadingScreen'
import { ICountryDTO, IUserDTO } from '@/types'
import { UserList } from '@/components/UserList'
import { UserContext } from '@/context/UserContext'

const API_URL = 'http://localhost:9000/api/v0/countries'

export const AppIndexPage: React.FC = () => {
  const [countries, setCountries] = React.useState<ICountryDTO[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState('')
  const [users, setUsers] = React.useState<IUserDTO[]>([])

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch(API_URL)

        if (response.ok) {
          const data = await response.json()
          const formattedCountries = data.map(
            (item: { _id: string; name: { common: string } }) => ({
              _id: item._id,
              name: item.name.common,
            })
          )

          setCountries(formattedCountries)
        } else {
          throw new Error('Request failed')
        }
      } catch (error) {
        setError('Error fetching resources: ' + (error as any).message)
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <React.Fragment>
      <Typography color="primary" variant="h1">
        Intive - FDV Exercise
      </Typography>

      <UserContext.Provider
        value={{
          users,
          addUser: (user) => setUsers((prevUsers) => [...prevUsers, user]),
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <Paper elevation={3} sx={{ p: 2, m: 1, flexGrow: 1 }}>
            <UserCreator countries={countries} />
            {error && (
              <Alert variant="outlined" sx={{ marginTop: 2 }} severity="error">
                {error}
              </Alert>
            )}
          </Paper>

          <Box
            sx={{
              m: 1,
              flexGrow: 1,
            }}
          >
            <UserList />
          </Box>
        </Box>
      </UserContext.Provider>
    </React.Fragment>
  )
}
