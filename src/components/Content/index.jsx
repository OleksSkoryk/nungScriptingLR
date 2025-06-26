import './style.css';
import { useTranslation } from 'react-i18next';

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="Content">
      <p>{t('page-main.content1')}</p>
    </div>
  );
}