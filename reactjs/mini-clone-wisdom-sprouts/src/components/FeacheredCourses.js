import React from "react";
import courseImage from '../assets/course.jpg'

const FeacheredCourses = () => {
  return (
    <>
    
    <div class="container mt-5" style={{backgroundColor:"#ddd"}}>
        <div className="container text-center shadow">
        <p className="text-danger">You can learn it</p>
        <p>Featured Courses</p>
        <p>
          These are the most trending and favourite courses among our students.
        </p>
      </div>

      <div className="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card" style={{"width": "18rem"}}>
              <img src={courseImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card" style={{"width": "18rem"}}>
              <img src={courseImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="card" style={{"width": "18rem"}}>
              <img src={courseImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      
    </>
  );
};

export default FeacheredCourses;
