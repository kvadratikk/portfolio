import Image from 'next/image'
import js from '../../assets/images/skills/js.png'
import html from '../../assets/images/skills/html.png'
import css from '../../assets/images/skills/css.png'
import react from '../../assets/images/skills/react.png'
import node from '../../assets/images/skills/nodejs.png'
import mongodb from '../../assets/images/skills/mongodb.png'
import git from '../../assets/images/skills/git.png'
import redux from '../../assets/images/skills/redux.png'
import ts from '../../assets/images/skills/ts.png'
import webpack from '../../assets/images/skills/webpack.png'

const Skills = () => {
  return (
    <section id='skills' className={'skills'}>
      <div className='container'>
        <h2>Skills</h2>
        <ul className='skills__list'>
          <li className='skills__item'>
            <Image src={git} alt='git' />
            <p>Git</p>
          </li>
          <li className='skills__item'>
            <Image src={html} alt='html' />
            <p>HTML, Canvas</p>
          </li>
          <li className='skills__item'>
            <Image src={css} alt='css' />
            <p>CSS/SASS/SCSS</p>
          </li>
          <li className='skills__item'>
            <Image src={js} alt='javascript' />
            <p>JavaScript</p>
          </li>
          <li className='skills__item'>
            <Image src={ts} alt='typescript' />
            <p>TypeScript</p>
          </li>
          <li className='skills__item'>
            <Image src={webpack} alt='typescript' />
            <p>Webpack</p>
          </li>
          <li className='skills__item'>
            <Image src={react} alt='react' />
            <p>React JS</p>
          </li>
          <li className='skills__item'>
            <Image src={redux} alt='redux' />
            <p>Redux/Redux Toolkit</p>
          </li>
          <li className='skills__item'>
            <Image src={node} alt='node' />
            <p>Node JS</p>
          </li>
          <li className='skills__item'>
            <Image src={mongodb} alt='mongodb' />
            <p>MongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
