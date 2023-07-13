import codewars from '../../assets/images/codewars.svg';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 style={{ marginBottom: '30px' }}>About me</h2>
        <p>
          Hi everybody, I am a frontend developer with a good knowledge base, at the moment I am
          looking for a job. I will be glad if you are interested in my candidacy. You can see more
          information below!
        </p>
        <p>Location: Minsk, Belarus</p>
        <p>English: B1</p>
        <p>
          <span>
            Codewars: <Image src={codewars} alt="codewars stats" />
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
