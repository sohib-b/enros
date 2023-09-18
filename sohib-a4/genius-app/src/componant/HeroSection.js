import React from 'react'
import bg3 from './img/bg3.jpg'


export default function HeroSection() {
    return (
        <section className='herosection'>
            <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                  <h2>Genius</h2>
                  <h1>Discover The Wold's Most<br/> Advanced Online Tool</h1>
                  <p>Excepteur sint occaecat cupidatat nonet proident, vante nisle <br/>culpamitus qui officia deserunt etimus quis autem netsum<br/> loremisat entimus velis netsad.</p>
                  <a href='#'><button className='btn'><i class="fa-solid fa-play"></i></button>Watch Presentation Video</a>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                  <img src={bg3} alt="" />
                  </div>
                </div>
            </div>
        </section>
        
    )
}
