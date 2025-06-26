import './style.css';
import { useTranslation } from 'react-i18next';

export default function Content( {image} ) {
  const { t } = useTranslation();

  return (
    <div className="Content">
      <p className='Content-text'>{t('page-main.content1')}</p>
      <img src={image} className="Content-image" alt="Content-image"></img>
    </div>
  );
}