import Link from 'next/link';
import { useState } from 'react';

import Animated from '../../components/Animated/Animated';
import Tooltip from '../../components/Tooltip/Tooltip';

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
import { DURATION_DEFAULT } from '../../constants/animation';

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

const AboutInfo = () => {
  const [index, setIndex] = useState(0);

  return (
    <Animated
      element='div'
      direction='left'
      duration={DURATION_DEFAULT}
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
  );
};

export default AboutInfo;
