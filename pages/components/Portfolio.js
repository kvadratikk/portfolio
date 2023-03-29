import { useState, useEffect } from 'react'
import PortfolioItem from './PortfolioItem'

import useWindowSize from '../hooks/useWindowSize'

import momentum from '../../assets/images/portfolio/momentum.webp'
import artquiz from '../../assets/images/portfolio/artquiz.webp'
import memories from '../../assets/images/portfolio/memories.webp'
import game from '../../assets/images/portfolio/game.webp'
import artshop from '../../assets/images/portfolio/artshop.webp'
import pong from '../../assets/images/portfolio/pong.webp'
import player from '../../assets/images/portfolio/player.webp'
import slider from '../../assets/images/portfolio/slider.webp'
import todo from '../../assets/images/portfolio/todo.webp'
import three from '../../assets/images/portfolio/three.webp'

const PortfolioItems = [
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
  const [startIdx, setStartIdx] = useState(0)
  const [endIdx, setEndIdx] = useState(9)
  const [opacity, setOpacity] = useState(1)
  const [width] = useWindowSize()

  useEffect(() => {
    if (width <= 587) {
      setEndIdx(3)
    } else if (width <= 867) {
      setEndIdx(6)
    } else {
      setEndIdx(9)
    }
  }, [width])

  return (
    <section id='portfolio' className='portfolio'>
      <div className='container'>
        <h2>Portfolio</h2>
        <ul className='portfolio__list' style={{ opacity }}>
          {PortfolioItems.slice(0 + startIdx, startIdx + endIdx)
            .sort((a, b) => b.date - a.date)
            .map((item) => {
              const { name, link, src, date, stack } = item

              return <PortfolioItem name={name} link={link} src={src} date={date} stack={stack} key={item.name} />
            })}
        </ul>
        <div className='portfolio__arrows'>
          <svg
            viewBox='0 0 18 17'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => {
              setOpacity(0)
              setTimeout(() => {
                startIdx > 0 ? setStartIdx(startIdx - endIdx) : setStartIdx((startIdx + endIdx) * Math.floor((items.length - 1) / endIdx))
                setOpacity(1)
              }, 300)
            }}
          >
            <g id='prev' transform='translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)'>
              <polygon className='arrow' points='16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596'></polygon>
              <polygon className='arrow-fixed' points='16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596'></polygon>
              <path d='M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z'></path>
            </g>
          </svg>

          <svg
            viewBox='-1 0 18 17'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => {
              setOpacity(0)
              setTimeout(() => {
                startIdx + endIdx < PortfolioItems.length ? setStartIdx(startIdx + endIdx) : setStartIdx(0)
                setOpacity(1)
              }, 300)
            }}
          >
            <g>
              <polygon className='arrow' points='16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596'></polygon>
              <polygon className='arrow-fixed' points='16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596'></polygon>
              <path d='M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z'></path>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
