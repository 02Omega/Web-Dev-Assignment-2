import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6 order-1 order-lg-2">
            <img src="assets/img/about.jpg" className="img-fluid about-img" alt="About Us" />
          </div>
          <div className="col-lg-6 order-2 order-lg-1 content">
            <h3>Voluptatem dignissimos provident</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
