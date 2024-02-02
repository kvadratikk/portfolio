import Image from 'next/image';
import Link from 'next/link';
import Animated from '../../components/Animated/Animated';
import Bulb from '../../components/Bulb/Bulb';
import Circles from '../../components/Circles/Circles';
import Tooltip from '../../components/Tooltip/Tooltip';

import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaHtml5, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import {
  SiAxios,
  SiCypress,
  SiExpress,
  SiGreensock,
  SiGulp,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiReacthookform,
  SiRedux,
  SiSvg,
  SiSwiper,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const projectsSlides = [
  {
    title: 'cryptopia',
    link: 'https://docs.google.com/document/d/1H48m4VXFgmI-EHlwNN8Y2zbuG0Ic2XcK6us4QOqaG2w/edit',
    images: [
      {
        title: 'main',
      },
      {
        title: 'auth',
      },
      {
        title: 'list',
      },
      {
        title: 'order',
      },
    ],
    stack: [
      <SiGulp key='Gulp' />,
      <FaSass key='SASS' />,
      <SiSvg key='SVG' />,
      <SiJavascript key='JavaScript' />,
    ],
  },
  {
    title: 'clevertec',
    link: 'https://websitetest.clevertech.by/',
    images: [
      {
        title: 'slider',
      },
      {
        title: 'tabs',
      },
      {
        title: 'hover-list',
      },
      {
        title: 'mobile',
      },
    ],
    stack: [
      <SiNextdotjs key='Next.js' />,
      <SiTypescript key='TypeScript' />,
      <FaSass key='SASS' />,
      <SiSwiper key='Swiper' />,
    ],
  },
  {
    title: 'portfolio',
    link: 'https://storied-queijadas-0d80ee.netlify.app/',
    images: [
      {
        title: 'home',
      },
      {
        title: 'about',
      },
      {
        title: 'projects',
      },
      {
        title: 'mobile',
      },
    ],
    stack: [
      <SiNextdotjs key='Next.js' />,
      <SiTailwindcss key='Tailwind' />,
      <SiSwiper key='Swiper' />,
      <TbBrandFramerMotion key='Framer-Motion' />,
    ],
  },
  {
    title: 'Library',
    link: 'https://scintillating-bublanina-d5cc9b.netlify.app/#/books/all',
    images: [
      {
        title: 'registration',
      },
      {
        title: 'home',
      },
      {
        title: 'booking',
      },
      {
        title: 'account',
      },
    ],
    stack: [
      <SiTypescript key='TypeScript' />,
      <FaReact key='React' />,
      <SiRedux key='Redux Toolkit' />,
      <SiReacthookform key='React Hook Form' />,
      <SiAxios key='Axios' />,
      <SiSwiper key='Swiper' />,
      <FaSass key='SASS' />,
      <SiCypress key='Cypress' />,
    ],
  },
  {
    title: 'simple-game',
    link: 'https://willowy-elf-a25b99.netlify.app/',
    images: [
      {
        title: 'home',
      },
      {
        title: 'transition',
      },
      {
        title: 'jump',
      },
      {
        title: 'box',
      },
    ],
    stack: [
      <FaHtml5 key='HTML5' />,
      <SiTypescript key='TypeScript' />,
      <SiGreensock key='GreenSock' />,
    ],
  },
  {
    title: 'memories',
    link: 'https://incomparable-trifle-4b8624.netlify.app/',
    images: [
      {
        title: 'main',
      },
      {
        title: 'auth',
      },
      {
        title: 'post',
      },
      {
        title: 'search',
      },
    ],
    stack: [
      <FaReact key='React' />,
      <SiRedux key='Redux' />,
      <SiReacthookform key='React Hook Form' />,
      <SiAxios key='Axios' />,
      <FaNodeJs key='Node.js' />,
      <SiExpress key='Express' />,
      <SiMongodb key='Mongoose' />,
      <SiMui key='MaterialUI' />,
    ],
  },
  {
    title: 'art-shop',
    link: 'https://rolling-scopes-school.github.io/kvadratikk-REACT2022Q1/',
    images: [
      {
        title: 'home',
      },
      {
        title: 'review',
      },
      {
        title: 'filters',
      },
      {
        title: 'details',
      },
    ],
    stack: [
      <SiTypescript key='TypeScript' />,
      <FaReact key='React' />,
      <SiRedux key='Redux Toolkit' />,
      <SiReacthookform key='React Hook Form' />,
      <SiJest key='Jest' />,
    ],
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />

      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <Animated direction='up' duration={0.2} element='h2' className='h2 xl:mt-8'>
              <Link
                className='group hover:text-accent transition-all duration-300 capitalize'
                href={projectsSlides[index].link}
                target='_blank'>
                {`${projectsSlides[index].title.slice(0, -1).replace('-', ' ')}`}
                <span className='text-accent group-hover:text-white transition-all duration-300'>
                  {projectsSlides[index].title.slice(-1)}
                </span>
              </Link>
            </Animated>

            <Animated
              direction='up'
              duration={0.4}
              element='div'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              <div className='flex gap-4 flex-wrap justify-center sm:justify-start'>
                {projectsSlides[index].stack.map((icon) => (
                  <div
                    className='text-2xl text-white/60 cursor-pointer relative flex items-center group transition-all duration-300 hover:text-white'
                    key={icon.key}>
                    {icon}

                    <Tooltip theme='light' direction='left' text={icon.key} />
                  </div>
                ))}
              </div>
            </Animated>
          </div>

          <Animated
            direction='down'
            duration={0.6}
            element='div'
            className='w-full xl:max-w-[65%] overflow-hidden'>
            <Swiper
              className='h-[200px] sm:h-[500px]'
              spaceBetween={10}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              onSlideChange={({ activeIndex }) => setIndex(activeIndex)}>
              {projectsSlides.map(({ title: project, images }, index) => (
                <SwiperSlide key={index}>
                  <div className='grid grid-cols-2 grid-rows-2 gap-4 auto-rows-fr'>
                    {images.map(({ title }, imageIndex) => (
                      <div
                        className='relative flex items-center justify-center w-full h-full max-h-[200px] min-h-[200px] sm:max-h-[225px] sm:min-h-[225px] group'
                        key={title}>
                        <div className='flex items-center justify-center relative h-full cursor-grab overflow-hidden group rounded-lg w-full'>
                          <Image
                            className='pointer-events-none object-cover rounded-lg h-full w-full'
                            src={`/images/projects/${project}/${title}.webp`}
                            alt={title}
                            width={500}
                            height={300}
                          />

                          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>

                          <div className='absolute bottom-0 translate-y-full group-hover:bottom-[50%] transition-all duration-300'>
                            <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                              <div className='delay-100'>
                                {`${String(imageIndex + 1)}:`.toUpperCase()}
                              </div>
                              <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                                {title.toUpperCase()}
                              </div>
                              <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                <BsArrowRight />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Animated>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Projects;
