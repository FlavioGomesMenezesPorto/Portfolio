import React from 'react';

function InfoCard({ titulo, instituicao, periodo, descricao }) {
  return (
    <div className="info-card">
      <h3>{titulo}</h3>
      <p><strong>{instituicao}</strong></p>
      <p><em>{periodo}</em></p>
      <p>{descricao}</p>
    </div>
  );
}

export default InfoCard;
