import React from 'react'
import sohib from './imges/صور-اسم-صهيب-300x300.jpg'


export default function Testimonials() {
    return (
        <section className='testimonials'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sohib} className="d-block w-100" alt="..." />
                        <h3>Atef Hjaze</h3>
                        <span>14 oct 2000</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae voluptatem nulla nam dolorum reiciendis iste sit labore accusantium quas. Culpa ad provident ea voluptatibus, eos corporis voluptatum sapiente sequi voluptas?ds
                        </p>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    )
}
