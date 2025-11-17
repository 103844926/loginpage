import '@fontsource/inter/400.css'; // regular
import '@fontsource/inter/500.css'; // medium
import '@fontsource/inter/600.css'; // semi-bold
import '@fontsource/inter/700.css'; // bold
import { CssBaseline, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import theme from './themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
