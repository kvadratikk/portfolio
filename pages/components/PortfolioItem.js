import Image from 'next/image'
import { useState } from 'react'

const PortfolioItem = ({ name, link, src, date, stack }) => {
  const [isText, setIsText] = useState(false)

  return (
    <li className='card portfolio__item'>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='portfolio__link'
        onMouseEnter={() => {
          setIsText(true)
        }}
        onMouseLeave={() => {
          setIsText(false)
        }}
      >
        <Image src={src} alt={name} />
        <p style={{ opacity: isText ? 1 : 0 }} className='card__text'>
          <span className='card__name'>{name}</span>
          {date && (
            <span className='card__date' style={{ marginTop: '0px' }}>
              {date.getMonth() + 1 + '/' + date.getFullYear()}
            </span>
          )}
          {stack && (
            <span className='card__stack'>Stack: {stack.join(', ')}</span>
          )}
        </p>
      </a>
    </li>
  )
}

export default PortfolioItem
