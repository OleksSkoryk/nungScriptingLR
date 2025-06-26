import './style.css';
import Logo from 'components/Logo';

export default function Header() {
  return (
    <div className="Header">
      <Logo />
      <div className='Header-Buttons'>
        <a href="/" className="Header-Button">Features</a>
        <a href="/" className="Header-Button">Buy</a>
        <a href="/download" className="Header-Button">Download</a>
      </div>
    </div>
  );
}