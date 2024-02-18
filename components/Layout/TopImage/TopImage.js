import Image from 'next/image';

const TopImage = () => {
  return (
    <Image
      className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] h-auto opacity-50 pointer-events-none'
      src='/images/top-left-img.png'
      width={200}
      height={200}
      alt=''
      fetchPriority='high'
      priority
    />
  );
};

export default TopImage;
