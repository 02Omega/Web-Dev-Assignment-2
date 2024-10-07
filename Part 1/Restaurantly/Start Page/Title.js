import React from 'react';

const PageTitle = () => {
  return (
    <div className="page-title position-relative" style={{ backgroundImage: 'url(assets/img/page-title-bg.webp)' }}>
      <div className="container position-relative">
        <h1>Starter Page</h1>
        <p>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
        <nav className="breadcrumbs">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li className="current">Starter Page</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageTitle;
