import habilidades from '../../data/habilidades.js';

const Habilidades = () => {
  return (
    <section className="section habilidades-section">
      <h2 className="section-title">Competências</h2>
      <div className="card-list">
        {habilidades.map((habilidade, index) => (
          <div className="card" key={index}>
            <h3>{habilidade.categoria}</h3>
            <ul className="habilidades-lista">
              {habilidade.lista.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
