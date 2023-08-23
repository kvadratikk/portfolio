import Link from 'next/link';

const SocialLink = ({ link, Icon }) => {
  return (
    <Link className="hover:text-accent transition-all duration-300" href={link} target="_blank">
      <Icon size={20} />
    </Link>
  );
};

export default SocialLink;
