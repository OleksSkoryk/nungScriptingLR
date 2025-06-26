import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import i18n from './i18n'
import Dixie from './pages/Dixie';
import Download from './pages/Download';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dixie />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  );
}

export default App;
