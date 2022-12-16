import React from 'react'
import './style.css'
import Jogador from './player.jsx'

import {playerArray} from './data'

let valorKey = 0;

export default class Jogadores extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      players: playerArray[0],
      selected: 0,
    };
  }

  updatePlayers = (number) => {
    this.setState({ players: playerArray[number], selected: number});
  }

  render() {
    return (
      <div className='container' id="jogadores">

        <div className='container2'>
        
          <h2 className='title'>JOGADORES</h2>

          <div className='bttns'>
            <button className={`btn ${this.state.selected === 0? "selected" : ""}`} onClick={this.updatePlayers.bind(this, 0)}>Atacantes</button>
            <button className={`btn ${this.state.selected === 1? "selected" : ""}`} onClick={this.updatePlayers.bind(this, 1)}>Meio Campo</button>
            <button className={`btn ${this.state.selected === 2? "selected" : ""}`} onClick={this.updatePlayers.bind(this, 2)}>Defensores</button>
            <button className={`btn ${this.state.selected === 3? "selected" : ""}`} onClick={this.updatePlayers.bind(this, 3)}>Goleiros</button>
          </div>

        </div>

        {this.state.players.map((player) => {
          valorKey++
          return <Jogador player = {player} key={valorKey} count = {valorKey} />;
        })}
        
      </div>
      )
    }
}

