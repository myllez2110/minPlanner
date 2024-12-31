import React from 'react';
import Header from './components/Header';
import LeftSection from './components/LeftSection/LeftSection';

function App() {
  return (
    <div>
      <Header />
      <main className="p-4">
      <LeftSection />
      </main>
    </div>
  );
}

export default App;