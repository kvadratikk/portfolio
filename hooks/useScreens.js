import { useEffect, useState } from 'react';

const useScreens = (rightScreen) => {
  const [screen, setScreen] = useState(false);

  useEffect(() => {
    const listener = () => {
      const isRightScreen = window.innerWidth >= rightScreen;

      if (screen != isRightScreen) setScreen(isRightScreen);
    };

    listener();
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [screen, rightScreen]);

  return screen;
};

export default useScreens;
