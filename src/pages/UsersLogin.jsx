import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const handleLogin = () => {
    login(username)
    navigate('/home')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 my-2"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </div>
  )
}
