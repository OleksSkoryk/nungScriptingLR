import './style.css';
import { useTranslation } from 'react-i18next';

import Header from 'components/Header';
import Footer from 'components/Footer';
import CardsTable from 'components/CardsTable';
import FeatureCard from 'components/FeatureCard';

import faceIcon from 'resources/icons/face.png'

export default function Download() {
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
        
      </div>
      <Footer />
    </div>
  );
}