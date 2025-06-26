import './style.css';
import { useTranslation } from 'react-i18next';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content';

import image1 from 'resources/dixieSpeaker2.png';

export default function Dixie() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Content image={image1} />
        
        
      </div>
      <Footer />
    </div>
  );
}