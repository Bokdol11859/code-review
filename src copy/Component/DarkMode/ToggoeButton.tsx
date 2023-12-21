import Image from 'next/image';
import { useRecoilState } from 'recoil';

import { themeState } from '@/app/globalAtom';

import darkModeImage from '../../../public/images/darkmode.webp';
import lightModeImage from '../../../public/images/lightmode.webp';

export default function ToggleDarkModeButton() {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  const modeImageSrc =
    currentTheme === 'light' ? darkModeImage : lightModeImage;

  const handleClickToggleImage = () => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark');
      return;
    }
    setCurrentTheme('light');
  };
  return (
    <Image
      style={{
        cursor: 'pointer',
      }}
      src={modeImageSrc}
      alt="모드를 바꾸는 이미지"
      width={50}
      height={50}
      priority
      onClick={handleClickToggleImage}
    />
  );
}
