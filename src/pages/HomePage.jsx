import { useAuthStore } from '../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography, Paper } from '@mui/material'

export default function HomePage() {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (!user) return <Typography variant="h1" align="center" >Please log in first.</Typography>

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f5f7fa',
      }}
    >
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h2" color="action.success" gutterBottom>
            Welcome to my home page
        </Typography>
        <Typography variant="h3" color="primary.secondary" gutterBottom>
          Hello, {user.name} 👋
        </Typography>
        <Typography variant="body1" gutterBottom>
          You have successfully logged in.
          But there's nothing much to see here yet.
          Oh well.
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  )
}
