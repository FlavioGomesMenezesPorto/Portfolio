import React from 'react';
import { Link } from 'react-router-dom';

function ProjetoCard({ titulo, descricao, link }) {
  return (
    <div className="projeto-card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <Link to={link}>Ver projeto</Link>
    </div>
  );
}

export default ProjetoCard;
