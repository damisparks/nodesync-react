import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { UserCreator } from '@/components/UserCreator'

export const AppIndexPage: React.FC = () => {
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
          <UserCreator />
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
