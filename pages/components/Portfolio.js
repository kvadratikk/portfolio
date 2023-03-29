import { useState, useEffect } from 'react'
import PortfolioItem from './PortfolioItem'

import { useWindowSize } from '../hooks/useWindowSize'

import { PortfolioItems } from '../data/portfolio-items'

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
