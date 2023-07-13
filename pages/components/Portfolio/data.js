import momentum from '../../../assets/images/portfolio/momentum.webp';
import artquiz from '../../../assets/images/portfolio/artquiz.webp';
import memories from '../../../assets/images/portfolio/memories.webp';
import game from '../../../assets/images/portfolio/game.webp';
import artshop from '../../../assets/images/portfolio/artshop.webp';
import pong from '../../../assets/images/portfolio/pong.webp';
import player from '../../../assets/images/portfolio/player.webp';
import slider from '../../../assets/images/portfolio/slider.webp';
import todo from '../../../assets/images/portfolio/todo.webp';
import three from '../../../assets/images/portfolio/three.webp';
import library from '../../../assets/images/portfolio/library.webp';

export const PortfolioItems = [
  {
    name: 'library',
    link: 'https://scintillating-bublanina-d5cc9b.netlify.app/',
    src: library,
    date: new Date('2023-03'),
    stack: ['react', 'ts', 'redux', 'axios', 'css modules', 'cypress', 'react-hook-form', 'swiper'],
  },
  {
    name: 'portal',
    link: 'https://lustrous-salamander-16e240.netlify.app/',
    src: three,
    date: new Date('2022-10-19'),
    stack: ['react', 'react-three', 'three.js'],
  },
  {
    name: 'simple game',
    link: 'https://willowy-elf-a25b99.netlify.app/',
    src: game,
    date: new Date('2022-10'),
    stack: ['canvas', 'ts', 'gsap'],
  },
  {
    name: 'memories',
    link: 'https://incomparable-trifle-4b8624.netlify.app/',
    src: memories,
    date: new Date('2022-06'),
    stack: ['react', 'redux', 'axios', 'node', 'express', 'jwt', 'mongo', 'mui'],
  },
  {
    name: 'art shop',
    link: 'https://rolling-scopes-school.github.io/kvadratikk-REACT2022Q1/',
    src: artshop,
    date: new Date('2022-05'),
    stack: ['react', 'ts', 'redux-toolkit', 'jest', 'react-hook-form'],
  },
  {
    name: 'angular to-do list',
    link: 'https://rolling-scopes-school.github.io/kvadratikk-ST2021Q3/',
    src: todo,
    date: new Date('2022-02'),
    stack: ['angular', 'ts', 'rxjs', 'scss'],
  },
  {
    name: 'art quiz',
    link: 'https://rolling-scopes-school.github.io/kvadratikk-JSFE2021Q3/art-quiz/',
    src: artquiz,
    date: new Date('2021-11'),
    stack: ['ts', 'webpack', 'scss'],
  },
  {
    name: 'momentum',
    link: 'https://rolling-scopes-school.github.io/kvadratikk-JSFE2021Q3/momentum/',
    src: momentum,
    date: new Date('2021-10'),
    stack: ['scss', 'js'],
  },
  {
    name: 'video player',
    link: 'https://rolling-scopes-school.github.io/kvadratikk-JSFEPRESCHOOL/custom-video-player/',
    src: player,
    date: new Date('2021-08'),
    stack: ['sass', 'js'],
  },
  {
    name: 'slider',
    link: 'https://rolling-scopes-school.github.io/kvadratikk-JSFEPRESCHOOL/vertical-slider/',
    src: slider,
    date: new Date('2021-08'),
    stack: ['sass', 'js'],
  },
  {
    name: 'ping pong',
    link: 'https://kvadratikk.github.io/pong-canvas/',
    src: pong,
    date: new Date('2021-06'),
    stack: ['canvas', 'js'],
  },
];
