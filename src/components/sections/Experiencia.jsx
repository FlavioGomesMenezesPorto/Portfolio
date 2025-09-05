import experiencia from '../../data/experiencia.js';

const Experiencia = () => {
  return (
    <section className="section experiencia-section">
      <h2 className="section-title">Experiência</h2>
      <div className="card-list">
        {experiencia.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.titulo}</h3>
            <p>{item.instituicao}</p>
            <span className="card-status">{item.periodo}</span>
            <ul>
              {item.descricao.split('; ').map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
