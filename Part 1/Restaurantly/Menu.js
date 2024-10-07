import React from 'react';

const MenuSection = () => {
  return (
    <section id="menu" className="menu section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Menu</h2>
        <p>Check Our Tasty Menu</p>
      </div>
      <div className="container isotope-layout" data-layout="masonry">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul className="menu-filters isotope-filters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div>
        <div className="row isotope-container" data-aos="fade-up" data-aos-delay="200">
          {/* Example Menu Item */}
          <div className="col-lg-6 menu-item isotope-item filter-starters">
            <img src="assets/img/menu/lobster-bisque.jpg" className="menu-img" alt="Lobster Bisque" />
            <div className="menu-content">
              <a href="#">Lobster Bisque</a><span>$5.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
