import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CardList from './components/CardList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <Hero />
        <CardList />
      </main>
    </div>
  );
}

export default App;
