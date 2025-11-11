import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/UsersLogin'
import HomePage from './pages/HomePage'
import { Navigate } from 'react-router-dom';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
