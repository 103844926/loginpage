import { useAuthStore } from '../store/useAuthStore'
import { Navigate, useNavigate } from 'react-router-dom'
import { Box, Button, Typography, Container } from '@mui/material'
import Header from '../components/header';
import Footer from '../components/footer';


export default function HomePage() {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <Box>
      <Header />

      <Container sx={{ my: 8, textAlign: 'center' }}>
        <Typography variant="h2" color="action.success" gutterBottom>
            Welcome to my home page
        </Typography>
        <Typography variant="h3" color="primary.secondary" gutterBottom>
          Hello
        </Typography>
        <Typography variant="body1" gutterBottom>
          You have successfully logged in.
          But there's nothing much to see here yet.
          Oh well.
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Container>

      <Footer />
    </Box>
  )
}
