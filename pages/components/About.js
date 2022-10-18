import codewars from '../../assets/images/codewars.svg'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <h2 style={{ marginBottom: '30px' }}>About me</h2>
        <p>
          I&apos;ve been learning web development by myself and through The
          Rolling Scopes courses. At the moment I am part of the EPAM JS lab and
          have three months of experience in the low/no-code platform
          development. I know how to work in a team and am looking for a
          suitable position for professional growth
        </p>
        <p>Location: Minsk, Belarus</p>
        <p>English: B1</p>
        <p>
          <span>
            Codewars: <Image src={codewars} alt='codewars stats' />
          </span>
        </p>
      </div>
    </section>
  )
}

export default About
