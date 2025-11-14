import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { Navigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/themes/styles/slider.scss";
import '@/themes/styles/global.scss';

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
