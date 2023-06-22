import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const LoadingScreen: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    }}
  >
    <CircularProgress />
    <Typography
      sx={{
        mt: 2,
      }}
      variant="body1"
    >
      Loading...
    </Typography>
  </Box>
)
