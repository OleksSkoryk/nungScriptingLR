import './style.css';
import { useTranslation } from 'react-i18next';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content';
import Features from 'components/Features';
import FeatureCard from 'components/FeatureCard';

import image1 from 'resources/dixieSpeaker2.png';

import microphoneIcon from 'resources/icons/microphone.png';
import speakerIcon from 'resources/icons/speaker.png';
import wifiIcon from 'resources/icons/wifi.png';
import airplayIcon from 'resources/icons/airplay.png';
import privacyIcon from 'resources/icons/privacy.png';
import faceIcon from 'resources/icons/face.png';

export default function Dixie() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Content image={image1} />
        <h1 className="subtitle">Key Features:</h1>
        <Features>
          <FeatureCard icon={microphoneIcon} title={t('page-main.keyFeatures.panel1.title')} description={t('page-main.keyFeatures.panel1.content')} />
          <FeatureCard icon={speakerIcon} title={t('page-main.keyFeatures.panel2.title')} description={t('page-main.keyFeatures.panel2.content')} />
          <FeatureCard icon={wifiIcon} title={t('page-main.keyFeatures.panel3.title')} description={t('page-main.keyFeatures.panel3.content')} />
          <FeatureCard icon={airplayIcon} title={t('page-main.keyFeatures.panel4.title')} description={t('page-main.keyFeatures.panel4.content')} />
          <FeatureCard icon={privacyIcon} title={t('page-main.keyFeatures.panel5.title')} description={t('page-main.keyFeatures.panel5.content')} />
          <FeatureCard icon={faceIcon} title={t('page-main.keyFeatures.panel6.title')} description={t('page-main.keyFeatures.panel6.content')} />
        </Features>
      </div>
      <Footer />
    </div>
  );
}