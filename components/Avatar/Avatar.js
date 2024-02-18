import Image from 'next/image';

const Avatar = ({ className }) => {
  return (
    <Image
      src='/images/avatar.webp'
      alt='avatar'
      fetchPriority='high'
      priority
      width={737}
      height={780}
      className={`translate-z-0 h-full ${className || ''}`}
    />
  );
};

export default Avatar;
