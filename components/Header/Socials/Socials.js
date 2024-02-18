import { RiDiscordLine, RiGithubLine, RiLinkedinLine, RiTelegramLine } from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';

import SocialLink from './SocialLink/SocialLink';

const SocialsData = [
  {
    link: 'https://www.linkedin.com/in/uladzislava-ryzhova/',
    icon: RiLinkedinLine,
  },
  {
    link: 'https://github.com/kvadratikk',
    icon: RiGithubLine,
  },
  {
    link: 'https://t.me/adahiter',
    icon: RiTelegramLine,
  },
  {
    link: 'https://discordapp.com/users/559925521878614027/',
    icon: RiDiscordLine,
  },
  {
    link: 'https://leetcode.com/kvadratikk/',
    icon: SiLeetcode,
  },
];

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      {SocialsData.map(({ link, icon }) => (
        <SocialLink link={link} Icon={icon} key={link} />
      ))}
    </div>
  );
};

export default Socials;
