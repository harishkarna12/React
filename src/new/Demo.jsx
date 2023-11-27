import React from 'react'

const Demo = () => {
  return (
    <div>
      <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>
                  Redot
                </span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  ">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html"> About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="service.html">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact Us</a>
                  </li>
                </ul>
                <div className="quote_btn-container">
                  <a href className="quote_btn">
                    Get A Quote
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className="slider_section ">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Digital Marketing Experts
                        </h1>
                        <p>
                          A modern growth marketing firm powered by possibility pursuers, we invest in the best technology and expertise to drive results.
                        </p>
                        <div className="btn-box">
                          <a href className="btn1">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Digital Marketing Experts
                        </h1>
                        <p>
                          We're not just a digital marketing company;
                          we're the architects of your online success story,
                          crafting every pixel and pixel-perfect strategy
                          with passion and precision
                        </p>
                        <div className="btn-box">
                          <a href className="btn1">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>
                          Digital Marketing Experts
                        </h1>
                        <p>
                        We Deliver High-impact services to take your business to the next level
                        </p>
                        <div className="btn-box">
                          <a href className="btn1">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li data-target="#customCarousel1" data-slide-to={0} className="active" />
              <li data-target="#customCarousel1" data-slide-to={1} />
              <li data-target="#customCarousel1" data-slide-to={2} />
            </ol>
          </div>
        </section>
        {/* end slider section */}
      </div>
      {/* service section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              Our Services
            </h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src="images/s1.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    Link Building
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                  <a href>
                    <span>
                      Read More
                    </span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src="images/s2.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    On page SEO
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                  <a href>
                    <span>
                      Read More
                    </span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src="images/s3.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    Online Marketing
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                  <a href>
                    <span>
                      Read More
                    </span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img src="images/s4.png" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    Email Marketing
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                  <a href>
                    <span>
                      Read More
                    </span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href>
              View More
            </a>
          </div>
        </div>
      </section>
      {/* end service section */}
      {/* about section */}
      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    About Us
                  </h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                  in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                  are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                  the middle of text. All
                </p>
                <a href>
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="images/about-img.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
      {/* case section */}
      <section className="case_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              Our Case Studies
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/case-1.jpg" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    Sit amet consectetur adipisicing elit
                  </h5>
                  <p>
                    Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                  <a href>
                    <span>
                      Read More
                    </span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div className="img-box">
                  <img src="images/case-2.jpg" alt />
                </div>
                <div className="detail-box">
                  <h5>
                    Excepturi placeat nihil eos maxime
                  </h5>
                  <p>
                    Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                  </p>
                  <a href>
                    <span>
                      Read More
                    </span>
                    <i className="fa fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end case section */}
      {/* client section */}
      <section className="client_section ">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Testimonial
            </h2>
          </div>
        </div>
        <div id="customCarousel2" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <div className="client_info">
                          <div className="client_name">
                            <h5>
                              Morojink
                            </h5>
                            <h6>
                              Customer
                            </h6>
                          </div>
                          <i className="fa fa-quote-left" aria-hidden="true" />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore
                          et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum
                          dolore eu fugia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <div className="client_info">
                          <div className="client_name">
                            <h5>
                              Morojink
                            </h5>
                            <h6>
                              Customer
                            </h6>
                          </div>
                          <i className="fa fa-quote-left" aria-hidden="true" />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore
                          et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum
                          dolore eu fugia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/client.jpg" alt />
                      </div>
                      <div className="detail-box">
                        <div className="client_info">
                          <div className="client_name">
                            <h5>
                              Morojink
                            </h5>
                            <h6>
                              Customer
                            </h6>
                          </div>
                          <i className="fa fa-quote-left" aria-hidden="true" />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore
                          et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum
                          dolore eu fugia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#customCarousel2" data-slide-to={0} className="active" />
            <li data-target="#customCarousel2" data-slide-to={1} />
            <li data-target="#customCarousel2" data-slide-to={2} />
          </ol>
        </div>
      </section>
      {/* end client section */}
      {/* contact section */}
      <section className="contact_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 offset-md-1">
              <div className="form_container">
                <div className="heading_container">
                  <h2>
                    Contact Us
                  </h2>
                </div>
                <form action>
                  <div>
                    <input type="text" placeholder="Full Name " />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone number" />
                  </div>
                  <div>
                    <input type="text" className="message-box" placeholder="Message" />
                  </div>
                  <div className="d-flex ">
                    <button>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 px-0">
              <div className="map_container">
                <div className="map">
                  <div id="googleMap" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
      <div className="footer_container">
        {/* info section */}
        <section className="info_section ">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 ">
                <div className="info_detail">
                  <h4>
                    Redot
                  </h4>
                  <p>
                    Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 mx-auto">
                <div className="info_link_box">
                  <h4>
                    Links
                  </h4>
                  <div className="info_links">
                    <a className href="index.html">
                      Home
                    </a>
                    <a className href="about.html">
                      About
                    </a>
                    <a className href="service.html">
                      Services
                    </a>
                    <a className href="contact.html">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ">
                <h4>
                  Subscribe
                </h4>
                <form action="#">
                  <input type="text" placeholder="Enter email" />
                  <button type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="col-md-6 col-lg-3 mb-0 ml-auto">
                <div className="info_contact">
                  <h4>
                    Address
                  </h4>
                  <div className="contact_link_box">
                    <a href>
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      <span>
                      No 419, 1st Floor, LIG Colony Rd, New LIG Colony, Anna Nagar, Madurai, Tamil Nadu 625020
                      </span>
                    </a>
                    <a href>
                      <i className="fa fa-phone" aria-hidden="true" />
                      <span>
                      (+91)9952599685
                      </span>
                    </a>
                    <a href>
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <span>
                      info@redotsolutions.com
                      </span>
                    </a>
                  </div>
                </div>
                <div className="info_social">
                  <a href>
                    <i className="fa fa-facebook" id='fab' aria-hidden="true" />
                  </a>
                  <a href>
                    <i className="fa fa-twitter" id='twi' aria-hidden="true" />
                  </a>
                  <a href>
                    <i className="fa fa-linkedin" id='li' aria-hidden="true" />
                  </a>
                  <a href>
                    <i className="fa fa-instagram " id='inst' aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end info section */}
        {/* footer section */}
        <footer className="footer_section">
          <div className="container">
            <p>
              © <span id="displayYear" /> Redot Solutions © copyright 2023. All Rights Reserved.
              
            </p>
          </div>
        </footer>
        {/* footer section */}
      </div>
    </div>

  )
}

export default Demo