import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1 .png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'




const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>Mes Projets Réalisés</h5>
    <h2>Portfolio</h2>
    <div className="container porfolio__container">
     <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG1}/>
      </div>
      <h3>Musée virtuelle</h3>
      <div className="portfolio__item-cta">
      <a href=""className='btn'>Github</a>
      <a href=""className='btn btn-primary'>Démo</a>
     </div>
     </article>

     <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG2}/>
      </div>
      <h3>Boutique de sport</h3>
      <div className="portfolio__item-cta">
      <a href=""className='btn'>Github</a>
      <a href="https://heyivansko.github.io/sport-github/"className='btn btn-primary'>Démo</a>
     </div>
     </article>

     <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG3}/>
      </div>
      <h3>Projet Flexbox</h3>
      <div className="portfolio__item-cta">
      <a href=""className='btn'>Github</a>
      <a href=""className='btn btn-primary'>Démo</a>
     </div>
     </article>

     <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG4}/>
      </div>
      <h3>Page Web avec Bootstrap</h3>
      <div className="portfolio__item-cta">
      <a href=""className='btn'>Github</a>
      <a href=""className='btn btn-primary'>Démo</a>
     </div>
     </article>

     <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG5}/>
      </div>
      <h3>Reproduction du site ComeUp</h3>
      <div className="portfolio__item-cta">
      <a href=""className='btn'>Github</a>
      <a href=""className='btn btn-primary'>Démo</a>
     </div>
     </article>
    </div>
    </section>
  )
}

export default Portfolio