import React from 'react'
import './header.css'
import CTA from'./CTA'
import HeaderSocial from './HeaderSocials'
import ME from '../../assets/photo_profil.jpeg'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour je suis</h5>
        <h1>N'guessan-Soumah Ivan</h1>
        <h5 className="text-light">Développeur Front-end</h5>
         <CTA></CTA>
         <div className="me">
          <img src={ME} alt="me"/>
         </div>

         <HeaderSocial></HeaderSocial>
         <a href="#contact" className='scroll__down'>Scroller vers le bas</a>
      </div>
    </header>
  )
}

export default header