import useScreens from '../hooks/useScreens';

import Animated from '../components/Animated/Animated';
import Avatar from '../components/Avatar/Avatar';
import ParticlesContainer from '../components/ParticlesContainer/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn/ProjectsBtn';
import { SCREENS } from '../constants/screens';

const Home = () => {
  const isXl = useScreens(SCREENS.xl);

  return (
    <div className='min-h-screen h-full bg-primary/60'>
      <div className='w-full min-h-screen h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-[20%] xl:justify-start xl:text-left min-h-screen h-full container mx-auto'>
          <Animated element='h1' direction='down' duration={0.2} className='h1 z-10'>
            <span className='text-accent'>Uladzislava Ryzhova</span> <br />
            Frontend Developer
          </Animated>

          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>

          <Animated className='hidden xl:flex' element='div' direction='down' duration={0.4}>
            <ProjectsBtn />
          </Animated>
        </div>
      </div>

      <div className='w-full h-full absolute right-0 bottom-0'>
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        <ParticlesContainer />
        <Animated
          className='h-full max-w-[737px] max-h-[780px] absolute -bottom-32 lg:bottom-0 lg:right-[14%]'
          element='div'
          direction='up'
          duration={0.5}
          transition={{ duration: 1, ease: 'easeInOut' }}>
          {isXl && <Avatar />}
        </Animated>
      </div>
    </div>
  );
};

export default Home;
