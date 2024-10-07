import React from 'react';

const BookTable = () => {
  return (
    <section id="book-a-table" className="book-a-table section">
      <div className="container section-title" data-aos="fade-up">
        <h2>RESERVATION</h2>
        <p>Book a Table</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form action="forms/book-a-table.php" method="post" className="php-email-form">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-lg-4 col-md-6">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="col-lg-4 col-md-6">
              <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
            </div>
            <div className="col-lg-4 col-md-6">
              <input type="date" name="date" className="form-control" id="date" required />
            </div>
            <div className="col-lg-4 col-md-6">
              <input type="time" className="form-control" name="time" id="time" required />
            </div>
            <div className="col-lg-4 col-md-6">
              <input type="number" className="form-control" name="people" id="people" placeholder="# of people" required />
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
          </div>
          <div className="text-center mt-3">
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookTable;
