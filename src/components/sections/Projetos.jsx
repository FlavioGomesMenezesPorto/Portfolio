import projetos from '../../data/projetos.js';

const Projetos = () => {
  return (
    <section className="section projetos-section">
      <h2 className="section-title">Projetos</h2>
      <div className="projetos-lista">
        {projetos.map((projeto, index) => (
          <div className="projeto-card" key={index}>
            <h3>{projeto.titulo}</h3>
            <span className="card-status">{projeto.periodo}</span>
            <p>{projeto.descricao}</p>
            {projeto.linguagens && <p>Linguagens: {projeto.linguagens}</p>}
            {projeto.link && (
              <a 
                href={projeto.link} 
                download 
                className="contato-item"
              >
                {projeto.link_texto}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
