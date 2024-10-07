import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import BookTable from './components/BookTable';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <MenuSection />
      <BookTable />
      <Footer />
    </div>
  );
}

export default App;
