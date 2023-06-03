import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
    <h5>Quels sont mes domaines</h5>
    <h2>Compétences</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
<h3>Développement Frontend</h3>
<div className="experience__content">
<article className="experience__details">
<BsFillPatchCheckFill className='experience__details-icon'/>
<h4>HTML</h4>
<small className='text-light'>Très bonne maitrise</small>
</article>
<article className="experience__details">
<BsFillPatchCheckFill className='experience__details-icon'/>
<h4>CSS</h4>
<small className='text-light'>Très bonne maitrise</small>
</article>
<article className="experience__details">
<BsFillPatchCheckFill className='experience__details-icon'/>
<h4>Bootstrap</h4>
<small className='text-light'>Très bonne maitrise</small>
</article>
<article className="experience__details">
<BsFillPatchCheckFill className='experience__details-icon'/>
<h4>Javascript</h4>
<small className='text-light'>Intermédiare</small>
</article>
<article className="experience__details">
<BsFillPatchCheckFill className='experience__details-icon'/>
<h4>React js</h4>
<small className='text-light'>Maitrise satisfaisante</small>
</article>
</div>
      </div>
    </div>
    </section>
  )
}

export default Experience