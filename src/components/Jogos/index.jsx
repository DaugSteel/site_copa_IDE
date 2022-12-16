import React from 'react';
import styles from './style.module.css'
import Jogo from './Jogo'

export default function Jogos() 
{
    return (
        <div className={styles.container} id="jogos">
            <p> PRÓXIMOS JOGOS</p>
            <Jogo dia='Quinta-Feira' data='02/11' horario='07:20' adversario={require('./Jogo/Selecoes/japao.png')}></Jogo>
            <Jogo dia='Sexta-Feira' data='07/11' horario='08:00' adversario={require('./Jogo/Selecoes/coreia.png')}></Jogo>
            <Jogo dia='Sábado' data='11/11' horario='20:30' adversario={require('./Jogo/Selecoes/ghana.png')}></Jogo>
        </div>
    )
}
