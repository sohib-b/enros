import React from 'react'
import hero_thumb1 from './imges/hero-thumb-1.png'
import hero_thumb2 from './imges/hero-thumb-2.png'


export default function Hero() {
  return (
    <section className='hero-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <div className='hero-section-data'>
              <span>Welcome to appie</span>
              <h1>Marnge it all , in this<br />all new syustem</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum accusantium, vero fugiat ea ducimus quas.</p>
              <button className='btn'><i class="fa-brands fa-apple"></i>Donload For ios</button>
              <button className='btn'><i class="fa-brands fa-google-play"></i>Donload For Android</button>
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <div className='hero-section-image'>
              <img src={hero_thumb1} alt='' />
              <img src={hero_thumb2} alt='' />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

