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
        <Route path="/download" element={<Download locale={Cookies.get('locale')} />} />
      </Routes>
    </Router>
  );
}

export default App;
