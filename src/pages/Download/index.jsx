import './style.css';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import Header from 'components/Header';
import Footer from 'components/Footer';
import CardsTable from 'components/CardsTable';
import FeatureCard from 'components/FeatureCard';

import phoneWifiIcon from 'resources/icons/phone-wifi.png'
import puzzleIcon from 'resources/icons/puzzle.png'
import faceIcon from 'resources/icons/face.png'
import settingsIcon from 'resources/icons/settings.png'
import checkIcon from 'resources/icons/check.png'
import downloadIcon from 'resources/icons/download.png'

import appstore_en from 'resources/appstore_en.svg';
import appstore_ua from 'resources/appstore_ua.svg';
import googleplay_en from 'resources/googleplay_en.png';
import googleplay_ua from 'resources/googleplay_ua.png';

export default function Download() {
  const { t } = useTranslation();
  const locale = Cookies.get('locale') || 'en';

  return (
    <div className="App">
      <Header />
      <div className='Body'>
        <h1 className='subtitle'>{t('page-download.title')}</h1>
        <p className='content-text'>{t('page-download.description')}</p>
        <h1 className='subtitle'>{t('page-download.keyFeatures-label')}</h1>
        <CardsTable>
          <FeatureCard icon={phoneWifiIcon} title={t('page-download.keyFeatures.panel1.title')} description={t('page-download.keyFeatures.panel1.content')} />
          <FeatureCard icon={puzzleIcon} title={t('page-download.keyFeatures.panel2.title')} description={t('page-download.keyFeatures.panel2.content')} />
          <FeatureCard icon={faceIcon} title={t('page-download.keyFeatures.panel3.title')} description={t('page-download.keyFeatures.panel3.content')} />
          <FeatureCard icon={settingsIcon} title={t('page-download.keyFeatures.panel4.title')} description={t('page-download.keyFeatures.panel4.content')} />
          <FeatureCard icon={checkIcon} title={t('page-download.keyFeatures.panel5.title')} description={t('page-download.keyFeatures.panel5.content')} />
          <FeatureCard icon={downloadIcon} title={t('page-download.keyFeatures.panel6.title')} description={t('page-download.keyFeatures.panel6.content')} />
        </CardsTable>
        <h1 className='subtitle'>{t('page-download.downloadNow-label')}</h1>
        <p className='content-text'>{t('page-download.downloadNow-description')}</p>
        {locale === 'en' && (
          <div className='store-banners'>
            <a href='https://www.apple.com/app-store/' target='_blank' rel='noopener noreferrer'>
              <img src={appstore_en} className='appstore-banner' alt='App Store' />
            </a>
            <a href='https://play.google.com/' target='_blank' rel='noopener noreferrer'>
              <img src={googleplay_en} className='googleplay-banner' alt='Google Play' />
            </a>
          </div>
        )}
        {locale === 'ua' && (
          <div className='store-banners'>
            <a href='https://www.apple.com/app-store/' target='_blank' rel='noopener noreferrer'>
              <img src={appstore_ua} className='appstore-banner' alt='App Store' />
            </a>
            <a href='https://play.google.com/' target='_blank' rel='noopener noreferrer'>
              <img src={googleplay_ua} className='googleplay-banner' alt='Google Play' />
            </a>
          </div>
        )}
      </div>

      <h1 className='subtitle'>{t('page-download.FAQ-label')}</h1>

      <p className='content-text' type='bold'>{t('page-download.FAQ.question1.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question1.A')}</p>
      <br />

      <p className='content-text' type='bold'>{t('page-download.FAQ.question2.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question2.A')}</p>
      <br />

      <p className='content-text' type='bold'>{t('page-download.FAQ.question3.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question3.A')}</p>
      <br />

      <p className='content-text' type='bold'>{t('page-download.FAQ.question4.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question4.A')}</p>
      <br />

      <p className='content-text' type='bold'>{t('page-download.FAQ.question5.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question5.A')}</p>
      <br />

      <p className='content-text' type='bold'>{t('page-download.FAQ.question6.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question6.A')}</p>
      <br />
      
      <Footer />
    </div>
  );
}