import React from 'react'

export default function ServiceCard(props) {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
    <div className="service-item">
      <div className="service-img">
        <img src="assets/img/service-2.jpg" alt="Image" />
        <div className="service-overlay">
          <p>
            {props.description}
          </p>
        </div>
      </div>
      <div className="service-text">
        <h3>{props.service}</h3>
        <a className="btn" href="img/service-2.jpg" data-lightbox="service">+</a>
      </div>
    </div>
  </div>
  )
}
