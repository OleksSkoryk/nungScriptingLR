import './style.css';
import Logo from 'components/Logo';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className="Header">
      <Logo />
      <div className='Header-Buttons'>
        <a href="/" className="Header-Button">{t('header.features')}</a>
        <a href="/" className="Header-Button">{t('header.buy')}</a>
        <a href="/download" className="Header-Button">{t('header.download')}</a>
      </div>
    </div>
  );
}