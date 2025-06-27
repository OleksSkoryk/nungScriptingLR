import './style.css';
import { useTranslation } from 'react-i18next';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content';
import CardsTable from 'components/CardsTable';
import FeatureCard from 'components/FeatureCard';
import PricingCard from 'components/PricingCard';
import SpecsPricingLine from 'components/SpecsPricingLine';
import SpecsBuyButton from 'components/SpecsBuyButton';

import image1 from 'resources/dixieSpeaker2.png';
import image2 from 'resources/dixieSpeaker3.png';
import image3 from 'resources/dixieSpeaker5.png';

import microphoneIcon from 'resources/icons/microphone.png';
import speakerIcon from 'resources/icons/speaker.png';
import wifiIcon from 'resources/icons/wifi.png';
import airplayIcon from 'resources/icons/airplay.png';
import privacyIcon from 'resources/icons/privacy.png';
import faceIcon from 'resources/icons/face.png';
import dixieLogo from 'resources/logo.png';

export default function Dixie() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Content text={t('page-main.content1')} image={image1} />
        <h1 className="subtitle">{t('page-main.keyFeatures-label')}</h1>
        <CardsTable>
          <FeatureCard icon={microphoneIcon} title={t('page-main.keyFeatures.panel1.title')} description={t('page-main.keyFeatures.panel1.content')} />
          <FeatureCard icon={speakerIcon} title={t('page-main.keyFeatures.panel2.title')} description={t('page-main.keyFeatures.panel2.content')} />
          <FeatureCard icon={wifiIcon} title={t('page-main.keyFeatures.panel3.title')} description={t('page-main.keyFeatures.panel3.content')} />
          <FeatureCard icon={airplayIcon} title={t('page-main.keyFeatures.panel4.title')} description={t('page-main.keyFeatures.panel4.content')} />
          <FeatureCard icon={privacyIcon} title={t('page-main.keyFeatures.panel5.title')} description={t('page-main.keyFeatures.panel5.content')} />
          <FeatureCard icon={faceIcon} title={t('page-main.keyFeatures.panel6.title')} description={t('page-main.keyFeatures.panel6.content')} />
        </CardsTable>
        <h1 className='subtitle'>{t('page-main.content2-label')}</h1>
        <Content text={t('page-main.content2')} image={image2} />
        <h1 className='subtitle'>{t('page-main.content3-label')}</h1>
        <Content text={t('page-main.content3')} image={image3} />
        <h1 className='subtitle'>{t('page-main.prices-label')}</h1>
        <CardsTable>
          <div></div>
          <PricingCard
            icon={dixieLogo}
            title={t('page-main.prices.standart-speaker.panel.title')}
            description={t('page-main.prices.standart-speaker.panel.content')}
            price={t('page-main.prices.standart-speaker.panel.price')}
          />
          <PricingCard
            icon={dixieLogo}
            title={t('page-main.prices.cloud-speaker.panel.title')}
            description={t('page-main.prices.cloud-speaker.panel.content')}
            price= {t('page-main.prices.cloud-speaker.panel.price')}
          />
          
          <SpecsPricingLine text={t('page-main.prices.namings.aiprocessing')} bold={true} />
          <SpecsPricingLine text={t('page-main.prices.standart-speaker.aiprocessing')} />
          <SpecsPricingLine text={t('page-main.prices.cloud-speaker.aiprocessing')} />
          
          <SpecsPricingLine text={t('page-main.prices.namings.performance')} bold={true} />
          <SpecsPricingLine text={t('page-main.prices.standart-speaker.performance')} />
          <SpecsPricingLine text={t('page-main.prices.cloud-speaker.performance')} />
          
          <SpecsPricingLine text={t('page-main.prices.namings.offlineCapability')} bold={true} />
          <SpecsPricingLine text={t('page-main.prices.standart-speaker.offlineCapability')} />
          <SpecsPricingLine text={t('page-main.prices.cloud-speaker.offlineCapability')} />
          
          <SpecsPricingLine text={t('page-main.prices.namings.privacy')} bold={true} />
          <SpecsPricingLine text={t('page-main.prices.standart-speaker.privacy')} />
          <SpecsPricingLine text={t('page-main.prices.cloud-speaker.privacy')} />
          
          <SpecsPricingLine text={t('page-main.prices.namings.targetUser')} bold={true} />
          <SpecsPricingLine text={t('page-main.prices.standart-speaker.targetUser')} />
          <SpecsPricingLine text={t('page-main.prices.cloud-speaker.targetUser')} />
          
          <SpecsPricingLine text={t('page-main.prices.namings.requiresSubscription')} bold={true} />
          <SpecsPricingLine text={t('page-main.prices.standart-speaker.requiresSubscription')} />
          <SpecsPricingLine text={t('page-main.prices.cloud-speaker.requiresSubscription')} />

          <div style={{ height: '75px' }}></div>
          <SpecsBuyButton bold={true}>{t('page-main.prices.standart-speaker.buy-button')}</SpecsBuyButton>
          <SpecsBuyButton bold={true}>{t('page-main.prices.cloud-speaker.buy-button')}</SpecsBuyButton>
        </CardsTable>
      </div>
      <Footer />
    </div>
  );
}