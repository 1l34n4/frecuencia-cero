import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ListaCasos from './components/ListaCasos';
import ApiGenerador from './components/ApiGenerador';
import FormularioContacto from './components/FormularioContacto';
import DemoTP1 from './components/DemoTP1';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ListaCasos />
      <ApiGenerador />
      <FormularioContacto />
      <DemoTP1 />
      <Footer />
    </>
  );
}

export default App;
