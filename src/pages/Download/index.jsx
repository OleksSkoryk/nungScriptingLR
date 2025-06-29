import './style.css';
import { useTranslation } from 'react-i18next';

import Header from 'components/Header';
import Footer from 'components/Footer';
import CardsTable from 'components/CardsTable';
import FeatureCard from 'components/FeatureCard';

import faceIcon from 'resources/icons/face.png'
import appstore_en from 'resources/appstore_en.svg';
import appstore_ua from 'resources/appstore_ua.svg';
import googleplay_en from 'resources/googleplay_en.png';
import googleplay_ua from 'resources/googleplay_ua.png';

export default function Download({ locale }) {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <div className='Body'>
        <h1 className='subtitle'>{t('page-download.title')}</h1>
        <p className='content-text'>{t('page-download.description')}</p>
        <h1 className='subtitle'>{t('page-download.keyFeatures-label')}</h1>
        <CardsTable>
          <FeatureCard icon={faceIcon} title={t('page-download.keyFeatures.panel1.title')} description={t('page-download.keyFeatures.panel1.content')} />
          <FeatureCard icon={faceIcon} title={t('page-download.keyFeatures.panel2.title')} description={t('page-download.keyFeatures.panel2.content')} />
          <FeatureCard icon={faceIcon} title={t('page-download.keyFeatures.panel3.title')} description={t('page-download.keyFeatures.panel3.content')} />
          <FeatureCard icon={faceIcon} title={t('page-download.keyFeatures.panel4.title')} description={t('page-download.keyFeatures.panel4.content')} />
          <FeatureCard icon={faceIcon} title={t('page-download.keyFeatures.panel5.title')} description={t('page-download.keyFeatures.panel5.content')} />
          <FeatureCard icon={faceIcon} title={t('page-download.keyFeatures.panel6.title')} description={t('page-download.keyFeatures.panel6.content')} />
        </CardsTable>
        <h1 className='subtitle'>{t('page-download.downloadNow-label')}</h1>
        <p className='content-text'>{t('page-download.downloadNow-description')}</p>
        {locale === 'en' && (
          <div className='store-banners'>
            <img src={appstore_en} className='appstore-banner' alt='App Store'></img>
            <img src={googleplay_en} className='googleplay-banner' alt='Google Play'></img>
          </div>
        )}
        {locale === 'ua' && (
          <div className='store-banners'>
            <img src={appstore_ua} className='appstore-banner' alt='App Store'></img>
            <img src={googleplay_ua} className='googleplay-banner' alt='Google Play'></img>
          </div>
        )}
      </div>

      <h1 className='subtitle'>{t('page-download.FAQ-label')}</h1>

      <p className='content-text' type='bold'>{t('page-download.FAQ.question1.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question1.A')}</p>
      <br></br>

      <p className='content-text' type='bold'>{t('page-download.FAQ.question2.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question2.A')}</p>
      <br></br>

      <p className='content-text' type='bold'>{t('page-download.FAQ.question3.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question3.A')}</p>
      <br></br>

      <p className='content-text' type='bold'>{t('page-download.FAQ.question4.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question4.A')}</p>
      <br></br>

      <p className='content-text' type='bold'>{t('page-download.FAQ.question5.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question5.A')}</p>
      <br></br>

      <p className='content-text' type='bold'>{t('page-download.FAQ.question6.Q')}</p>
      <p className='content-text'>{t('page-download.FAQ.question6.A')}</p>
      <br></br>
      
      <Footer />
    </div>
  );
}