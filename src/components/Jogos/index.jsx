import styles from './style.module.css'
import Jogo from './Jogo'

export default function Jogos() 
{
    return (
        <div className={styles.container}>
            <p> PRÓXIMOS JOGOS</p>
            <Jogo dia='Quinta-Feira' data='02/11' horario='07:20' adversario='/japao.png'></Jogo>
            <Jogo dia='Sexta-Feira' data='07/11' horario='08:00' adversario='/coreia.png'></Jogo>
            <Jogo dia='Sábado' data='11/11' horario='20:30' adversario='/ghana.png'></Jogo>
        </div>
    )
}
