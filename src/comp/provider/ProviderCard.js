import React from 'react'

function ProviderCard(props) {
    return (
        
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item">
                    <div className="team-img">
                        <img src="assets/img/team-1.jpg" alt="Team Image" />
                    </div>
                    <div className="team-text">
                        <h2>{props.firstName} {props.lastName} </h2>
                        {/* <p>{props.speciality.label}</p> */}
                    </div>
                    <div className="team-social">
                        <a className="social-tw" ><i className="fab fa-twitter"></i></a>
                        <a className="social-fb" ><i className="fab fa-facebook-f"></i></a>
                        <a className="social-li" ><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-in" ><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
       
    )
}

export default ProviderCard