import CountUp from 'react-countup';
import Animated from '../../components/Animated/Animated';
import Avatar from '../../components/Avatar/Avatar';
import Circles from '../../components/Circles/Circles';

import AboutInfo from '../../components/AboutInfo/AboutInfo';
import { DURATION_DEFAULT } from '../../constants/animation';
import { SCREENS } from '../../constants/screens';
import useScreens from '../../hooks/useScreens';

const About = () => {
  const isXl = useScreens(SCREENS.xl);

  const firstYearOfProgramming = 2021;
  const yearsOfExperience = new Date().getFullYear() - firstYearOfProgramming;

  return (
    <div className='min-h-screen h-full bg-primary/30 py-32 text-center xl:text-left flex flex-col justify-center'>
      <Circles />

      <Animated
        element='div'
        className='hidden xl:flex absolute bottom-0 -left-[400px] h-full max-w-[737px] max-h-[780px] mix-blend-soft-light'
        direction='right'
        duration={DURATION_DEFAULT}>
        {isXl && <Avatar className='-scale-x-100' />}
      </Animated>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <Animated className='h2' element='h2' direction='right' duration={DURATION_DEFAULT}>
            Creator of <span className='text-accent'>user-friendly</span> web applications.
          </Animated>
          <Animated
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
            element='p'
            direction='right'
            duration={DURATION_DEFAULT}>
            Proficient in JavaScript, HTML, CSS, and React, with a strong focus on delivering
            efficient and scalable solutions. Collaborative team player with excellent
            problem-solving skills and a keen eye for detail. Passionate about staying updated with
            the latest industry trends and technologies.
          </Animated>

          <Animated
            element='div'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-6'
            direction='right'
            duration={DURATION_DEFAULT}>
            <div className='flex flex-1 xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:invisible after:right-0 xl:after:visible'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={yearsOfExperience} duration={5} />+
                </div>

                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
            </div>
          </Animated>
        </div>

        <AboutInfo />
      </div>
    </div>
  );
};

export default About;
