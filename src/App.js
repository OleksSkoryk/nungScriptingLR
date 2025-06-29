import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Cookies from 'js-cookie';
import i18n from './i18n'
import Dixie from './pages/Dixie';
import Download from './pages/Download';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dixie />} />
        <Route path="/features" element={<Dixie scrollTo={'features'} />} />
        <Route path="/buy" element={<Dixie scrollTo={'buy'} />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  );
}

export default App;
