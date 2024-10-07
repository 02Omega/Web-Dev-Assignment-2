import React from 'react';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import StarterSection from './components/StarterSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <PageTitle />
        <StarterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
