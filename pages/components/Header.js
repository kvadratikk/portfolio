const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='navigation'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <a href='#about' className='navigation__link'>
                About
              </a>
            </li>
            <li className='navigation__item'>
              <a href='#skills' className='navigation__link'>
                Skills
              </a>
            </li>
            <li className='navigation__item'>
              <a href='#portfolio' className='navigation__link'>
                Portfolio
              </a>
            </li>
            <li className='navigation__item'>
              <a href='#experience' className='navigation__link'>
                Experience
              </a>
            </li>
            <li className='navigation__item'>
              <a href='#contact' className='navigation__link'>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
