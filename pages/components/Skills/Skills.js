import Image from 'next/image';
import { SkillsItems } from './data';

const Skills = () => {
  return (
    <section id="skills" className={'skills'}>
      <div className="container">
        <h2>Skills</h2>

        <ul className="skills__list">
          {SkillsItems.map(({ src, text }) => (
            <li className="skills__item" key={text}>
              <Image src={src} alt={text} />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
