import { useState, useEffect } from 'react';

function ApiGenerador() {
  const [imagen, setImagen] = useState('');
  const [cargando, setCargando] = useState(true);

  const buscarEvidenciaPerdida = async () => {
    setCargando(true);
    // Usamos la API de Lorem Picsum (está en la lista de public-apis)
    // Le agregamos un número aleatorio para que no se repita
    const randomId = Math.floor(Math.random() * 1000);
    setImagen(`https://picsum.photos/id/${randomId}/400/300?grayscale`);
    setCargando(false);
  };

  useEffect(() => {
    obtenerArchivo();
  }, []);

  return (
    <section className="seccion" id="api" style={{ textAlign: 'center' }}>
      <h2>Archivo Recuperado de la Deep Web</h2>
      <p style={{ color: '#888', marginBottom: '1rem' }}>
        Cada vez que actualices, el sistema buscará un archivo distinto al azar.
      </p>
      
      {cargando ? (
        <p style={{ color: '#ff1a1a' }}>Buscando en los servidores...</p>
      ) : (
        <div className="caso-card" style={{ display: 'inline-block', padding: '1rem' }}>
          <img 
            src={imagen} 
            alt="Archivo recuperado" 
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              borderRadius: '8px', 
              border: '2px solid #8b0000',
              // ESTO ES LO MÁGICO: filtro CSS para que parezca de terror
              filter: 'grayscale(100%) contrast(150%) brightness(50%) sepia(30%) hue-rotate(300deg)' 
            }} 
          />
          <br/>
          <button 
            onClick={buscarEvidenciaPerdida} 
            className="btn-video" 
            style={{ marginTop: '1rem', width: '100%' }}
          >
            Buscar otro archivo
          </button>
        </div>
      )}
    </section>
  );
}

export default ApiGenerador;
