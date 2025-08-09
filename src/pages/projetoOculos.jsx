import React from 'react';

export default function ProjetoOculos() {
  return (
    <div className="projeto-detalhe">
      <h1>Óculos para Deficientes Visuais</h1>
      <p>
        <strong>Status:</strong> Finalizado
      </p>
      <h2>Descrição</h2>
      <p>
        Protótipo de óculos inteligente para auxiliar deficientes visuais, integrando sensores e software embarcado para detecção de obstáculos e orientação.
      </p>
      <h2>Relatório</h2>
      <p>
        O projeto envolveu pesquisa, desenvolvimento de hardware com sensores de proximidade e programação embarcada. Os testes mostraram boa eficiência na detecção de obstáculos e facilidade de uso.
      </p>
      <h2>Tecnologias Utilizadas</h2>
      <ul>
        <li>Arduino</li>
        <li>Sensores de proximidade</li>
        <li>Programação embarcada</li>
      </ul>
      <a href="/" className="projeto-btn" style={{marginTop: '2rem', display: 'inline-block'}}>
        Voltar ao Portfólio
      </a>
    </div>
  );
}