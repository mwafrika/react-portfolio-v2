import { useState, useMemo, useEffect, useLayoutEffect } from 'react';
import Header from './components/Header';
import List from './components/List';
import About from './components/about';
import Contact from './components/Contact';

function App() {
  return (
    <main className='grid grid-cols-12 grid-rows-[916px_2694px_924px_846px] bg-[#F4F5F7]'>
      <Header />
      <List />
      <About />
      <Contact />
    </main>
  );
}

export default App;
