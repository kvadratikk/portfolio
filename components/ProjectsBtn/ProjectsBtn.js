import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 z-10'>
      <Link
        href='/projects'
        className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
        <Image
          className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
          src='/images/rounded-text.png'
          alt=''
          width={141}
          height={148}
          fetchPriority='high'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
