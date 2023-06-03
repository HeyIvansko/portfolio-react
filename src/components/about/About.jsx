import React from 'react'
import './about.css'
import {BsFillAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import  {BsFolder2Open} from 'react-icons/bs'

const about = () => {
  return (
    <section id="about">
      <h5>Présentation</h5>
      <h2>A Propos de moi</h2>

       <div className="container about__container">
        <div className="about__me">

        </div>

        <div className="about__content">
         <div className="about__cards">
          <article className='about__card'>
          <BsFillAwardFill className='about__icon'/>
        <h5>Niveau</h5>
        <small>Bac +2 </small>
          </article>
          <article className='about__card'>
          <FiUsers className='about__icon'/>
        <h5>Qualités </h5>
        <small>-Dynamique <br /> -Esprit d'équipe <br />-Capacité d'adaptation</small>
          </article>
          <article className='about__card'>
          <BsFolder2Open className='about__icon'/>
        <h5>Projects</h5>
        <small>+20</small>
          </article>
         </div>
         <p>Je suis un jeune étudiant en développement web agé de 20ans.Je suis un étudiant passionné de développement web en deuxième année de
Bachelor. J'ai acquis des compétences solides en programmation grâce à mes
études et à mes expériences professionnelles. En dehors de mes études, j'aime apprendre de nouvelles technologies et je suis toujours à la recherche de
nouveaux défis. </p>

          <a href="#contact"className='btn btn-primary'>Discutons</a>
        </div>
       </div>
    </section>
  )
}

export default about