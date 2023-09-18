import React from 'react'
import feature from './imges/features-thumb-1.1f747549.png'

export default function About() {
    return (
        <div>
            <section className='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <ul>
                                <li> Settings</li>
                                <li>Report</li>
                                <li>Saeety Notices</li>
                                <li>App Lock</li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-9">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <img src={feature} alt="" />
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="about-data">
                                        <span>Custom Reacyions</span>
                                        <h2>Let the<br />
                                            Conversation flow</h2>
                                        <p>Car boot absolutely bladdered posh burke the wireless mush some dodg.</p>
                                        <button className='btn'>Learn More</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
