import './style.css';
import { useTranslation } from 'react-i18next';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content';

export default function Dixie() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Content />
        
        
      </div>
      <Footer />
    </div>
  );
}