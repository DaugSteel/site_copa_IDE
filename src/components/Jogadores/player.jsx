import React from 'react';
import './style.css'


export default function Jogador({ player, count }) 
{
  const {nome, idade} = player;
  
  return (
    <div className={`playerContainer ${count % 2 === 0? 'even' : ''}`}>
      <div className={`box ${count % 2 === 0? 'evenBox' : ''}`}></div>
      <div>
        <p className={`name ${count % 2 === 0? 'evenName' : ''}`}>{nome}</p>
        <p className={`age ${count % 2 === 0? 'evenAge' : ''}`}>Idade: {idade} anos</p>
      </div>
      <div className={`playerIcon ${count % 2 === 0? 'evenIcon' : ''}`}>{nome[0]}</div>
    </div>
  )
};