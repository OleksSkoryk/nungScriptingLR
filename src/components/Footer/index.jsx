import './style.css';

import { useTranslation } from 'react-i18next';

import Logo from 'components/Logo';
import logo2 from 'resources/logo2.png';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="Footer">
      <p className='footer-text'>© 2025 Dixie. All rights reserved. | Dixie™ and the Dixie logo are trademarks of Pegasus Tecnologies. All product names, logos, and brands are property of their respective owners. Features, pricing, and availability are subject to change without notice.</p>
      <div className='footer-logos'>
        <Logo />
        <img src={logo2} alt="Pegasus Tecnologies Logo" className='pegasus-logo' />
      </div>
    </div>
  );
}