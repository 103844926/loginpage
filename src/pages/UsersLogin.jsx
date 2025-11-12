import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import { Box, Button, TextField, Typography, Paper } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { InputAdornment, IconButton } from '@mui/material'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usererror, setUserError] = useState('')
  const [passworderror, setPasswordError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!username.trim()) {
      setUserError('Username cannot be empty')
      return
    }

    if (!password.trim()) {
      setPasswordError('Password cannot be empty')
      return
    }
    
    login(username)
    navigate('/home')
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: "neutral.grey_blue",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: 320, textAlign: 'center' }}>
        <Typography variant="h3" color="primary.info" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Enter your username"
          variant="outlined"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
            if (usererror && e.target.value.trim()) {
              setUserError('') // Clear error when user starts typing
            }
          }}
          error={Boolean(usererror)}
          helperText={usererror}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Enter your password"
          type={showPassword ? 'text': 'password'}
          variant="outlined"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            if (passworderror && e.target.value.trim()) {
                setPasswordError('') // Clear error when user starts typing  
            }
        }}
          error={Boolean(passworderror)}
          helperText={passworderror}
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        ),
        }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  )
}
