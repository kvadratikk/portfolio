import momentum from '../../assets/images/portfolio/momentum.jpg'
import artquiz from '../../assets/images/portfolio/artquiz.jpg'
import memories from '../../assets/images/portfolio/memories.jpg'
import game from '../../assets/images/portfolio/game.jpg'
import artshop from '../../assets/images/portfolio/artshop.jpg'
import pong from '../../assets/images/portfolio/pong.jpg'
import player from '../../assets/images/portfolio/player.jpg'
import slider from '../../assets/images/portfolio/slider.jpg'
import todo from '../../assets/images/portfolio/todo.jpg'

import PortfolioItem from './PortfolioItem'

const items = [
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
    stack: [
      'react',
      'redux',
      'axios',
      'node',
      'express',
      'jwt',
      'mongo',
      'mui',
    ],
  },
  {
    name: 'art shop',
    link: 'https://rolling-scopes-school.github.io/kvadratikk-REACT2022Q1/',
    src: artshop,
    date: new Date('2022-05'),
    stack: ['react', 'ts', 'redux-toolkit', 'jest'],
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
]

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <div className='container'>
        <h2>Portfolio</h2>
        <ul className='portfolio__list'>
          {items
            .sort((a, b) => b.date - a.date)
            .map((item) => {
              const { name, link, src, date, stack } = item

              return (
                <PortfolioItem
                  name={name}
                  link={link}
                  src={src}
                  date={date}
                  stack={stack}
                  key={item.name}
                />
              )
            })}
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
