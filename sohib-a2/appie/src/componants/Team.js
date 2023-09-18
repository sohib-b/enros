import React from 'react'
import team1 from './imges/team-1.19cc97a7.jpg'
import team2 from './imges/team-2.693177c4.jpg'
import team3 from './imges/team-3.defc53e9.jpg'
import team4 from './imges/team-4.1ac51f3e.jpg'



export default function Team() {
  return (
    <section className='team'>
      <div className="container text-center">
        <h1>Meet our Team Members</h1>
        <p>Different layouts and styles for team sections.</p>
        <div className="row">

          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="Team-member text-center">
              <div className="team-member-image">
                <div className="team-member-overlay">
                </div>
                <img src={team1} alt="" />
              </div>
              <h5>Benjamin Evalent</h5>
              <span>CEO-Founder                </span>
            </div>
          </div>


          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="Team-member text-center">
              <div className="team-member-image">
                <div className="team-member-overlay">
                </div>
                <img src={team2} alt="" />
              </div>
              <h5>Benjamin Evalent</h5>
              <span>CEO-Founder                </span>
            </div>
          </div>



          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="Team-member text-center">
              <div className="team-member-image">
                <div className="team-member-overlay">
                </div>
                <img src={team3} alt="" />
              </div>
              <h5>Benjamin Evalent</h5>
              <span>CEO-Founder                </span>
            </div>
          </div>



          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="Team-member text-center">
              <div className="team-member-image">
                <div className="team-member-overlay">
                </div>
                <img src={team4} alt="" />
              </div>
              <h5>Benjamin Evalent</h5>
              <span>CEO-Founder                </span>
            </div>
          </div>
<button className='btn view-members'>View All Members</button>
        </div>
      </div>

    </section>
  )
}
