import Link from 'next/link';
import { useRouter } from 'next/router';

import Tooltip from '../../Tooltip/Tooltip';

const NavLink = ({ name, path, icon }) => {
  const { pathname } = useRouter();

  return (
    <Link
      className={`${
        `/${path ?? name}` === pathname ? 'text-accent' : ''
      } relative flex items-center group hover:text-accent transition-all duration-300`}
      href={`/${path ?? name}`}>
      <Tooltip text={name} theme='light' direction='right' />

      {icon}
    </Link>
  );
};

export default NavLink;
