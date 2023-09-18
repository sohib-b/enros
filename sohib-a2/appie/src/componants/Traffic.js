import React from 'react'
import TrafficImage from './imges/traffic-thumb.6cf5deff.png'


export default function Traffic() {
    return (
        <section className='traffic'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <span >Traffic</span>
                        <h2>  Stage reporting with <br />50k queries.</h2>
                        <p>He nicked it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.</p>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h3>Carefully designed</h3>
                                <p>Mucker plastered bugger all <br />mate morish are.</p>

                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h3>Carefully designed</h3>
                                <p>Mucker plastered bugger all <br />mate morish are.</p></div>
                            <div className="col-sm-12 col-md-6">
                                <h3>Carefully designed</h3>
                                <p>Mucker plastered bugger all <br />mate morish are.</p></div>
                            <div className="col-sm-12 col-md-6">
                                <h3>Carefully designed</h3>
                                <p>Mucker plastered bugger all <br />mate morish are.</p></div>


                        </div>
                        <button>Learn More</button>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img src={TrafficImage} alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}
