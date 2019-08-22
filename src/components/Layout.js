import React from 'react'
import { Link } from 'gatsby'
import Head from './Head'
import SocialLink from './SocialLink'
import logo from '../img/logo.svg'
import '../styles/index.sass'

const Wrapper = ({ children, title = '', description = '' }) => (
  <main>
    <Head title={title} description={description} />
    <header>
      <div className='content navigation'>
        <nav>
          <Link to="/" className="logo" title="Logo">
            <img src={logo} className="logo-img" alt="Vaime Travel" />
          </Link>
          <Link to="/tours" className="nav-item" title="Wycieczki">Wycieczki</Link>
          <Link to="/georgia" className="nav-item" title="Gruzja">Gruzja</Link>
          <Link to="/faq" className="nav-item" title="FAQ">FAQ</Link>
          <Link to="/partnership" className="nav-item" title="Współpraca">Współpraca</Link>
          <Link to="/contact" className="nav-item" title="Kontakt">Kontakt</Link>
        </nav>
        <div className='nav-social'>
          <SocialLink type='facebook' src='' />
          <SocialLink type='instagram' src='' />
          <SocialLink type='youtube' src='' />
        </div>
      </div>
    </header>
    {children}
    <footer>
      <div className='content'>
        <div className='flex-row-auto'>
          <div className='list'>
            <h5 className='color-white'>Gruziński Po Polsku</h5>
            <ul className='color-white'>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </main>
)

export default Wrapper
