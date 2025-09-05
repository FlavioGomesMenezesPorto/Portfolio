import contato from '../../data/contato.js';

const Contato = () => {
  return (
    <section className="section contato-section">
      <h2 className="section-title">Contato</h2>
      <div className="contato-lista">
        {contato.map((item, index) => (
          <a href={item.link} key={index} className="contato-item" target="_blank" rel="noopener noreferrer">
            {item.emoji} {item.texto}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contato;
