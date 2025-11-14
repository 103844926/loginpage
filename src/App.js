import './App.css';
import '@/themes/styles/global.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Navigate } from 'react-router-dom';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />   
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
