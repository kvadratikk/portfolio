import Image from 'next/image';

import js from '../../assets/images/skills/js.png';
import html from '../../assets/images/skills/html.png';
import css from '../../assets/images/skills/css.png';
import react from '../../assets/images/skills/react.png';
import node from '../../assets/images/skills/nodejs.png';
import mongodb from '../../assets/images/skills/mongodb.png';
import git from '../../assets/images/skills/git.png';
import redux from '../../assets/images/skills/redux.png';
import ts from '../../assets/images/skills/ts.png';
import webpack from '../../assets/images/skills/webpack.png';
import storybook from '../../assets/images/skills/storybook.png';
import hookForm from '../../assets/images/skills/hook-form.png';
import jest from '../../assets/images/skills/jest.png';
import cypress from '../../assets/images/skills/cypress.png';

const SkillsItems = [
  { src: git, text: 'Git' },
  { src: html, text: 'HTML, Canvas' },
  { src: css, text: 'CSS/SASS' },
  { src: js, text: 'JavaScript' },
  { src: ts, text: 'TypeScript' },
  { src: webpack, text: 'Webpack' },
  { src: react, text: 'React JS' },
  { src: redux, text: 'Redux/Redux Toolkit' },
  { src: node, text: 'Node JS' },
  { src: mongodb, text: 'MongoDB' },
  { src: storybook, text: 'Srorybook' },
  { src: hookForm, text: 'React Hook Form' },
  { src: jest, text: 'Jest' },
  { src: cypress, text: 'Cypress' },
];

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
