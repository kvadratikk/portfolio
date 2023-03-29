import { ExperienceItems } from '../data/experience-items'

const transformMonth = (month) => {
  return String(month).length < 2 ? '0' + month : month
}

const ExperienceItem = ({ date, position, place, certificate }) => {
  return (
    <li className='experience__item'>
      <p className='experience__date'>
        <span className='experience__year'>
          {transformMonth(date[0].getMonth() + 1) +
            '/' +
            date[0].getFullYear() +
            ' – ' +
            (typeof date[1] === 'string' ? date[1] : transformMonth(date[1].getMonth() + 1) + '/' + date[1].getFullYear())}
        </span>
        <span className='experience__arrow'></span>
      </p>
      <span className='experience__separator'>
        <span className='experience__dot'></span>
        <span className='experience__line'></span>
      </span>
      <div className='experience__text'>
        <h3 className='experience__position'>{position}</h3>
        <h4 className='experience__place'>{place}</h4>
        {certificate && (
          <a className='experience__certificate' href={certificate} target='_blank' rel='noreferrer'>
            Certificate
          </a>
        )}
      </div>
    </li>
  )
}

const Experience = () => {
  return (
    <section id='experience' className='experience'>
      <div className='container'>
        <h2>Experience</h2>
        <div className='experience__timeline'>
          <ul className='experience__list'>
            {ExperienceItems.sort((a, b) => b.date[0] - a.date[0]).map((item, idx) => {
              return <ExperienceItem date={item.date} place={item.place} position={item.position} certificate={item.certificate} key={idx} />
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
