import React from 'react'
import courseImage from '../assets/header.jpg'

const PlacementPage = () => {
  return (
    <div>
      <div className='placementHeaderClass'>
        Empowering Careers, One Placement at a Time<br></br>
At Wisdom Sprouts IT Training Hub, we proudly celebrate our alumni's success stories. See how our students have achieved top positions in leading companies, turning their dreams into reality. Be inspired and join our growing community of achievers!
      </div>

          <div className="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card" style={{"width": "18rem"}}>
              <img src={courseImage} className="card-img-top" alt="..." />
              
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card" style={{"width": "18rem"}}>
              <img src={courseImage} className="card-img-top" alt="..." />
              
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card" style={{"width": "18rem"}}>
              <img src={courseImage} className="card-img-top" alt="..." />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacementPage
