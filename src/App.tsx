import './App.css';
import '../config/i18n/i18n';
import { useTranslation } from 'react-i18next';
import i18n from '../config/i18n/i18n';

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <button onClick={() => changeLanguage('es')}>es</button>
      <button onClick={() => changeLanguage('en')}>en</button>
      <div>{t('welcome')}</div>
    </>
  );
}

export default App;
