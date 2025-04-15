import { useTranslation } from 'react-i18next';
import i18n from '../../config/i18n/i18n';
import { Button, DropdownMenu, Heading, Link } from '@radix-ui/themes';

export default function Header() {
  const { t } = useTranslation(undefined, { keyPrefix: 'header' });
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex justify-between'>
      <div className='flex gap-19'>
        <Heading>Matias Orué Coronel</Heading>
        <div className='content-center'>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant='ghost'>
                {t('language')}
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item onClick={() => changeLanguage('es')}>Spanish</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item onClick={() => changeLanguage('en')}>English</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
      <div className='flex justify-end gap-19 content-center'>
        <Link href='#home'>{t('home')}</Link>
        <Link href='#work-experence'>{t('workExperience')}</Link>
        <Link href='#about-me'>{t('about')}</Link>
        <Link href='#contact'>{t('contact')}</Link>
      </div>
    </div>
  );
}
