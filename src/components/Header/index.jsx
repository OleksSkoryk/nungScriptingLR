import './style.css';
import Logo from 'components/Logo';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import "flag-icons/css/flag-icons.min.css";

export default function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const locale = Cookies.get('locale') || 'en';

  const handleLocaleChange = (newLocale) => {
    Cookies.set('locale', newLocale);
    window.location.reload();
  };

  return (
    <div className="Header">
      <div onClick={() => {navigate('/')}} style={{ cursor: 'pointer' }}>
        <Logo />
      </div>
      <div className='Header-Buttons'>
        <a href="/features" className="Header-Button">{t('header.features')}</a>
        <a href="/buy" className="Header-Button">{t('header.buy')}</a>
        <a href="/download" className="Header-Button">{t('header.download')}</a>
        {locale === 'en' && (
          <span
            className='fi fi-ua'
            onClick={() => { handleLocaleChange('ua'); }}
            style={{ cursor: 'pointer' }}
          ></span>
        )}
        {locale === 'ua' && (
          <span
            className='fi fi-gb'
            onClick={() => { handleLocaleChange('en'); }}
            style={{ cursor: 'pointer' }}
          ></span>
        )}
      </div>
    </div>
  );
}