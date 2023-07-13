import Image from 'next/image';

import { useState } from 'react';

import styles from './PortfolioItem.module.scss';

const PortfolioItem = ({ data }) => {
  const { link, name, src, stack, date } = data;

  const [isText, setIsText] = useState(false);

  const handleMouseEnter = () => setIsText(true);

  const handleMouseLeave = () => setIsText(false);

  return (
    <li className={styles.item}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image src={src} alt={name} />

        <p className={`${styles.text} ${isText ? styles.visible : ''}`}>
          <span className={styles.name}>{name}</span>

          <span className={styles.date}>{`${date.getMonth() + 1}/${date.getFullYear()}`}</span>

          {stack && <span>Stack: {stack.join(', ')}</span>}
        </p>
      </a>
    </li>
  );
};

export default PortfolioItem;
