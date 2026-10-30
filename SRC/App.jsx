import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ListaCasos from './components/ListaCasos';
import FormularioContacto from './components/FormularioContacto';
import ApiGenerador from './components/ApiGenerador'; // <-- NUEVO
import DemoTP1 from './components/DemoTP1';
import Footer from './components/Footer';
// Proyecto "Frecuencia Cero" - Trabajo Práctico 1 programacionweb2 - Ileana 2026

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ListaCasos />
      <ApiGenerador /> {/* <-- NUEVO */}
      <FormularioContacto />
      <DemoTP1 />
      <Footer />
    </>
  );
}

export default App;
