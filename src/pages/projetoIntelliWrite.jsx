import React from 'react';

export default function ProjetoIntelliWrite() {
  return (
    <div className="projeto-detalhe">
      <h1>IntelliWrite AI</h1>
      <p>
        <strong>Status:</strong> Em andamento
      </p>
      <h2>Descrição</h2>
      <p>
        Plataforma de análise e correção automática de redações utilizando Machine Learning e Python. O objetivo é facilitar o processo de avaliação de textos, trazendo mais agilidade e precisão para estudantes e professores.
      </p>
      <h2>Relatório</h2>
      <p>
        O projeto está atualmente na fase de desenvolvimento e testes dos algoritmos de correção automática. As próximas etapas incluem integração com interface web e validação dos resultados.
      </p>
      <h2>Tecnologias Utilizadas</h2>
      <ul>
        <li>Python</li>
        <li>Machine Learning</li>
        <li>React (interface)</li>
      </ul>
      <a href="/" className="projeto-btn" style={{marginTop: '2rem', display: 'inline-block'}}>
        Voltar ao Portfólio
      </a>
    </div>
  );
}