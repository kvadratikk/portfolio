/* eslint-disable react/display-name */
import Image from 'next/image';

import { memo } from 'react';

const Avatar = memo(({ className }) => {
  return (
    <Image
      src='/images/avatar.png'
      alt='avatar'
      fetchPriority='high'
      width={737}
      height={780}
      className={`translate-z-0 w-full h-full hidden xl:flex xl:max-w-none ${className}`}
    />
  );
});

export default Avatar;
