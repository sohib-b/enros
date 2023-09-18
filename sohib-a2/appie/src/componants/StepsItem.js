import React from 'react'

const StepsItem = (props) => {
    return (

        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="steps-item">
                <div className="bg-img" style={{background:props.bg_color}}>
                    <img src={props.image} alt="" />
                </div>
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}


export default StepsItem