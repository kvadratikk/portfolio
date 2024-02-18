import Image from 'next/image';
import Link from 'next/link';

import Socials from './Socials/Socials';

const Header = () => {
  return (
    <header className='absolute z-20 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
          <Link href='/'>
            <Image
              src='/icons/logo.svg'
              width={140}
              height={28}
              alt='logo'
              priority={true}
              className='w-auto h-auto'
            />
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
