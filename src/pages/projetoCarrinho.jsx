import React from 'react';

export default function ProjetoCarrinho() {
  return (
    <div className="projeto-detalhe">
      <h1>Carrinho Autônomo - Robô Seguidor de Linha</h1>
      <p>
        <strong>Status:</strong> Finalizado (2023)
      </p>
      <h2>Resumo</h2>
      <p>
        O projeto consiste em um robô seguidor de linha desenvolvido para solucionar problemas de transporte e logística em ambientes industriais. O carrinho automatiza o transporte de materiais, produtos e ferramentas, priorizando segurança e eficiência, reduzindo custos e riscos de acidentes.
      </p>
      <h2>Introdução</h2>
      <p>
        Robôs autônomos são projetados para executar tarefas sem intervenção humana, coletando dados do ambiente e tomando decisões em tempo real. O carrinho seguidor de linha utiliza sensores para navegação, podendo ser aplicado em diversos setores industriais para automação de tarefas repetitivas e perigosas.
      </p>
      <h2>Metodologia</h2>
      <ul>
        <li>Utilização de sensores infravermelhos para seguir linhas no chão.</li>
        <li>Sensor ultrassônico para detecção de obstáculos.</li>
        <li>Chassi com motores DC, garra mecânica com servos motores.</li>
        <li>Placa Arduino Uno para controle e programação embarcada.</li>
        <li>Montagem modular para fácil manutenção e adaptação.</li>
      </ul>
      <h2>Resultados e Conclusão</h2>
      <p>
        O protótipo apresentou alta eficiência e baixa taxa de erro. A garra mecânica permitiu manipulação segura de objetos. O sistema demonstrou potencial para automação industrial, otimizando processos de transporte e logística com segurança e versatilidade.
      </p>
      <h2>Tecnologias Utilizadas</h2>
      <ul>
        <li>Arduino Uno</li>
        <li>Sensores infravermelhos e ultrassônicos</li>
        <li>Robótica</li>
        <li>Programação embarcada</li>
        <li>Automação industrial</li>
      </ul>
      <h2>Equipe</h2>
      <p>
        Flávio Gomes, Miguel Mendes, João Gabriel, Gabriel Augusto, Guilherme Augusto
      </p>
      <a href="/" className="projeto-btn" style={{marginTop: '2rem', display: 'inline-block'}}>
        Voltar ao início
      </a>
    </div>
  );
}