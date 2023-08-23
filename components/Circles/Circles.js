import Image from 'next/image';

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75">
      <Image className="w-full h-full" src="/images/circles.png" alt="" width={260} height={200} />
    </div>
  );
};

export default Circles;
