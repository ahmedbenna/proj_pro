import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../comp/Footer'
import AskCard from '../comp/Home/AskCard'
import SearchBox from '../comp/Home/SearchBox'
import ProviderCard from '../comp/provider/ProviderCard'
import ServiceCard from '../comp/Services.js/ServiceCard'
import axios from 'axios';
import { CircularProgress } from '@mui/material'

export default function Index() {
  const [specialitys, setSpecialitys] = useState();
  const [citys, setCitys] = useState();
  const [providers, setProviders] = useState();



  const [speciality, setSpeciality] = useState(null);
  // const [city, setCity] = useState(null); 
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    async function getSpeciality() {
      try {
        const response = await axios.get('http://localhost:8088/speciality/getAllSpeciality');
        console.log(response);
        const first3 = response.data.slice(0, 4)
        setSpecialitys(first3);
        console.log("ccccc", specialitys);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    async function getProvider() {
      try {
        const response = await axios.get('http://localhost:8088/provider/getAllProvider');
        console.log(response);
        var res = response.data.sort(({ feed: a }, { feed: b }) => b - a);
        const first3 = res.slice(0, 4)
        setProviders(first3);
        console.log("ccccc", providers);
        // setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getProvider();




    getSpeciality();
    console.log("city", specialitys)
  }, [loading]);
  return (
    <>
      <div className="wrapper">


        {/* <!-- Carousel Start --> */}
        <div id="carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel" data-slide-to="0" className="active"></li>
            <li data-target="#carousel" data-slide-to="1"></li>
            <li data-target="#carousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/img/carousel-1.jpg" alt="Carousel Image" />
              <div className="carousel-caption">
                <p className="animated fadeInRight">We Are Professional</p>
                <h1 className="animated fadeInLeft">For Your Dream Project</h1>
                <Link to='/searchResult'>
                  <a className="btn animated fadeInUp" >get a provider</a>
                </Link>
              </div>
            </div>

            <div className="carousel-item">
              <img src="assets/img/carousel-2.jpg" alt="Carousel Image" />
              <div className="carousel-caption">
                <p className="animated fadeInRight">Professional Builder</p>
                <h1 className="animated fadeInLeft">We Build Your Home</h1>
                <Link to='/searchResult'>
                  <a className="btn animated fadeInUp" >get a provider</a>
                </Link>              </div>
            </div>

            <div className="carousel-item">
              <img src="assets/img/carousel-3.jpg" alt="Carousel Image" />
              <div className="carousel-caption">
                <p className="animated fadeInRight">We Are Trusted</p>
                <h1 className="animated fadeInLeft">For Your Dream Home</h1>
                <Link to='/searchResult'>
                  <a className="btn animated fadeInUp" >get a provider</a>
                </Link>              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* <!-- Carousel End --> */}


        {/* <!-- Feature Start--> */}
        <div className="feature wow fadeInUp" data-wow-delay="0.1s">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-worker"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Expert Worker</h3>
                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-building"></i>
                  </div>
                  <div className="feature-text">
                    <h3>Quality Work</h3>
                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-call"></i>
                  </div>
                  <div className="feature-text">
                    <h3>24/7 Support</h3>
                    <p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature End--> */}


        {/* <!-- About Start --> */}
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <div className="about-img">
                  <img src="assets/img/about.jpg" alt="Image" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="section-header text-left">
                  <p>Welcome to Builderz</p>
                  <h2>25 Years Experience</h2>
                </div>
                <div className="about-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                  </p>
                  <a className="btn" href="">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}

        {/* <SearchBox/> */}
        {/* <!-- Fact Start --> */}
        <div className="fact">
          <div className="container-fluid">
            <div className="row counters">
              <div className="col-md-6 fact-left wow slideInLeft">
                <div className="row">
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-worker"></i>
                    </div>
                    <div className="fact-text">
                      <h2 data-toggle="counter-up">109</h2>
                      <p>Expert Workers</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-building"></i>
                    </div>
                    <div className="fact-text">
                      <h2 data-toggle="counter-up">485</h2>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 fact-right wow slideInRight">
                <div className="row">
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-address"></i>
                    </div>
                    <div className="fact-text">
                      <h2 data-toggle="counter-up">789</h2>
                      <p>Completed Projects</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="fact-icon">
                      <i className="flaticon-crane"></i>
                    </div>
                    <div className="fact-text">
                      <h2 data-toggle="counter-up">890</h2>
                      <p>Running Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Fact End --> */}


        {/* <!-- Service Start --> */}
        {(specialitys) ? (
          <div className="service">
            <div className="container">
              <div className="section-header text-center">
                <p>Our Services</p>
                <h2>We Provide Services</h2>
              </div>
              <div className="row">

                {specialitys.map(s =>
                  <ServiceCard service={s.label} />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="service">
            <div className="container">
              <CircularProgress />
            </div>
          </div>
        )}

        {/* <!-- Service End --> */}





        {/* <!-- Team Start --> */}
        {(providers) ? (
          <div className="team">
            <div className="container">
              <div className="section-header text-center">
                <p>Our Team</p>
                <h2>Meet Our Providers</h2>
              </div>
              <div className="row">
                {providers.map(p =>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                   
                      <Link key={p.id} style={{ textDecoration: 'none' }} state={{ id: p.id }} to='/ProviderPresenting'>
                        <ProviderCard speciality={p.speciality} firstName={p.firstName} lastName={p.lastName} />
                      </Link>
                   
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="team">
            <div className="container">
              <CircularProgress />
            </div>
          </div>
        )}

        {/* <!-- Team End --> */}


        {/* <!-- FAQs Start --> */}
        <div className="faqs">
          <div className="container">
            <div className="section-header text-center">
              <p>Frequently Asked Question</p>
              <h2>You May Ask</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div id="accordion-1">
                  <AskCard id="1" question="qqqqqq" response="rrrr" />
                  <AskCard id="1" question="qqqqqq" response="rrrr" />
                  <AskCard id="1" question="qqqqqq" response="rrrr" />
                  <AskCard id="1" question="qqqqqq" response="rrrr" />
                  <AskCard id="1" question="qqqqqq" response="rrrr" />


                </div>
              </div>
              <div className="col-md-6">
                <div id="accordion-2">
                  <AskCard id="1" question="qqqqqq" response="rrrr" />
                  <AskCard id="1" question="qqqqqq" response="rrrr" />
                  <AskCard id="1" question="qqqqqq" response="rrrr" />
                  <AskCard id="1" question="qqqqqq" response="rrrr" />
                  <AskCard id="1" question="qqqqqq" response="rrrr" />

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- FAQs End --> */}


        {/* <!-- Testimonial Start --> */}
        {/* <div className="testimonial wow fadeIn" data-wow-delay="0.1s">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="testimonial-slider-nav">
                  <div className="slider-nav"><img src="assets/img/testimonial-1.jpg" alt="Testimonial" /></div>
                  <div className="slider-nav"><img src="assets/img/testimonial-2.jpg" alt="Testimonial" /></div>
                  <div className="slider-nav"><img src="assets/img/testimonial-3.jpg" alt="Testimonial" /></div>
                  <div className="slider-nav"><img src="assets/img/testimonial-4.jpg" alt="Testimonial" /></div>
                  <div className="slider-nav"><img src="assets/img/testimonial-1.jpg" alt="Testimonial" /></div>
                  <div className="slider-nav"><img src="assets/img/testimonial-2.jpg" alt="Testimonial" /></div>
                  <div className="slider-nav"><img src="assets/img/testimonial-3.jpg" alt="Testimonial" /></div>
                  <div className="slider-nav"><img src="assets/img/testimonial-4.jpg" alt="Testimonial" /></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="testimonial-slider">
                  <div className="slider-item">
                    <h3>Customer Name</h3>
                    <h4>profession</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                  </div>
                  <div className="slider-item">
                    <h3>Customer Name</h3>
                    <h4>profession</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                  </div>
                  <div className="slider-item">
                    <h3>Customer Name</h3>
                    <h4>profession</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                  </div>
                  <div className="slider-item">
                    <h3>Customer Name</h3>
                    <h4>profession</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                  </div>
                  <div className="slider-item">
                    <h3>Customer Name</h3>
                    <h4>profession</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                  </div>
                  <div className="slider-item">
                    <h3>Customer Name</h3>
                    <h4>profession</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                  </div>
                  <div className="slider-item">
                    <h3>Customer Name</h3>
                    <h4>profession</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                  </div>
                  <div className="slider-item">
                    <h3>Customer Name</h3>
                    <h4>profession</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Testimonial End --> */}


        {/* <!-- Blog Start --> */}
        <div className="blog">
          <div className="container">
            <div className="section-header text-center">
              <p>Latest Blog</p>
              <h2>Latest From Our Blog</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-item">
                  <div className="blog-img">
                    <img src="assets/img/blog-1.jpg" alt="Image" />
                  </div>
                  <div className="blog-title">
                    <h3>Lorem ipsum dolor sit</h3>
                    <a className="btn" href="">+</a>
                  </div>
                  <div className="blog-meta">
                    <p>By<a href="">Admin</a></p>
                    <p>In<a href="">Construction</a></p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="blog-item">
                  <div className="blog-img">
                    <img src="assets/img/blog-2.jpg" alt="Image" />
                  </div>
                  <div className="blog-title">
                    <h3>Lorem ipsum dolor sit</h3>
                    <a className="btn" href="">+</a>
                  </div>
                  <div className="blog-meta">
                    <p>By<a href="">Admin</a></p>
                    <p>In<a href="">Construction</a></p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="blog-item">
                  <div className="blog-img">
                    <img src="assets/img/blog-3.jpg" alt="Image" />
                  </div>
                  <div className="blog-title">
                    <h3>Lorem ipsum dolor sit</h3>
                    <a className="btn" href="">+</a>
                  </div>
                  <div className="blog-meta">
                    <p>By<a href="">Admin</a></p>
                    <p>In<a href="">Construction</a></p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Blog End --> */}


        {/* <!-- Footer Start --> */}


        <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      </div>

      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
      <script src="assets/lib/easing/easing.min.js"></script>
      <script src="assets/lib/wow/wow.min.js"></script>
      <script src="assets/lib/owlcarousel/owl.carousel.min.js"></script>
      <script src="assets/lib/isotope/isotope.pkgd.min.js"></script>
      <script src="assets/lib/lightbox/js/lightbox.min.js"></script>
      <script src="assets/lib/waypoints/waypoints.min.js"></script>
      <script src="assets/lib/counterup/counterup.min.js"></script>
      <script src="assets/lib/slick/slick.min.js"></script>

      {/* <!-- Template Javascript --> */}
      <script src="assets/js/main.js"></script>
    </>
  )
}
