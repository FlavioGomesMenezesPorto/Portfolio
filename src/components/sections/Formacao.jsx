import formacao from '../../data/formacao.js';

const Formacao = () => {
  return (
    <section className="section formacao-section">
      <h2 className="section-title">Formação</h2>
      <div className="card-list formacao-cards">
        {formacao.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.titulo}</h3>
            <p>{item.instituicao}</p>
            <span className="card-status">{item.periodo}</span>
            {item.link && (
              <a 
                href={item.link} 
                download 
                className="contato-item"
              >
                {item.descricao}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formacao;
