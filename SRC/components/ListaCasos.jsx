import CasoCard from './CasoCard';
import { casos } from '../data/casos';

function ListaCasos() {
  return (
    <section className="seccion" id="casos">
      <h2>Casos Registrados</h2>
      <div className="grid-casos">
       {casos.map((evidencia) => (
          <CasoCard
            key={evidencia.id}
            titulo={evidencia.titulo}
            descripcion={caso.descripcion}
            año={caso.año}
            link={caso.link}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaCasos;
