import React from 'react'

export default function Index() {
    return (
        <>
            <div className="wrapper">
                {/* <!-- Top Bar Start --> */}
                <div className="top-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12">
                                <div className="logo">
                                    <a href="index.html">
                                        <h1>Builderz</h1>
                                         <img src="assets/img/logo.jpg" alt="Logo"/> 
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 d-none d-lg-block">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="top-bar-item">
                                            <div className="top-bar-icon">
                                                <i className="flaticon-calendar"></i>
                                            </div>
                                            <div className="top-bar-text">
                                                <h3>Opening Hour</h3>
                                                <p>Mon - Fri, 8:00 - 9:00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="top-bar-item">
                                            <div className="top-bar-icon">
                                                <i className="flaticon-call"></i>
                                            </div>
                                            <div className="top-bar-text">
                                                <h3>Call Us</h3>
                                                <p>+012 345 6789</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="top-bar-item">
                                            <div className="top-bar-icon">
                                                <i className="flaticon-send-mail"></i>
                                            </div>
                                            <div className="top-bar-text">
                                                <h3>Email Us</h3>
                                                <p>info@example.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Top Bar End --> */}

                {/* <!-- Nav Bar Start --> */}
                <div className="nav-bar">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                            <a href="#" className="navbar-brand">MENU</a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto">
                                    <a href="index.html" className="nav-item nav-link active">Home</a>
                                    <a href="about.html" className="nav-item nav-link">About</a>
                                    <a href="service.html" className="nav-item nav-link">Service</a>
                                    <a href="team.html" className="nav-item nav-link">Team</a>
                                    <a href="portfolio.html" className="nav-item nav-link">Project</a>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu">
                                            <a href="blog.html" className="dropdown-item">Blog Page</a>
                                            <a href="single.html" className="dropdown-item">Single Page</a>
                                        </div>
                                    </div>
                                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                                </div>
                                <div className="ml-auto">
                                    <a className="btn" href="#">Get A Quote</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* <!-- Nav Bar End --> */}


                {/* <!-- Carousel Start --> */}
                <div id="carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="assets/img/carousel-1.jpg" alt="Carousel Image"/>
                                <div className="carousel-caption">
                                    <p className="animated fadeInRight">We Are Professional</p>
                                    <h1 className="animated fadeInLeft">For Your Dream Project</h1>
                                    <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                                </div>
                        </div>

                        <div className="carousel-item">
                            <img src="assets/img/carousel-2.jpg" alt="Carousel Image"/>
                                <div className="carousel-caption">
                                    <p className="animated fadeInRight">Professional Builder</p>
                                    <h1 className="animated fadeInLeft">We Build Your Home</h1>
                                    <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                                </div>
                        </div>

                        <div className="carousel-item">
                            <img src="assets/img/carousel-3.jpg" alt="Carousel Image"/>
                                <div className="carousel-caption">
                                    <p className="animated fadeInRight">We Are Trusted</p>
                                    <h1 className="animated fadeInLeft">For Your Dream Home</h1>
                                    <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Get A Quote</a>
                                </div>
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
                                    <img src="assets/img/about.jpg" alt="Image"/>
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
                <div className="service">
                    <div className="container">
                        <div className="section-header text-center">
                            <p>Our Services</p>
                            <h2>We Provide Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item">
                                    <div className="service-img">
                                        <img src="assets/img/service-1.jpg" alt="Image"/>
                                            <div className="service-overlay">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                                </p>
                                            </div>
                                    </div>
                                    <div className="service-text">
                                        <h3>Building Construction</h3>
                                        <a className="btn" href="img/service-1.jpg" data-lightbox="service">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="service-item">
                                    <div className="service-img">
                                        <img src="assets/img/service-2.jpg" alt="Image"/>
                                            <div className="service-overlay">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                                </p>
                                            </div>
                                    </div>
                                    <div className="service-text">
                                        <h3>House Renovation</h3>
                                        <a className="btn" href="img/service-2.jpg" data-lightbox="service">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item">
                                    <div className="service-img">
                                        <img src="assets/img/service-3.jpg" alt="Image"/>
                                            <div className="service-overlay">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                                </p>
                                            </div>
                                    </div>
                                    <div className="service-text">
                                        <h3>Architecture Design</h3>
                                        <a className="btn" href="img/service-3.jpg" data-lightbox="service">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="service-item">
                                    <div className="service-img">
                                        <img src="assets/img/service-4.jpg" alt="Image"/>
                                            <div className="service-overlay">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                                </p>
                                            </div>
                                    </div>
                                    <div className="service-text">
                                        <h3>Interior Design</h3>
                                        <a className="btn" href="img/service-4.jpg" data-lightbox="service">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item">
                                    <div className="service-img">
                                        <img src="assets/img/service-5.jpg" alt="Image"/>
                                            <div className="service-overlay">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                                </p>
                                            </div>
                                    </div>
                                    <div className="service-text">
                                        <h3>Fixing & Support</h3>
                                        <a className="btn" href="img/service-5.jpg" data-lightbox="service">+</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="service-item">
                                    <div className="service-img">
                                        <img src="assets/img/service-6.jpg" alt="Image"/>
                                            <div className="service-overlay">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                                </p>
                                            </div>
                                    </div>
                                    <div className="service-text">
                                        <h3>Painting</h3>
                                        <a className="btn" href="img/service-6.jpg" data-lightbox="service">+</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Service End --> */}


                {/* <!-- Video Start --> */}
                <div className="video wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                            <span></span>
                        </button>
                    </div>
                </div>

                <div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                {/* <!-- 16:9 aspect ratio --> */}
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Video End --> */}


                {/* <!-- Team Start --> */}
                <div className="team">
                    <div className="container">
                        <div className="section-header text-center">
                            <p>Our Team</p>
                            <h2>Meet Our Engineer</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="assets/img/team-1.jpg" alt="Team Image"/>
                                    </div>
                                    <div className="team-text">
                                        <h2>Adam Phillips</h2>
                                        <p>CEO & Founder</p>
                                    </div>
                                    <div className="team-social">
                                        <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="assets/img/team-2.jpg" alt="Team Image"/>
                                    </div>
                                    <div className="team-text">
                                        <h2>Dylan Adams</h2>
                                        <p>Civil Engineer</p>
                                    </div>
                                    <div className="team-social">
                                        <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="assets/img/team-3.jpg" alt="Team Image"/>
                                    </div>
                                    <div className="team-text">
                                        <h2>Jhon Doe</h2>
                                        <p>Interior Designer</p>
                                    </div>
                                    <div className="team-social">
                                        <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src="assets/img/team-4.jpg" alt="Team Image"/>
                                    </div>
                                    <div className="team-text">
                                        <h2>Josh Dunn</h2>
                                        <p>Painter</p>
                                    </div>
                                    <div className="team-social">
                                        <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                                        <div className="card-header">
                                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                                                Lorem ipsum dolor sit amet?
                                            </a>
                                        </div>
                                        <div id="collapseOne" className="collapse" data-parent="#accordion-1">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                                        <div className="card-header">
                                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                                                Lorem ipsum dolor sit amet?
                                            </a>
                                        </div>
                                        <div id="collapseTwo" className="collapse" data-parent="#accordion-1">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                                        <div className="card-header">
                                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                                                Lorem ipsum dolor sit amet?
                                            </a>
                                        </div>
                                        <div id="collapseThree" className="collapse" data-parent="#accordion-1">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card wow fadeInLeft" data-wow-delay="0.4s">
                                        <div className="card-header">
                                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseFour">
                                                Lorem ipsum dolor sit amet?
                                            </a>
                                        </div>
                                        <div id="collapseFour" className="collapse" data-parent="#accordion-1">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                                        <div className="card-header">
                                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseFive">
                                                Lorem ipsum dolor sit amet?
                                            </a>
                                        </div>
                                        <div id="collapseFive" className="collapse" data-parent="#accordion-1">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="accordion-2">
                                    <div className="card wow fadeInRight" data-wow-delay="0.1s">
                                        <div className="card-header">
                                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseSix">
                                                Lorem ipsum dolor sit amet?
                                            </a>
                                        </div>
                                        <div id="collapseSix" className="collapse" data-parent="#accordion-2">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card wow fadeInRight" data-wow-delay="0.2s">
                                        <div className="card-header">
                                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseSeven">
                                                Lorem ipsum dolor sit amet?
                                            </a>
                                        </div>
                                        <div id="collapseSeven" className="collapse" data-parent="#accordion-2">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card wow fadeInRight" data-wow-delay="0.3s">
                                        <div className="card-header">
                                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseEight">
                                                Lorem ipsum dolor sit amet?
                                            </a>
                                        </div>
                                        <div id="collapseEight" className="collapse" data-parent="#accordion-2">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card wow fadeInRight" data-wow-delay="0.4s">
                                        <div className="card-header">
                                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseNine">
                                                Lorem ipsum dolor sit amet?
                                            </a>
                                        </div>
                                        <div id="collapseNine" className="collapse" data-parent="#accordion-2">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card wow fadeInRight" data-wow-delay="0.5s">
                                        <div className="card-header">
                                            <a className="card-link collapsed" data-toggle="collapse" href="#collapseTen">
                                                Lorem ipsum dolor sit amet?
                                            </a>
                                        </div>
                                        <div id="collapseTen" className="collapse" data-parent="#accordion-2">
                                            <div className="card-body">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- FAQs End --> */}


                {/* <!-- Testimonial Start --> */}
                <div className="testimonial wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="testimonial-slider-nav">
                                    <div className="slider-nav"><img src="assets/img/testimonial-1.jpg" alt="Testimonial"/></div>
                                    <div className="slider-nav"><img src="assets/img/testimonial-2.jpg" alt="Testimonial"/></div>
                                    <div className="slider-nav"><img src="assets/img/testimonial-3.jpg" alt="Testimonial"/></div>
                                    <div className="slider-nav"><img src="assets/img/testimonial-4.jpg" alt="Testimonial"/></div>
                                    <div className="slider-nav"><img src="assets/img/testimonial-1.jpg" alt="Testimonial"/></div>
                                    <div className="slider-nav"><img src="assets/img/testimonial-2.jpg" alt="Testimonial"/></div>
                                    <div className="slider-nav"><img src="assets/img/testimonial-3.jpg" alt="Testimonial"/></div>
                                    <div className="slider-nav"><img src="assets/img/testimonial-4.jpg" alt="Testimonial"/></div>
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
                </div>
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
                                        <img src="assets/img/blog-1.jpg" alt="Image"/>
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
                                        <img src="assets/img/blog-2.jpg" alt="Image"/>
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
                                        <img src="assets/img/blog-3.jpg" alt="Image"/>
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
                <div className="footer wow fadeIn" data-wow-delay="0.3s">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="footer-contact">
                                    <h2>Office Contact</h2>
                                    <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                                    <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                                    <p><i className="fa fa-envelope"></i>info@example.com</p>
                                    <div className="footer-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-youtube"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="footer-link">
                                    <h2>Services Areas</h2>
                                    <a href="">Building Construction</a>
                                    <a href="">House Renovation</a>
                                    <a href="">Architecture Design</a>
                                    <a href="">Interior Design</a>
                                    <a href="">Painting</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="footer-link">
                                    <h2>Useful Pages</h2>
                                    <a href="">About Us</a>
                                    <a href="">Contact Us</a>
                                    <a href="">Our Team</a>
                                    <a href="">Projects</a>
                                    <a href="">Testimonial</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="newsletter">
                                    <h2>Newsletter</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu
                                    </p>
                                    <div className="form">
                                        <input className="form-control" placeholder="Email here"/>
                                            <button className="btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container footer-menu">
                        <div className="f-menu">
                            <a href="">Terms of use</a>
                            <a href="">Privacy policy</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FQAs</a>
                        </div>
                    </div>
                    <div className="container copyright">
                        <div className="row">
                            <div className="col-md-6">
                                <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved.</p>
                            </div>
                            <div className="col-md-6">
                                <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
                            </div>
                        </div>
                    </div>
                </div>

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
