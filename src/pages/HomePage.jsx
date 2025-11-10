import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export default function HomePage() {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (!user) return <p>Please log in first.</p>

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Welcome, {user.name} 👋</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
        Logout
      </button>
    </div>
  )
}
