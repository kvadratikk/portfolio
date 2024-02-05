import Link from 'next/link';
import CountUp from 'react-countup';
import Animated from '../../components/Animated/Animated';
import Avatar from '../../components/Avatar/Avatar';
import Circles from '../../components/Circles/Circles';
import Tooltip from '../../components/Tooltip/Tooltip';

import { useState } from 'react';
import { FaCss3, FaGithub, FaHtml5, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import {
  SiAxios,
  SiBabel,
  SiCypress,
  SiEslint,
  SiExpress,
  SiGulp,
  SiI18Next,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiPrettier,
  SiPug,
  SiReacthookform,
  SiRedux,
  SiStorybook,
  SiSwiper,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        icons: [<SiJavascript key='JavaScript' />, <SiTypescript key='TypeScript' />],
      },
      {
        title: 'Frameworks and Libraries',
        icons: [
          <FaReact key='React' />,
          <SiRedux key='Redux, Redux Toolkit' />,
          <SiReacthookform key='React Hook Form' />,
          <SiNextdotjs key='Next.js' />,
          <SiI18Next key='i18next' />,
          <SiAxios key='Axios' />,
          <FaNodeJs key='Node.js' />,
          <SiExpress key='Express' />,
        ],
      },
      {
        title: 'Markup and Styling',
        icons: [
          <FaHtml5 key='HTML5' />,
          <SiPug key='Pug' />,
          <FaCss3 key='CSS3' />,
          <FaSass key='SASS' />,
          <SiMui key='MaterialUI' />,
          <SiTailwindcss key='Tailwind' />,
          <SiSwiper key='Swiper' />,
          <TbBrandFramerMotion key='Framer-Motion' />,
        ],
      },
      {
        title: 'Build and Tools',
        icons: [
          <FaGithub key='Git, GitHub' />,
          <SiWebpack key='Webpack' />,
          <SiGulp key='Gulp' />,
          <SiBabel key='Babel' />,
          <SiEslint key='ESLint' />,
          <SiPrettier key='Prettier' />,
        ],
      },
      {
        title: 'Testing and Debugging',
        icons: [
          <SiJest key='Jest' />,
          <SiCypress key='Cypress' />,
          <SiStorybook key='Storybook' />,
        ],
      },
      {
        title: 'Databases',
        icons: [<SiMongodb key='MongoDB, Mongoose' />, <SiMysql key='MySQL' />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Front End Developer - Clevertec',
        stage: '2023 - current',
      },
      {
        title: 'Full Stack Developer - Altrp Corp',
        stage: '2021 - 2023',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title:
          "Bachelor's degree, Infocommunication systems and networks - Belarusian State University of Informatics and Radioelectronics",
        stage: '2023 - 2028',
      },
      {
        title: "Bachelor's degree, Philosophy - Saint Petersburg State University",
        stage: '2019 - 2021',
      },
    ],
  },
  {
    title: 'certificates',
    info: [
      {
        title: 'Clevertec Frontend Lab - Clevertec.ru',
        src: 'https://drive.google.com/file/d/1P07M19cZXk6hNOiEtjsfDmdy3J25lka_/view',
        stage: '2023',
      },
      {
        title: 'Training on algorithms 3.0 - Yandex',
        src: 'https://drive.google.com/file/d/15Zqu6nV-ESMzdjmcJm-7RMKsGN-01YAp/view',
        stage: '2023',
      },
      {
        title: 'REACT 2022 Q1 - The Rolling Scopes School',
        src: 'https://app.rs.school/certificate/76gqkpsr',
        stage: '2022',
      },
      {
        title: 'Short Track 2021 Q3 - The Rolling Scopes School',
        src: 'https://app.rs.school/certificate/i7osa4k0',
        stage: '2022',
      },
      {
        title: 'JS/FE Pre-School - The Rolling Scopes School',
        src: 'https://app.rs.school/certificate/wk2p6gwx',
        stage: '2021',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  const yearsOfExperience = new Date().getFullYear() - 2021;

  return (
    <div className='min-h-screen h-full bg-primary/30 py-32 text-center xl:text-left flex flex-col justify-center'>
      <Circles />

      <Animated
        element='div'
        className='hidden xl:flex absolute bottom-0 -left-[400px] h-full max-w-[737px] max-h-[780px] mix-blend-soft-light'
        direction='right'
        duration={0.2}>
        <Avatar className='-scale-x-100 scale-y-100' />
      </Animated>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <Animated className='h2' element='h2' direction='right' duration={0.2}>
            Creator of <span className='text-accent'>user-friendly</span> web applications.
          </Animated>
          <Animated
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
            element='p'
            direction='right'
            duration={0.4}>
            Proficient in JavaScript, HTML, CSS, and React, with a strong focus on delivering
            efficient and scalable solutions. Collaborative team player with excellent
            problem-solving skills and a keen eye for detail. Passionate about staying updated with
            the latest industry trends and technologies.
          </Animated>

          <Animated
            element='div'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-6'
            direction='right'
            duration={0.6}>
            <div className='flex flex-1 xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10  after:absolute after:top-0 after:invisible after:right-0 xl:after:visible'>
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

        <Animated
          element='div'
          direction='left'
          duration={0.4}
          className='flex flex-col w-full xl:max-w-[48%] h-[480px] xl:pr-20'>
          <div className='flex gap-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 flex-wrap'>
            {aboutData.map(({ title }, itemIndex) => (
              <button
                className={`${
                  index === itemIndex
                    ? 'text-accent after:w-[100%] after:bg-accent'
                    : 'hover:text-accent hover:after:bg-accent duration-300 after:bg-white'
                } capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300`}
                key={title}
                onClick={() => setIndex(itemIndex)}>
                {title}
              </button>
            ))}
          </div>

          <div className='py-2 xl:py-6 flex flex-col items-center xl:items-start gap-y-2 xl:gap-y-4'>
            {aboutData[index].info.map(({ title, stage, icons, src }) => (
              <div
                className='flex-1 flex flex-col md:flex-row gap-x-2 text-white/60 w-full items-center md:items-start'
                key={title}>
                <div className='font-light mb-2 md:mb-0 md:text-left'>
                  {src ? (
                    <Link
                      className='underline hover:text-white transition-all duration-300'
                      href={src}
                      target='_blank'>
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                </div>
                <div className='hidden md:flex'>-</div>

                {stage && <div className='hidden md:flex whitespace-nowrap'>{stage}</div>}

                {icons && (
                  <div className='flex gap-x-4'>
                    {icons.map((icon) => (
                      <div
                        className='text-2xl cursor-pointer text-white relative flex items-center group transition-all duration-300'
                        key={icon.key}>
                        {icon}

                        <Tooltip theme='light' direction='left' text={icon.key} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Animated>
      </div>
    </div>
  );
};

export default About;
