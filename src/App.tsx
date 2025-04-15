import './App.css';
import '../config/i18n/i18n';
import { useTranslation } from 'react-i18next';
import Header from './header/header';

function App() {
  const { t } = useTranslation();

  return (
    <div className='p-5'>
      <div className='flex flex-col'>
        <Header />
      </div>

      <div>{t('welcome')}</div>
    </div>
  );
}

export default App;
