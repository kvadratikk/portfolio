import Image from 'next/image'
import avatar from '../../assets/images/myphoto.webp'

const Intro = () => {
  return (
    <section className='intro'>
      <div className='container'>
        <div className='intro__greeting'>
          <p>
            I&apos;m <span>Uladzislava Ryzhova</span> <br />
            Junior full-stack javascript developer
          </p>
          <a href='#contact' className='intro__contact button'>
            Contact me
          </a>
        </div>
        <Image src={avatar} alt='my photo' className='intro__avatar' width={362} priority={true} />
      </div>
    </section>
  )
}

export default Intro
