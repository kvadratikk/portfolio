import { HiEnvelope, HiHome, HiUser, HiViewColumns } from 'react-icons/hi2';

import NavLink from './NavLink/NavLink';

export const navData = [
  { name: 'home', icon: <HiHome />, path: '' },
  { name: 'about', icon: <HiUser /> },
  { name: 'projects', icon: <HiViewColumns /> },
  // { name: 'contact', icon: <HiEnvelope /> },
];

const Nav = () => {
  return (
    <nav className="flex flex-col itens-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-10 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map(({ name, path, icon }) => (
          <NavLink name={name} path={path} icon={icon} key={name} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
