import React from 'react'
import step1 from './imges/step1.png'
import step2 from './imges/step2.png'
import step3 from './imges/step3.png'
import step4 from './imges/step4.png'
import StepsItem from './StepsItem'


export default function Steps() {
    return (
        <section className='steps text-center'>
            <div className="container">

                <h1>Designed with<br />The applicant in mind</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut?</p>
                <div className="row">
                    <StepsItem bg_color="" image={step1} title={"Designing"} desc="Mucker plastered bugger all mate morish are." />
                    <StepsItem bg_color="linear-gradient(135deg,#f7b8af,#f8452d)" image={step3} title={"Building"} desc="Mucker plastered bugger all mate morish are." />
                    <StepsItem bg_color="linear-gradient(135deg,#a0eac2,#31c369)" image={step4} title={"Suporting"} desc="Mucker plastered bugger all mate morish are." />
                    <StepsItem bg_color="linear-gradient(135deg,#d8aaff,#9b2cfa)x   " image={step2} title={"Searching"} desc="Mucker plastered bugger all mate morish are." />
                </div>
            </div>
        </section>
    )
}
