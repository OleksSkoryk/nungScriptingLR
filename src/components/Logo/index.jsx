import logo from 'resources/logo.png';
import './style.css';

export default function Logo() {
  return (
    <div className="Logo">
      <img src={logo} className='Logo-img' alt="Logo" />
      <p className="Logo-text">Dixie</p>
    </div>
  );
}